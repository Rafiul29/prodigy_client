import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navbar/Navbar";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-2 ">
        <div className="col-span-2 bg-red-300">
          <Dashboard />
        </div>
        <div className="col-span-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
