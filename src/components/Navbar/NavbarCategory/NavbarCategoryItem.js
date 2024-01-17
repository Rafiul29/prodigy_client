import React from "react";
import { Link } from "react-router-dom";

const NavbarCategoryItem = ({ category }) => {
  const { _id, name } = category;
  return (
    <div
      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100
                                  hover:text-blue-700"
    >
      <div className="flex-auto">
        <Link key={category._id} to={`/category/courses/${_id}`}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default NavbarCategoryItem;
