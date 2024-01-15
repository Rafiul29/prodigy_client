import { apiSlice } from "../api/apiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    // get all courses
    getAllCourses: builder.query({
      query: () => `/courses/private`,
    }),
    // get a single course
    getSingleCourse: builder.query({
      query: (cid) => `/courses/private/${cid}`,
    }),
    // get all own a  courses
    getOwnCourses: builder.query({
      query: (cid) => `/courses/private/${cid}`,
    }),
    // create a new courses
    createCourse: builder.mutation({
      query: (data) => ({
        url: "courses/private",
        method: "POST",
        body: data,
      }),
    }),
    // delete a courses
    deleteCourse: builder.mutation({
      query: (cid) => ({
        url: `/courses/private/${cid}`,
        method: "DELETE",
      }),
    }),
    // update courses
    updateCourse: builder.mutation({
      query: ({ data, cid }) => ({
        url: `/users/courses/${cid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // course lean api
    // add course lean
    courseLeanAdd: builder.mutation({
      query: (data) => ({
        url: `/courses/private/learn/add`,
        method: "PUT",
        body: data,
      }),
    }),
    // delete course lean
    courseLeanDelete: builder.mutation({
      query: (data) => ({
        url: `/courses/private/learn/delete`,
        method: "DELETE",
        body: data,
      }),
    }),
    
    // course include
    // add curse includes
    courseIncludesAdd: builder.mutation({
      query: (data) => ({
        url: `/courses/private/includes/add`,
        method: "PUT",
        body: data,
      }),
    }),
    // course inclue delete
    courseIncludesDelete: builder.mutation({
      query: (data) => ({
        url: `/courses/private/includes/delete`,
        method: "DELETE",
        body: data,
      }),
    }),

    // course requirement
    // course requirement added
    courseRequirementAdd: builder.mutation({
      query: (data) => ({
        url: `/courses/private/requirement/add`,
        method: "PUT",
        body: data,
      }),
    }),
    // course requirement delete
    courseRequirementDelete: builder.mutation({
      query: (data) => ({
        url: `/courses/private/requirement/add`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useDeleteCourseMutation,
  useGetAllCoursesQuery,
  useGetOwnCoursesQuery,
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
  useCourseIncludesAddMutation,
  useCourseIncludesDeleteMutation,
  useCourseLeanAddMutation,
  useCourseLeanDeleteMutation,
  useCourseRequirementAddMutation,
  useCourseRequirementDeleteMutation,
} = coursesApi;
