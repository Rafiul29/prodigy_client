import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const EntrollCourses = ({ order }) => {
 
  return (
    <div className="border flex flex-col justify-center items-center  lg:grid md:grid-cols-7 lg:gap-2  gap-5 p-4 rounded-md bg-gray-100">
      <div className="md:col-span-2 overflow-hidden">
        <img
          src={order?.course?.thumbnail}
          alt={order?.course?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="lg:col-span-3 flex justify-center items-center text-3xl font-semibold  tracking-wider text-purple-900">
        {order?.course?.title}
      </h2>
      <div className=" lg:col-span-2 flex justify-center items-center">
        <Link
          to={`/user-dashboard/course/videos/${order?.course?._id}`}
          className="flex items-center gap-1 justify-center
        bg-purple-800 px-5 py-2 pfont-medium text-xl font-medium text-gray-100 rounded-full hover:bg-purple-700 hover:text-gray-50 hover:shadow-lg duration-500"
        >
          <span>Continue Course</span>
          <MdKeyboardArrowRight className="text-2xl font-bold" />
        </Link>
      </div>
    </div>
  );
};

export default EntrollCourses;
