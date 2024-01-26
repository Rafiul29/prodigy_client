import React from "react";
import { useGetAllProductsQuery } from "../../../features/products/productsApi";

const AllProducts = () => {

  const {data}=useGetAllProductsQuery()
  console.log(data)
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-semibold">Browse our products</h1>
    </div>
  );
};

export default AllProducts;
