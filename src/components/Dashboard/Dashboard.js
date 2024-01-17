import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-48 mt-10 min-h-screen  font-medium text-md">
        <ul className="menu p-4 flex flex-col gap-5">
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
              to="/dashboard/reservation"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="/dashboard/cart"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaShoppingCart></FaShoppingCart>
              My Cart{" "}
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink
              to="/dashboard/review"
              className="flex justify-start items-center  flex- gap-2"
            >
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink to="/dashboard/bookings"  className="flex justify-start items-center  flex- gap-2">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink to="/"  className="flex justify-start items-center  flex- gap-2">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="bg-deep-purple-300   p-2 rounded-xl hover:bg-deep-purple-400   duration-700 ">
            <NavLink to="/order/salad"  className="flex justify-start items-center  flex- gap-2">
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
