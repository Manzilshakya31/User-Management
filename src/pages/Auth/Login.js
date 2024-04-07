import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextinput";
import ViPasswordInput from "../../components/ViPasswordInput";
import ViMessage from "../../components/ViMessage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

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
      localStorage.setItem("isLogin", "1");
      navigate("/user-management");
    } else {
      // alert("Login failed");
      setErrorMessage("Invalid email or password!!");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "1") {
      navigate("/user-management");
    }
  });

  return (
    <div className="Login-form">
      <h1>Login</h1>
      {/* {email === "admin" && password === "admin" ? (
        " "
      ) : (
        <p>Incorrect email or password</p>
      )} */}

      {errorMessage && <ViMessage message={errorMessage} />}
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
