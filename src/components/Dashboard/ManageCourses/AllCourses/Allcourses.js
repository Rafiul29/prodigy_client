import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TableTitle from "../../Table/TableTitle";
import CoursesTable from "./CoursesTable";

const Allcourses = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="md:flex justify-between">
        <TableTitle text="All Courses" />

        <Link
          to="/dashboard/addcourses"
          className=" flex justify-center items-center gap-1 text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-md cursor-pointer "
        >
          <span>
            <FaPlus />
          </span>
          <span> Add Courses</span>
        </Link>
      </div>

      <CoursesTable />
    </div>
  );
};

export default Allcourses;
