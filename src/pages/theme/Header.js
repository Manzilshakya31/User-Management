import React from "react";
import { useNavigate } from "react-router-dom";
import logo_virinchi from "../../assets/images/logo_virinchi.png";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };
  return (
    <div class="header">
      <div>
        {/* <h1>Virinchi College</h1> */}
        <img src={logo_virinchi} height={60} />
      </div>
      <div>
        <button type="button" onClick={logout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
