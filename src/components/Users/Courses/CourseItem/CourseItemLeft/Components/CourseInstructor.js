import { SiInstructure } from "react-icons/si";

const CourseInstructor = ({ name, photo }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-medium">Instructor:</h2>
      <hr />
      <div className="bg-deep-purple-50 rounded-md p-5 flex flex-col gap-3">
        <div className="flex  justify-start items-center gap-5">
          <SiInstructure className="font-medium text-3xl text-deep-purple-900" />
          <h3 className="text-xl font-medium">Led Instructor</h3>
        </div>
        <div className="flex justify-start items-center gap-10 bg-gray-50 p-4 rounded-md">
          <img
            src={photo}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-deep-purple-500"
          />
          <h2 className="text-2xl font-medium">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
