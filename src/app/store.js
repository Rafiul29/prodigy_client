import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import categorySliceReducer from "../features/category/categorySlice";
import coursesSliceReducer from "../features/courses/coursesSlice";
import usersSliceReducer from "../features/users/usersSlice";
import ordersSliceReducer from "../features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    users: usersSliceReducer,
    category: categorySliceReducer,
    courses: coursesSliceReducer,
    orders:ordersSliceReducer,
  },
  
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
