"use client";

import { deleteProduct } from "@/lib/actions";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
    >
      {pending ? "Authenticating..." : "Sign In"}
    </button>
  );
};

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/product/edit/${id}`}
      className='rounded-sm border p-1 hover:bg-gray-100'
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteProductWithId = deleteProduct.bind(null, id);
  return (
    <form action={DeleteProductWithId}>
      <button className='rounded-sm border p-1 hover:bg-gray-100'>
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const CreateButton = () => {
  return (
    <Link
      href='/product/create'
      className='inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-md text-sm'
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
