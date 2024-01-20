import React from "react";
import Number from "../Animated/Number";

const Stats = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-36 mb-36">
      <h1 className="text-3xl font-bold text-center">Our Statistics</h1>
      <div className="flex flex-col md:flex-row justify-around gap-20 mt-6">
        <div>
          <div className="text-xl font-bold text-center ">
            <h1>Total Videos</h1>
          </div>
          <div className="text-5xl font-bold flex justify-center text-deep-purple-700">
            3000
            {/* <Number n={3000}></Number> */}
            <span>+</span>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-center">
            <h1>Total Students</h1>
          </div>
          <div className="text-5xl font-bold flex justify-center text-deep-purple-600">
            24000
            {/* <Number n={24000}></Number> */}
            <span>+</span>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-center">
            <h1>Successfully Hired </h1>
          </div>
          <div className="text-5xl font-bold flex justify-center text-deep-purple-500">
            17000
            {/* <Number n={17000}></Number> */}
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
