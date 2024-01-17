import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
    {/* dashboard side bar */}
    <div className="w-48 min-h-screen bg-deep-purple-500 text-gray-200">
        <ul className="menu p-4">
            <li>
                <NavLink to="/dashboard/users">
                    <FaHome></FaHome>
                    User Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a Review</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/bookings">
                    <FaList></FaList>
                    My Bookings</NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to="/order/salad">
                    <FaSearch></FaSearch>
                    Menu</NavLink>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Dashboard