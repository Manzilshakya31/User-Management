import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextinput";
import { validateEmail } from "../../utils/common";
import ViPasswordInput from "../../components/ViPasswordInput";

const AddUser = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isValid, setIsValidate] = useState();
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [emailName, setemailName] = useState("");
  // const [age, setAge] = useState("");
  // const [city, setCity] = useState("");

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
    password: "",
  });

  const [errorMsg, setErrMsg] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const err = { ...errorMsg };
    if (user.username === "") {
      err.username = "Username is required";
      isValid = false;
    } else {
      err.username = "";
    }
    if (user.email === "") {
      err.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(user.email)) {
      err.email = "Email is not valid";
      isValid = false;
    } else {
      err.email = "";
    }

    if (user.age === "") {
      err.age = "Age is required";
      isValid = false;
    } else {
      err.age = "";
    }
    if (user.city === "") {
      err.city = "City is required";
      isValid = false;
    } else {
      err.city = "";
    }
    if (user.password === "") {
      err.password = "Passowrd is required";
      isValid = false;
    } else {
      err.password = "";
    }
    setErrMsg(err);

    // if (user.username === "") {
    //   isValid = false;
    // }
    // if (user.email === "") {
    //   isValid = false;
    // }
    // if (user.age === "") {
    //   isValid = false;
    // }
    // if (user.city === "") {
    //   isValid = false;
    // }
    return isValid;
  };
  // useEffect(() => {
  //   console.log("das", username);
  // }, [username]);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setemailName(event.target.value);
  // };
  // const handleAgeChange = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  // };

  const saveForm = () => {
    setIsSubmitted(true);
    console.log("error message", errorMsg);
    // console.log("save form");
    console.log("User:", user);
    // console.log("Username", username);
    // console.log("Email", emailName);
    // console.log("Age", age);
    // console.log("City", city);
    if (validateForm()) {
      navigate("/user-management");
    }
  };
  return (
    <div>
      <h2 className="text">Add user</h2>
      <ViTextInput
        title="Username"
        name="username"
        value={user.username}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.username}
      />
      <ViTextInput
        title="Email"
        name="email"
        value={user.email}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.email}
      />
      <ViTextInput
        title="Age"
        name="age"
        value={user.age}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.age}
      />
      <ViTextInput
        title="City"
        name="city"
        value={user.city}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.city}
      />
      <ViPasswordInput
        title="Password"
        name="password"
        value={user.password}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.password}
      />
      {/* <div>
        <label>Username</label> */}
      {/* <input type="text" onChange={handleUsernameChange} value={username} /> */}
      {/* <input
          type="text"
          onChange={handleInputChange}
          name="username"
          value={user.username}
        />
        {isSubmitted && user.username === "" && (
          <span className="label-danger">Required</span>
        )}
      </div> */}

      {/* <div>
        <label>Email</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="email"
          value={user.email}
        />
        {isSubmitted && user.email === "" && (
          <span className="label-danger">Required</span>
        )}
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="age"
          value={user.age}
        />
      </div>
      {isSubmitted && user.age === "" && (
        <span className="label-danger">Required</span>
      )}
      <div>
        <label>City</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="city"
          value={user.city}
        />
      </div>
      {isSubmitted && user.city === "" && (
        <span className="label-danger">Required</span>
      )} */}
      <div className="form-group">
        <button className="btn" onClick={saveForm}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddUser;
