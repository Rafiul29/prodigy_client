import React from "react";

const CourseLearns = ({ learns }) => {
  console.log(learns);
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-medium text-gray-800">What will Learns</h2>
      <div className="border p-4 rounded-md grid grid-cols-2 md:grid-cols-4 gap-3 ">
        {learns?.length > 0 &&
          learns.map((learn, i) => (
            <div
              className={`${
                i % 2===0
                  ? "bg-deep-purple-500 px-4 py-2 rounded-lg text-gray-50 font-semibold text-center overflow-hidden text-md hover:bg-deep-purple-400 hover:text-gray-100 duration-500"
                  : "bg-purple-500 px-4 py-2 rounded-lg text-gray-50 font-semibold text-center overflow-hidden text-md hover:bg-purple-400 hover:text-gray-200 duration-500"
              }`}
            >
              {learn?.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseLearns;
