import React from "react";
import { useGetAllCategoriesQuery } from "../../../features/category/categoryApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import CategorCard from "./CategoryCard";

const AllCategories = () => {
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();

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
    content = <Error message="category not found" />;
  }

  if (!isLoading && !isError && categories?.length === 0) {
    content = <Error message="category not found" />;
  }

  if (!isLoading && !isError && categories?.length > 0) {
    content = categories?.map((category) => (
      <CategorCard key={category._id} category={category} />
    ));
  }

  return (
    <div className="max-w-7xl mx-auto my-32">
      <h1 className="text-3xl font-bold text-center">Checkout our courses</h1>
      <div
        className={`${
          isLoading ? "w-full" : "grid grid-col-1 md:grid-cols-3 mt-10 gap-10"
        } `}
      >
        {content}
      </div>
    </div>
  );
};

export default AllCategories;
