import React from "react";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseVideos from "./CourseVideos";
import CourseInstructor from "./CourseInstructor"

const CourseItemLeft = ({ course }) => {
  const { title, description, instructor_name, instructor_photo, videos } =
    course;
  return (
    <div className="flex flex-col gap-10">
      <CourseHeader title={title} />
      <CourseDescription description={description} />
      <CourseVideos videos={videos} />
      <CourseInstructor name={instructor_name} photo={instructor_photo} />

    </div>
  );
};

export default CourseItemLeft;
