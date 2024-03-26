import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
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
