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

          <li className="bg-deep-purple-300 w-full  rounded-xl hover:bg-deep-purple-400  duration-700 p-2">
            <NavLink
              to="/"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="/dashboard/manage-users"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaUser></FaUser>
              Users
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="manage-courses"
              className="flex justify-start items-center  flex- gap-2"
            >
              <SiCoursera></SiCoursera>
              Courses
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="/dashboard/manage-category"
              className="flex justify-start items-center  flex- gap-2"
            >
              <BiCategoryAlt></BiCategoryAlt>
              Categories
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="/dashboard/payments"
              className="flex justify-start items-center  flex- gap-2"
            >
              <LiaStripe></LiaStripe>
              Payments history
            </NavLink>
          </li>

          <div className="divider"></div>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="/"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
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
