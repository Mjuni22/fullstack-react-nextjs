import { object, string } from "zod";

export const SignInSchema = object({
  email: string().email("Invalid email"),
  password: string()
    .min(8, "password must be more than 8 character")
    .max(32, "password must be less than 32 character"),
});

export const RegisterSchema = object({
  name: string().min(1, "Name must be more than 1 character"),
  email: string().email("Invalid email"),
  password: string()
    .min(8, "password must be more than 8 character")
    .max(32, "password must be less than 32 character"),
  ConfirmPassword: string()
    .min(8, "password must be more than 8 character")
    .max(32, "password must be less than 32 character"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"],
});
