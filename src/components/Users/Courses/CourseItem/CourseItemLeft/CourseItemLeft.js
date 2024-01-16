import React from "react";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseInstructor from "./CourseInstructor";

const CourseItemLeft = ({ course }) => {
  return (
    <>
      <CourseHeader  title={course?.title} />
      <CourseDescription description={course?.description} />
      <CourseInstructor
        name={course?.instructor_name}
        photo={course?.instructor_photo}
      />
    </>
  );
};

export default CourseItemLeft;
