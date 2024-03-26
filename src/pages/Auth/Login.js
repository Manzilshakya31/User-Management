import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextinput";
import ViPasswordInput from "../../components/ViPasswordInput";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const doLogin = (e) => {
    let isLogin = false;
    if (email === "admin" && password === "admin") {
      isLogin = true;
    }

    if (isLogin) {
      navigate("/user-management");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="Login-form">
      <h1>Login</h1>
      <ViTextInput
        title="Email"
        name="email"
        handleInputChange={handleInputChange}
        value={email}
      />
      <ViPasswordInput
        title="Password"
        name="password"
        handleInputChange={handleInputChange}
        value={password}
      />
      <div className="form-group">
        <button className="btn" onClick={doLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
