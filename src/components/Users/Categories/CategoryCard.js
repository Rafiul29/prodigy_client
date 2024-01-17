import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, image, name, courses, workshops } = category;
  return (
    <Link key={category._id} to={`/category/courses/${_id}`}>
      <div className="rounded overflow-hidden shadow-lg hover:scale-110 duration-700 hover:bg-deep-purple-400 hover:text-white hover:cursor-pointer">
        <Player
          src={image}
          className="player"
          loop
          autoplay
          style={{ height: "300px", width: "300px" }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {courses.length} courses
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {workshops} workshops
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
