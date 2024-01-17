import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../../features/courses/coursesApi";
import Error from "../../../ui/Error";
import CourseItemLeft from "./CourseItemLeft/CourseItemLeft";
import CourseItemRight from "./CourseItemRight/CourseItemRight";

const CourseItem = () => {
  const { cid } = useParams();

  const { data: course, isLoading, isError } = useGetSingleCourseQuery(cid);
  let content = null;

  if (isLoading) {
    content = <Error message="Loading ............" />;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && course?._id) {
    content = (
      <div className="w-full  grid grid-cols-7 gap-8 ">
        <div className="col-span-4 flex flex-col gap-3">
          <CourseItemLeft course={course} />
        </div>
        <div className="col-span-3 flex flex-col gap-8 ">
          <CourseItemRight course={course} />
        </div>
      </div>
    );
  }
  

  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-5rem)]">
      <div className="max-w-6xl mx-auto mt-14">
        <div className="flex gap-4 items-center">{content}</div>
      </div>
    </div>
  );
};

export default CourseItem;
