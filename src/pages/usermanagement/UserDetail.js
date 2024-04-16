import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../service/user-management.service";

const UserDetail = () => {
  const { userId } = useParams();
  // const data = [
  //   {
  //     id: 1,
  //     username: "John",
  //     email: "jon@gmailcom",
  //     age: 25,
  //     city: "London",
  //   },
  //   {
  //     id: 2,
  //     username: "Jane",
  //     email: "jane@gmailcom",
  //     age: 22,
  //     city: "New York",
  //   },
  //   {
  //     id: 3,
  //     username: "Paul",
  //     email: "paul@gmailcom",
  //     age: 30,
  //     city: "Paris",
  //   },
  // ];
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    // axios
    //   .get(`http://localhost:4000/users/${userId}`)
    //   .then((res) => {
    //     setUser(res.data);
    getUserById(userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        alert("API server error");
        console.log(err);
      });
  });

  // useEffect(() => {
  //   axios.get("http://localhost:4000/users").then((res) => {
  //     setUser(res.data);
  //     const newUser = res.data.find(
  //       (obj) => obj.id.toString() === id.toString()
  //     );
  //     if (newUser) {
  //       setUser(newUser);
  //     }
  //   });
  // }, []);

  return (
    <div>
      <div>
        <h2>User Detail</h2>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Age: {user.age}</div>
        <div>City: {user.city}</div>
      </div>
    </div>
  );
};

export default UserDetail;
