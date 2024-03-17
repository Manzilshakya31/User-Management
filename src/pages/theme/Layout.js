import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div class="row">
        <div class="left">
          <Sidebar />
        </div>
        <div class="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
