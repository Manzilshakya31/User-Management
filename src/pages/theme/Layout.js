import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <div class="row">
        <div class="left">
          <Sidebar />
        </div>
        <div class="right">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
