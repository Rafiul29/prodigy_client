import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import {
  useDeleteCourseMutation,
  useGetAllCoursesQuery,
  useGetOwnCoursesQuery,
} from "../../../../features/courses/coursesApi";
import { currencyFormatter } from "../../../../utils/currencyFormatter";
import Error from "../../../ui/Error";
import Loader from "../../../ui/Loaders/Loader";
import TableData from "../../Table/TableData";
import TableHeader from "../../Table/TableHeader";
import { TableLinkData } from "../../Table/TableLinkData";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CoursesTable = () => {
  // const { data: courses, isLoading, isError } = useGetAllCoursesQuery();
    const { data: courses, isLoading, isError } = useGetOwnCoursesQuery();
    console.log(courses)

  const [deleteCourse, { data: resCourse, error }] = useDeleteCourseMutation();
  const handleDelete = (cid) => {
    deleteCourse(cid);
  };

  // toast message
  useEffect(()=>{
      if(resCourse?._id){
        toast.info("course delete successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if(!resCourse?._id && error?.data){
        toast.warning(`${error?.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
  },[resCourse?._id,error?.data])

  // decide what to do render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="Course not found" />;
  }

  if (!isLoading && !isError && courses?.length === 0) {
    content = <Error message={"Course not found"} />;
  }

  if (!isLoading && !isError && courses?.length > 0) {
    content = (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Title" />
              <TableHeader title="category" />
              <TableHeader title="price" />
              <TableHeader title="Student" />
              <TableHeader title="duration" />
              <TableHeader title="videos" />
              <TableHeader title="Learn" />
              <TableHeader title="Requirement" />
              <TableHeader title="Includes" />
              <TableHeader title="Take this" />
              <TableHeader title="Update" />
              <TableHeader title="Delete" />
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((course, i) => (
                <tr
                  key={course._id}
                  class="text-xs bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                  <TableData data={1 + i} />
                  <TableData data={course.title} />
                  <TableData data={course.category?.name} />
                  <TableData data={currencyFormatter(course.price)} />
                  <TableData data={course.students} />
                  <TableData data={`${course.duration}h`} />

                  <TableLinkData
                    data={<IoMdAddCircleOutline />}
                    link={`/dashboard/course-add-video/${course._id}`}
                  />

                  <TableLinkData
                    data={<IoMdAddCircleOutline />}
                    link={`/dashboard/course-learns-added/${course._id}`}
                  />
                  <TableLinkData
                    justify-center
                    items-center
                    data={<IoMdAddCircleOutline />}
                    link={`/dashboard/course-requirement-added/${course._id}`}
                  />

                  <TableLinkData
                    data={<IoMdAddCircleOutline />}
                    link={`/dashboard/course-include-added/${course._id}`}
                  />
                  <TableLinkData
                    data={<IoMdAddCircleOutline />}
                    link={`/dashboard/course-take-this-added/${course._id}`}
                  />

                  <TableLinkData
                    data={<FaRegEdit />}
                    link={`/dashboard/update-course/${course._id}`}
                  />

                  <td
                    onClick={() => handleDelete(course._id)}
                    class="text-red-400 px-5 text-2xl py-2 font-sans cursor-pointer"
                  >
                    <MdDelete />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
};

export default CoursesTable;
