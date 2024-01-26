import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ["Categories", "Category"],
    // endpoints here
    // get all category
    getAllCategories: builder.query({
      query: () => `/categories/private`,
      keepUnusedDataFor: 600,
      providesTags: ["Categories", "Category"],
    }),
    // get a single category
    getSingleCategory: builder.query({
      query: (cid) => `/categories/private/${cid}`,
      providesTags: (result, error, arg) => [{ type: "Category", cid: arg }],
    }),

    // get all own a  category
    getOwnCategory: builder.query({
      query: () => "/categories/private/own-category",
      keepUnusedDataFor: 600,
      providesTags: ["Categories", "Category"],
    }),
    // create a new category
    createCategory: builder.mutation({
      query: (data) => ({
        url: "categories/private",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Categories",
        { type: "Category", id: arg.id },
      ],
    }),
    // delete a category
    deleteCategory: builder.mutation({
      query: (cid) => ({
        url: `/categories/private/${cid}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Categories",
        { type: "Category", id: arg.id },
      ],
    }),
    // update category
    updateCategory: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/categories/private/${cid}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Categories",
        { type: "Category", id: arg.id },
      ],
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
