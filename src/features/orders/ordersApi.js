import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    // get all courses
    getAllOrders: builder.query({
      query: () => `/orders/private`,
    }),

    // get a single course
    getOrderExitingUser: builder.query({
      query: () => `/orders/private/user-orders`,
    }),

    // create order
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/stripe/create-checkout-session`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderExitingUserQuery,
} = ordersApi;
