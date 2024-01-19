import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export const CourseIncludes = ({ courseincludes }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">This Course Inclues:</h2>
      <div className="grid grid-cols-2 gap-2 p-2">
        {courseincludes?.length > 0 &&
          courseincludes.map((inclues) => (
            <div
              key={inclues._id}
              className="flex flex-row items-center justify-start gap-2 bg-gray-200 p-1 rounded-md hover:bg-gray-300 duration-500"
            >
              <IoMdCheckmarkCircleOutline className="text-deep-purple-900 text-xl overflow-hidden" />
              <p className="text-sm overflow-hidden">{inclues.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
