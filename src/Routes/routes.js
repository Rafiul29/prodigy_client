import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Admin from "../Pages/Admin/Admin";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Orders from "../Pages/Orders/Orders";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddCategory from "../components/Admin/Category/AddCategory";
import CourseVideoAdded from "../components/Admin/CourseVideos/CourseVideosAdded";
import AddCourses from "../components/Admin/Courses/AddCourses";
import CoursesIncludeAdded from "../components/Admin/CoursesIncludes/CoursesIncludeAdded";
import CourseRequirementAdded from "../components/Admin/Requirements/CourseRequirementAdded";
import AllUsers from "../components/Admin/Users/AllUsers";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import CourseLearns from "../components/Admin/CourseLearns/CourseLearnsAdded";
import Allcourses from "../components/Admin/Courses/Allcourses";

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
        path: "/courses",
        element: <Courses />,
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
        path: "/dashboard",
        element: <Admin />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/addcourses",
        element: <AddCourses />,
      },
      {
        path: "/dashboard/manage-courses/",
        element: <Allcourses />,
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
    ],
  },
]);
