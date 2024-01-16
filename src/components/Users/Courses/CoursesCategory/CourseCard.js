import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, title, instructor_name, price, thumbnail } = course;
  return (
    <div className="rounded overflow-hidden shadow-xl hover:scale-105 duration-700 max-w-xl ">
      <Link to={`/course/${_id}`}>
        <img src={thumbnail} alt={title} />

        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
        </div>
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2 text-center">
            Instructor Name {" "}
            <span className="text-deep-purple-600">{instructor_name}</span>
          </div>
        </div>
        <div className="px-4 pt-4 pb-2 flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-extrabold text-gray-900 mr-2 mb-2">
            ৳{" "}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-bold text-gray-900 mr-2 mb-2">
            {price}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
