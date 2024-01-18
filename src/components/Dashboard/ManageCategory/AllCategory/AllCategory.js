import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import TableTitle from "../../Table/TableTitle";
import CategoryTable from "./CategoryTable";

const AllCategory = () => {


  return (
    <div className="flex flex-col gap-5">
      <div className="md:flex justify-between">
        <TableTitle text="All Category" />

        <Link
          to="/dashboard/addcategory"
          className=" flex justify-center items-center gap-1 text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-md cursor-pointer "
        >
          <span>
            <FaPlus />
          </span>
          <span> Add Category</span>
        </Link>
      </div>
     <CategoryTable/>
    </div>
  );
};

export default AllCategory;
