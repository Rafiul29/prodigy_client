import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../../../features/category/categoryApi";
import Form from "./Form";
import Loader from "../../../ui/Loaders/Loader";
import Error from "../../../ui/Error";

const UpdateCategory = () => {
  const { cid } = useParams();

  const { data: category, isLoading, isError } = useGetSingleCategoryQuery(cid);
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
    content = <Error message="User not found" />;
  }

  if (!isLoading && !isError && category?._id) {
    content = <Form category={category} />;
  }


  return (
    <section className="pt-6 mt-20 pb-16 min-h-[calc(100vh-5rem)]">
      <div className="max-w-4xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
              Update Category
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new category
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
           {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateCategory;
