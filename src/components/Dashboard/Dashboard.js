import { BiCategoryAlt } from "react-icons/bi";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { LiaStripe } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import logo from "../../assets/FP log.png"
const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-full mt-10 min-h-screen  font-medium text-md">
      <div className="flex lg:flex-1">
                <img src={logo} alt='logo' className="" />
              </div>
        <ul className="menu p-4 flex flex-col gap-5">

          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2">
            <NavLink
              to="/"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2">
            <NavLink
              to="/dashboard/manage-users"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaUser></FaUser>
              Users
            </NavLink>
          </li>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2 ">
            <NavLink
              to="manage-courses"
              className="flex justify-start items-center  flex- gap-2"
            >
              <SiCoursera></SiCoursera>
              Courses
            </NavLink>
          </li>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2 ">
            <NavLink
              to="/dashboard/manage-category"
              className="flex justify-start items-center  flex- gap-2"
            >
              <BiCategoryAlt></BiCategoryAlt>
              Categories
            </NavLink>
          </li>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2 ">
            <NavLink
              to="/dashboard/manage-product"
              className="flex justify-start items-center  flex- gap-2"
            >
              <BiCategoryAlt></BiCategoryAlt>
              Products
            </NavLink>
          </li>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2">
            <NavLink
              to="/dashboard/payment-history"
              className="flex justify-start items-center  flex- gap-2"
            >
              <LiaStripe></LiaStripe>
              Payments history
            </NavLink>
          </li>

          <div className="divider"></div>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2">
            <NavLink
              to="/"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500 p-2 ">
            <NavLink
              to="/"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
