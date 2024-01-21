import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../features/courses/coursesApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import Video from "./Video";

const Videos = () => {
  const { cid } = useParams();

  const { data: course, isError, isLoading } = useGetSingleCourseQuery(cid);

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
  if (!isLoading && isError) {
    content = <Error message="video not found" />;
  }

  if (!isLoading && !isError && !course?._id) {
    content = <Error message="video not found" />;
  }

  if (!isLoading && !isError && course?.videos?.length > 0) {
    content = course?.videos?.map((video) => (
      <Video key={video?._id} video={video} />
    ));
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-5rem)]">
      <div className="container mx-auto">
        <div className="videos grid grid-cols-3 gap-5">{content}</div>
      </div>
    </div>
  );
};

export default Videos;
