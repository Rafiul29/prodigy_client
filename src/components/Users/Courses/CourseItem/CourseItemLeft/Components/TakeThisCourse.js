import React from "react";

const TakeThisCourse = ({ takeThisCourses }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-medium text-gray-800">Who who Should Take This Course</h2>
      <div className="border flex flex-col gap-2 p-2">
        {takeThisCourses.length > 0 &&
          takeThisCourses.map((takeThisCours) => (
            <h4
              key={takeThisCours._id}
              className="p-2 text-md tracking-wider bg-gray-100 hover:bg-purple-50/50 rounded-md duration-500"
            >
              {takeThisCours.title}
            </h4>
          ))}
      </div>
    </div>
  );
};

export default TakeThisCourse;
