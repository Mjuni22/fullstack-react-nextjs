/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth, signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { CreateProductSchema, RegisterSchema, SignInSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { message: "User already exists" };
    }

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    redirect("/login");
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      message:
        "An error occurred while creating your account. Please try again later.",
    };
  }
};

export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials" };
        default:
          return { message: "Something went wrong. Please try again later." };
      }
    }
    throw new Error();
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await prisma.product.delete({
      where: { id },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { message: "Failed to delete contact" };
  }

  revalidatePath("/product");
};

// Create Product Action
export const CreateProduct = async (prevState: any, formData: FormData) => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    redirect("/login");
    return;
  }

  const validateFields = CreateProductSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { product, price } = validateFields.data;
  const priceNumber = Number(price);
  if (isNaN(priceNumber)) {
    return { message: "Invalid price value, must be a number" };
  }

  try {
    await prisma.product.create({
      data: {
        name: product,
        price: priceNumber,
        userId: session.user.id, // now guaranteed to be a valid string
      },
    });
  } catch (error) {
    console.error("Failed to create product:", error);
    return {
      message: "Failed to create product, please try again later.",
    };
  }

  revalidatePath("/product");
  redirect("/product");
};
