import React from "react";
import { useGetAllProductsQuery } from "../../../features/products/productsApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import ProductCard from "./ProductCard";

const AllProducts = () => {

  const {data:products,isError,isLoading}=useGetAllProductsQuery()
  
    // decide what to do render
    let content = null;
    if (isLoading) {
      content = (
        <>
          <Loader />
          <Loader />
        </>
      );
    }
  
    if (!isLoading && isError) {
      content = <Error message="product not Found" />;
    }
  
    if (!isLoading && !isError && products?.length === 0) {
      content = <Error message="product not Found" />;
    }
    if (!isLoading && !isError && products?.length > 0) {
        content=(
          products?.map((product)=>(
            <ProductCard key={product._id} product={product}/>
          ))
        )
    }
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-semibold">Browse our products</h1>
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {content}
      </div>

    </div>
  );
};

export default AllProducts;
