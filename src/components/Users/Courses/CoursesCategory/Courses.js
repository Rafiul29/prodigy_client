import { useParams } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../../../features/courses/coursesApi";
import Error from "../../../ui/Error";
import Loader from "../../../ui/Loaders/Loader";
import CourseCard from "./CourseCard";

const Courses = () => {
  const { cid } = useParams();
  let setUrl = "";

  if (cid) {
    setUrl = `?categoryId=${cid}`;
  }
  const {
    data: categoryRelatedCourses,
    isLoading,
    isError,
  } = useGetAllCoursesQuery(setUrl);

  let content = null;

  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && !isError && categoryRelatedCourses?.length === 0) {
    content = <Error message="No courses found!" />;
  }

  if (!isLoading && !isError && categoryRelatedCourses?.length > 0) {
    content = categoryRelatedCourses.map((course) => (
      <>
        <CourseCard key={course._id} course={course} />
        <CourseCard key={course._id} course={course} />
        <CourseCard key={course._id} course={course} />
        <CourseCard key={course._id} course={course} />
      </>
    ));
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-5rem)]">
      <div className="max-w-6xl mx-auto mt-14">
        {!isLoading && (
          <>
            <div className="flex gap-4 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
                alt=""
                className="h-20 w-20"
              />
              <h1 className="text-4xl font-bold">
                {categoryRelatedCourses &&
                  categoryRelatedCourses[0]?.category?.name}
              </h1>
            </div>
            <p className="text-xl font-semibold mt-4 text-gray-800">
              Learn and build your career
            </p>

            <div className="flex items-center gap-2 mt-12 mb-5">
              <h1 className="text-xl font-semibold">
                Live course and workshops
              </h1>
            </div>
          </>
        )}

        <div
          className={`${
            isLoading
              ? "w-full"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Courses;
