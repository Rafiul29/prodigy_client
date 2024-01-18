import React from "react";
import { Link } from "react-router-dom";

const NavbarCategoryItem = ({ category }) => {
  const { _id, name } = category;
  return (
    <div
      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 bg-gray-100
      hover:bg-gray-200 cursor-pointer
       hover:text-blue-700"
    >
      <div className="flex-auto font-semibold  text-md">
        <Link key={category._id} to={`/category/courses/${_id}`}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default NavbarCategoryItem;
