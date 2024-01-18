import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Orders from "../Pages/Orders/Orders";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import CourseLearns from "../components/Dashboard/CourseLearns/CourseLearnsAdded";
import CourseVideoAdded from "../components/Dashboard/CourseVideos/CourseVideosAdded";
import CoursesIncludeAdded from "../components/Dashboard/CoursesIncludes/CoursesIncludeAdded";
import AddCategory from "../components/Dashboard/ManageCategory/AddCategory";
import AllCategory from "../components/Dashboard/ManageCategory/AllCategory/AllCategory";
import AddCourses from "../components/Dashboard/ManageCourses/AddCourses";
import Allcourses from "../components/Dashboard/ManageCourses/AllCourses/Allcourses";
import AllUsers from "../components/Dashboard/ManageUsers/AllUsers";
import PayamentDetails from "../components/Dashboard/PaymentDetails/PaymentDetail";
import CourseRequirementAdded from "../components/Dashboard/Requirements/CourseRequirementAdded";

import TakeThisCourse from "../components/Dashboard/TakeThisCourse/TakeThisCourse";
import CourseItem from "../components/Users/Courses/CourseItem/CourseItem";
import Courses from "../components/Users/Courses/CoursesCategory/Courses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "/signin",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: "/category/courses/:cid",
        element: <Courses />,
      },
      {
        path: "/course/:cid",
        element: <CourseItem />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/manage-courses",
        element: <Allcourses />,
      },
      {
        path: "/dashboard/addcourses",
        element: <AddCourses />,
      },
      {
        path: "/dashboard/manage-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/manage-category",
        element: <AllCategory />,
      },
      {
        path: "/dashboard/addcategory",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/course-add-video/:cid",
        element: <CourseVideoAdded />,
      },
      {
        path: "/dashboard/course-requirement-added/:cid",
        element: <CourseRequirementAdded />,
      },
      {
        path: "/dashboard/course-include-added/:cid",
        element: <CoursesIncludeAdded />,
      },
      {
        path: "/dashboard/course-learns-added/:cid",
        element: <CourseLearns />,
      },
      {
        path: "/dashboard/course-payment-details-added/:cid",
        element: <PayamentDetails />,
      },
      {
        path: "/dashboard/course-take-this-added/:cid",
        element: <TakeThisCourse />,
      },
    ],
  },
]);
