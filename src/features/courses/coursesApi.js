import { apiSlice } from "../api/apiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    // get all courses
    getAllCourses: builder.query({
      query: (setUlrl = "") => `/courses/private/${setUlrl}`,
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
      query: ({ cid, data }) => ({
        url: `/courses/private/${cid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // course video api
    //course video added
    videoAdded: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/private/videos/add/${cid}`,
        method: "POST",
        body: data,
      }),
    }),

    // courseVideoDeleted: builder.mutation({
    //   query: ({cid,data}) => ({
    //     url: `/courses/private/learn/delete/${cid}`,
    //     method: "DELETE",
    //     body:data
    //   }),
    // }),

    // course lean api
    // add course lean
    learnAdded: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/private/learns/add/${cid}`,
        method: "POST",
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
    includesAdd: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/private/includes/add/${cid}`,
        method: "POST",
        body: data,
      }),
    }),
    // course inclue delete
    // IncludesDelete: builder.mutation({
    //   query: (data) => ({
    //     url: `/private/includes/delete`,
    //     method: "DELETE",
    //     body: data,
    //   }),
    // }),

    // course requirement
    // course requirement added
    requirementAdded: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/private/requirements/add/${cid}`,
        method: "POST",
        body: data,
      }),
    }),
    // course requirement delete
    // courseRequirementDelete: builder.mutation({
    //   query: (data) => ({
    //     url: `/courses/private/requirement/add`,
    //     method: "DELETE",
    //     body: data,
    //   }),
    // }),
    paymentDetailsAdded: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/private/payments-details/add/${cid}`,
        method: "POST",
        body: data,
      }),
    }),
    takeThisCoursesAdded: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/private/take-this-course/add/${cid}`,
        method: "POST",
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
  useVideoAddedMutation,

  useIncludesAddMutation,
  useLearnAddedMutation,
  useCourseLeanDeleteMutation,
  useRequirementAddedMutation,
  usePaymentDetailsAddedMutation,
  useTakeThisCoursesAddedMutation,
} = coursesApi;
