import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../features/category/categoryApi";
import Error from "../../../ui/Error";
import Loader from "../../../ui/Loaders/Loader";
import TableData from "../../Table/TableData";
import TableHeader from "../../Table/TableHeader";
import { TableLinkData } from "../../Table/TableLinkData";

const CategoryTable = () => {
  const { data: category, isLoading, isError } = useGetAllCategoriesQuery();

  const [
    deleteCategory,
    { data: resCategory, isLoading: resLoading },
  ] = useDeleteCategoryMutation();

  // delete category
  const handleDelete = (cid) => {
    deleteCategory(cid);
  };

  useEffect(() => {
    if (resCategory?._id) {
      toast.info("category delete successfully", {
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
    if (resCategory?.error) {
      toast.warning(`${resCategory?.error}`, {
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
  }, [resCategory]);

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

  if (!isLoading && !isError && category?.length === 0) {
    content = <Error message={"User not Found"} />;
  }
  if (!isLoading && !isError && category?.length > 0) {
    content = (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Category Name" />
              <TableHeader title="Number of Course" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
            </tr>
          </thead>
          <tbody>
            {category &&
              category.map((category, i) => (
                <tr
                  key={category._id}
                  class="text-xs bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                  <TableData data={1 + i} />
                  <TableData data={category.name} />
                  <TableData data={category.courses.length} />

                  <TableLinkData
                    data={<FaRegEdit />}
                    link={`/dashboard/update-category/${category._id}`}
                  />
                  <td
                    aria-disabled={resLoading}
                    onClick={() => handleDelete(category._id)}
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

export default CategoryTable;
