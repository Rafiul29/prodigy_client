import React from "react";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseVideos from "./CourseVideos";
import CourseInstructor from "./CourseInstructor"
import CourseLearns from "./CourseLearns";

const CourseItemLeft = ({ course }) => {
  const { title, description, instructor_name, instructor_photo, videos,whatYouWillLearns } =
    course;
  return (
    <div className="flex flex-col gap-10">
      {/* course title */}
      <CourseHeader title={title} />
      {/* course description */}
      <CourseDescription description={description} />
      {/* course learn */}
      <CourseLearns  learns={whatYouWillLearns}/>
      {/* study plan */}
      <CourseVideos videos={videos} />
      {/* course instructor */}
      <CourseInstructor name={instructor_name} photo={instructor_photo} />
    </div>
  );
};

export default CourseItemLeft;
