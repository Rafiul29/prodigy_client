import React from "react";
import { currencyFormatter } from "../../../../../utils/currencyFormatter";
import { CourseIncludes } from "./components/CourseIncludes";
import Player from "../../../../Player/Palyer";
import PayButton from "./components/PayButton";

const CourseItemRight = ({ course }) => {
  
  return (
    <>
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
          <CourseIncludes courseincludes={course.thisCourseIncludes} />
        </div>
      </div>
    </>
  );
};

export default CourseItemRight;
