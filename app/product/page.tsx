import ProductTable from "@/components/auth/product-table";
import { CreateButton } from "@/components/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Menampilkan Product",
};
const ProductPage = () => {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className='max-w-screen-md mx-auto py-10'>
        <div className='flex items-center justify-between mx-auto'>
          <h1 className='text-2xl font-bold'>Product List</h1>
          <CreateButton />
        </div>
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductPage;
