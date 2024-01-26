import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../features/products/productsApi";
import UpdateForm from './UpdateForm';
import Error from "../../../ui/Error";
import Loader from "../../../ui/Loaders/Loader";

const UpdateProduct = () => {
  const { pid } = useParams();

  const { data: product, isLoading, isError } = useGetSingleProductQuery(pid);
  let content = null;

  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="Product not found" />;
  }

  if (!isLoading && !isError && product?._id) {
    content = <UpdateForm product={product} />;
  }


  return (
    <section className="pt-6 mt-20 pb-16 min-h-[calc(100vh-5rem)]">
      <div className="max-w-4xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
              Update Product
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new Product
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
           {content}
          </div>
        </div>
      </div>
    </section>
  )
};

export default UpdateProduct;
