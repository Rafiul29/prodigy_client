import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-5rem)]">
      <div className="flex justify-center items-center md:mt-24 mt-12 ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h2 className="text-4xl ">Congratulations course enroll successfully</h2>
          <Link to="/user-dashboard" className="text-sm font-semibold bg-purple-900 text-gray-100 px-5 py-2 rounded-full hover:bg-purple-800 hover:text-gray-100 hover:shadow-lg duration-500">Checkout your course</Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
