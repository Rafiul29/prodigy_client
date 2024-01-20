import React from "react";

const Requirements = ({ requirements }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-medium text-gray-800">Requiremnts</h2>
      <div className="border flex flex-col gap-2 p-2">
        {requirements.length > 0 &&
          requirements.map((requirement) => (
            <h4
              key={requirement._id}
              className="p-2 text-md tracking-wider hover:bg-purple-50/50 rounded-md duration-500"
            >
              {requirement.title}
            </h4>
          ))}
      </div>
    </div>
  );
};

export default Requirements;
