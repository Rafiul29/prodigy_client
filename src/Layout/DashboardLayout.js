import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
   
      <div className="grid grid-cols-[13%_84%] gap-[2%] relative z-[2]">
        <div className=" bg-gray-200 text-gray-100 top-0 left-0  z-[3]">
          <Dashboard />
        </div>
        <div className="mt-5 p-1 rounded-md">
          <Outlet />
        </div>
      </div>
  
  );
};

export default DashboardLayout;
