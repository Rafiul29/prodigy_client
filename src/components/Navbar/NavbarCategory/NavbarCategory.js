import React from "react";
import { useGetAllCategoriesQuery } from "../../../features/category/categoryApi";
import Error from "../../ui/Error";
import NavbarCategoryItem from "./NavbarCategoryItem";

const NavbarCategory = () => {
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();

  let content = null;

  if (isLoading) {
    content = (
      <div className="max-w-7xl mx-auto my-32">
        Loading .....................
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="Loading ........." />;
  }

  if (!isLoading && !isError && categories?.length === 0) {
    content = <Error message="category not found" />;
  }

  if (!isLoading && !isError && categories?.length > 0) {
    content = categories?.map((category) => (
      <NavbarCategoryItem key={category._id} category={category} />
    ));
  }
  return <>{content}</>;
};

export default NavbarCategory;
