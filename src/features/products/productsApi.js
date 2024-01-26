import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ["Products", "Product"],
    // endpoints here
    // get all product
    getAllProducts: builder.query({
      query: () => "/private/products",
      keepUnusedDataFor: 600,
      providesTags: ["Products", "Product"],
    }),
    // get a single product
    getSingleProduct: builder.query({
      query: (pid) => `/private/products/${pid}`,
      providesTags: (result, error, arg) => [{ type: "Product", cid: arg }],
    }),

    // get all own a  product
    getOwnProducts: builder.query({
      query: () => "/private/products/own-product",
      keepUnusedDataFor: 600,
      providesTags: ["Products", "Product"],
    }),
    // create a new product
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/private/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Products",
        { type: "Product", id: arg.id },
      ],
    }),
    // delete a product
    deleteProduct: builder.mutation({
      query: (pid) => ({
        url: `/private/products/${pid}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Products",
        { type: "Product", id: arg.id },
      ],
    }),
    // update product
    updateProduct: builder.mutation({
      query: ({ pid, data }) => ({
        url: `/private/products/${pid}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Products",
        { type: "Product", id: arg.id },
      ],
    }),
  }),
});

export const {
    useCreateProductMutation,
    useDeleteProductMutation,
    useGetAllProductsQuery,
    useGetOwnProductsQuery,
    useGetSingleProductQuery,
    useUpdateProductMutation,
  } = productsApi;
  