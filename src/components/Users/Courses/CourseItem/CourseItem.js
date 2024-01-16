import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../../features/courses/coursesApi";
import { currencyFormatter } from "../../../../utils/currencyFormatter";
import Error from "../../../ui/Error";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseInstructor from "./CourseInstructor";
import Player from "./Palyer";
import PayButton from "./PayButton";
import { CourseIncludes } from "./CourseIncludes";

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
          <CourseHeader title={course?.title} />
          <CourseDescription description={course?.description} />
          <CourseInstructor
            name={course?.instructor_name}
            photo={course?.instructor_photo}
          />
        </div>
        <div className="col-span-3 flex flex-col gap-8 ">
          <div className="flex flex-col gap-2">
            <Player
              title={course?.videos[0]?.name}
              link={course?.videos[0]?.video_link}
            />
            <h3 className="text-xl font-medium ">{course?.videos[0]?.name}</h3>
          </div>
          <div className="border-2 border-gray-100 p-3 flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center rounded-md">
              <span className="text-deep-purple-600 font-semibold text-xl">
                {currencyFormatter(course.price)}
              </span>
              <PayButton course={course} />
            </div>
            <div className="flex flex-col gap-3">
              <hr
                className="s
               bg-deep-purple-900"
              />
              <CourseIncludes courseincludes={course.thisCourseIncludes}/>
            
            </div>
          </div>
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
