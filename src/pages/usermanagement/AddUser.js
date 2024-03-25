import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextinput";

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
  });

  const validateForm = () => {
    let isValid = true;
    if (user.username === "") {
      isValid = false;
    }
    if (user.email === "") {
      isValid = false;
    }
    if (user.age === "") {
      isValid = false;
    }
    if (user.city === "") {
      isValid = false;
    }
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
        errMessage="Username required"
      />
      <ViTextInput
        title="Email"
        name="email"
        value={user.email}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage="Email required"
      />
      <ViTextInput
        title="Age"
        name="age"
        value={user.age}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage="Age required"
      />
      <ViTextInput
        title="City"
        name="city"
        value={user.city}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage="City required"
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
      <div>
        <button className="btn" onClick={saveForm}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddUser;
