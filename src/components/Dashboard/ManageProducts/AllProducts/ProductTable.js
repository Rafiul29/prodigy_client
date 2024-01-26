import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Error from "../../../ui/Error";
import Loader from "../../../ui/Loaders/Loader";
import TableData from "../../Table/TableData";
import TableHeader from "../../Table/TableHeader";
import { TableLinkData } from "../../Table/TableLinkData";
import { useDeleteProductMutation, useGetOwnProductsQuery } from "../../../../features/products/productsApi";

const ProductTable = () => {
  // const { data: category, isLoading, isError } = useGetAllCategoriesQuery();
  const { data: products, isLoading, isError}=useGetOwnProductsQuery()

  const [
    deleteProduct,
    { data: resProduct, isLoading: resLoading },
  ] = useDeleteProductMutation();

//   delete product
  const handleDelete = (pid) => {
    deleteProduct(pid);
  };

  useEffect(() => {
    if (resProduct?._id) {
      toast.info("product delete successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (resProduct?.error) {
      toast.warning(`${resProduct?.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [resProduct]);

  // decide what to do render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message={`access denite`} />;
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = <Error message={"product not Found"} />;
  }
  if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Product Name" />
              <TableHeader title="Price" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
            </tr>
          </thead>
          <tbody>
            {products?.length>0 &&
              products.map((product, i) => (
                <tr
                  key={product?._id}
                  class="text-xs bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                  <TableData data={1 + i} />
                  <TableData data={product?.title} />

                  <TableData data={product?.price} />
                
                  <TableLinkData
                    data={<FaRegEdit />}
                    link={`/dashboard/update-product/${product?._id}`}
                  />
                  <td
                    aria-disabled={resLoading}
                    onClick={() => handleDelete(product?._id)}
                    class="text-red-400 px-5 text-2xl py-2 font-sans cursor-pointer"
                  >
                    <MdDelete />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <>{content}</>;
};

export default ProductTable;
