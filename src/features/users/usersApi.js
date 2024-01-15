import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  tagTypes: ["Users", "User"],
  endpoints: (builder) => ({
    // endpoints here
    // get all user
    getAllUsers: builder.query({
      query: () => `/users/private`,
      keepUnusedDataFor: 600,
      providesTags: ["Users",'User'],
    }),
    getUsersProfile: builder.query({
      query: () => `/users/private/profile`,
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: "/users/private/update-profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Users",
        { type: "User", id: arg.id },
      ],
    }),
    deleteUserAccount: builder.mutation({
      query: () => ({
        url: "/users/private/delete-profile",
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Users",
        { type: "User", id: arg.id },
      ],
    }),
    updateUserRole: builder.mutation({
      query: (data) => ({
        url: "/users/private/user-role-update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Users",
        { type: "User", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUsersProfileQuery,
  useUpdateUserProfileMutation,
  useDeleteUserAccountMutation,
  useUpdateUserRoleMutation,
} = usersApi;
