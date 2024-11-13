"use client";

import { CreateProduct } from "@/lib/actions";
import { SubmitButton } from "../button";
import { useFormState } from "react-dom";

const CreateForm = () => {
  const [state, formAction] = useFormState(CreateProduct, null);
  return (
    <div className='border p-5 border-gray-300'>
      <form action={formAction}>
        <div className='mb-5'>
          <label
            htmlFor='product'
            className='block text-sm font-medium text-gray-900'
          >
            Product Name
          </label>
          <input
            type='text'
            name='product'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Product Name...'
          />
          <div id='product-error' aria-live='polite' aria-atomic='true'>
            <p className='mt-2 text-sm text-red-500'>{state?.Error?.product}</p>
          </div>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='price'
            className='block text-sm font-medium text-gray-900'
          >
            Price
          </label>
          <input
            type='number'
            name='price'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Price...'
          />
        </div>
        <div id='message-error' aria-live='polite' aria-atomic='true'>
          <p className='mt-2 text-sm text-red-500'>{state?.Error?.price}</p>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default CreateForm;
