import React from "react";
import CourseDescription from "./Components/CourseDescription";
import CourseHeader from "./Components/CourseHeader";
import CourseInstructor from "./Components/CourseInstructor";
import CourseLearns from "./Components/CourseLearns";
import CourseVideos from "./Components/CourseVideos";
import Requirement from "./Components/Requirements";
import TakeThisCourse from "./Components/TakeThisCourse";
import Helplines from "./Components/Helplines";

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
    helpLines
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
      <Helplines helpLines={helpLines}/>
    </div>
  );
};

export default CourseItemLeft;
