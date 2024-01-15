import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useGetAllCoursesQuery } from "../../features/courses/coursesApi";

const FilterCourses = () => {
  const { data: courses,isLoading } = useGetAllCoursesQuery();

  let content="";
  if(!isLoading){
    content=courses;
  }

  console.log(content);
  return (
    <div className="max-w-7xl mx-auto my-32">
      <h1 className="text-3xl font-bold text-center">Checkout our courses</h1>
      <div className="grid grid-col-1 md:grid-cols-3 mt-10 gap-10 ">
        <div className="rounded overflow-hidden shadow-lg hover:scale-110 duration-700 hover:bg-deep-purple-400 hover:text-white hover:cursor-pointer">
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_nUTP5Vd52q.json"
            className="player"
            loop
            autoplay
            style={{ height: "300px", width: "300px" }}
          />
        </div>

        {/* <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">Web</div>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            this is an
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            this ia
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default FilterCourses;
