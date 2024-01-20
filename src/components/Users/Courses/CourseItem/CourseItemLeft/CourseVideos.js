import React from "react";

const CourseVideos = ({ videos }) => {
  return (
    <div className="border-2 border-gray-100 p-3 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-medium text-gray-800">Study Plan</h2>
        <h4 className="flex items-center gap-2">
          <span className="text-3xl font-medium text-gray-800">module:</span>{" "}
          <span className="text-3xl font-medium text-deep-purple-700">
            {videos?.length}
          </span>
        </h4>
      </div>
      <hr />
      <div className="flex flex-col gap-5">
        {videos?.length > 0 &&
          videos?.map((video, i) => (
            <div
              key={video?._id}
              className="border p-3 rounded-md hover:bg-gray-200 hover:border duration-500 cursor-pointer"
            >
              <div className="flex flex-row  items-center gap-5 overflow-hidden">
                <div
                  className={`${
                    i % 2
                      ? "flex flex-col gap-2 justify-center items-center bg-deep-purple-500 py-2 px-3 rounded-md text-xl text-gray-100"
                      : "flex flex-col gap-2 justify-center items-center bg-purple-500 py-2 px-3 rounded-md text-xl text-gray-100"
                  }`}
                >
                  <span className="font-medium">Module</span>
                  <span>{video.module}</span>
                </div>
                <div className="font-semibold">{video.name}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseVideos;


