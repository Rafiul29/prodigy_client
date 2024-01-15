import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    // get all category
    getAllCategories: builder.query({
      query: () => `/categories/private`,
    }),
    // get a single category
    getSingleCategory: builder.query({
      query: (cid) => `/categories/private/${cid}`,
    }),

    // get all own a  category
    getOwnCategory: builder.query({
      query: (cid) => `/categories/private/${cid}`,
    }),
    // create a new category
    createCategory: builder.mutation({
      query: (data) => ({
        url: "categories/private",
        method: "POST",
        body: data,
      }),
    }),
    // delete a category
    deleteCategory: builder.mutation({
      query: (cid) => ({
        url: `/categories/private/${cid}`,
        method: "DELETE",
      }),
    }),
    // update category
    updateCategory: builder.mutation({
      query: ({ data, cid }) => ({
        url: "/users/private/user-role-update",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useGetOwnCategoryQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} = categoryApi;
