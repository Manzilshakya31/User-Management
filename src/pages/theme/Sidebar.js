import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/user-management">User Management</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* <h1>Sidebar</h1> */}
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
