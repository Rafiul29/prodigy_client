import React from "react";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseInstructor from "./CourseInstructor";
import CourseLearns from "./CourseLearns";
import CourseVideos from "./CourseVideos";
import Requirement from "./Requirements";
import TakeThisCourse from "./TakeThisCourse";

const CourseItemLeft = ({ course }) => {
  const {
    title,
    description,
    instructor_name,
    instructor_photo,
    videos,
    whatYouWillLearns,
    requirements,
    whoShouldTakeThisCourse,
  } = course;
  return (
    <div className="flex flex-col gap-10">
      {/* course title */}
      <CourseHeader title={title} />
      {/* course description */}
      <CourseDescription description={description} />
      {/* course learn */}
      <CourseLearns learns={whatYouWillLearns} />
      {/* study plan */}
      <CourseVideos videos={videos} />
      {/* course instructor */}
      <CourseInstructor name={instructor_name} photo={instructor_photo} />
      <Requirement requirements={requirements} />
      <TakeThisCourse takeThisCourses={whoShouldTakeThisCourse} />
    </div>
  );
};

export default CourseItemLeft;
