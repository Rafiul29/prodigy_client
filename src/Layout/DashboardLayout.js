import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
    <Dashboard/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
