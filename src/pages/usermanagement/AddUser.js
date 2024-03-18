import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [emailName, setemailName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log("das", username);
  }, [username]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setemailName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const saveForm = () => {
    console.log("save form");
    console.log("Username", username);
    console.log("Email", emailName);
    console.log("Age", age);
    console.log("City", city);
    navigate("/user-management");
  };
  return (
    <div>
      <h2 className="text-black">Add user</h2>
      <div>
        <label>Username</label>
        <input type="text" onChange={handleUsernameChange} value={username} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" onChange={handleEmailChange} value={emailName} />
      </div>
      <div>
        <label>Age</label>
        <input type="text" onChange={handleAgeChange} value={age} />
      </div>
      <div>
        <label>City</label>
        <input type="text" onChange={handleCityChange} value={city} />
      </div>
      <div>
        <button onClick={saveForm}>Save</button>
      </div>
    </div>
  );
};

export default AddUser;
