import React from "react";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseInstructor from "./CourseInstructor";

const CourseItemLeft = ({ course }) => {
  const {title,description,instructor_name,instructor_photo}=course
  return (
    <>
      <CourseHeader  title={title} />
      <CourseDescription description={description} />
      <CourseInstructor
        name={instructor_name}
        photo={instructor_photo}
      />
    </>
  );
};

export default CourseItemLeft;
