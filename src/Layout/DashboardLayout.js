import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";


const AdminLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-[11%_89%]">
        <div className=" bg-gray-200 text-gray-100 p">
          <Dashboard />
        </div>
        <div className="overflow-hidden ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
