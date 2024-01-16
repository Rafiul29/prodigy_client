import React, { useEffect } from "react";
import { useGetAllCoursesQuery } from "../../../features/courses/coursesApi";
import { useParams } from "react-router-dom";

const FilterCourses = () => {

  const {cid}=useParams();

  const { data: courses, isLoading } = useGetAllCoursesQuery();
useEffect(()=>{

},[cid])
  return <>
  de</>;
};

export default FilterCourses;
