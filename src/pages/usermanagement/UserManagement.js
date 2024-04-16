import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
import {
  getAllUsers,
  searchByEmail,
  searchByUsername,
} from "../../service/user-management.service";
import ViTextInput from "../../components/ViTextinput";

const header = [
  {
    key: "username",
    label: "Username",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "city",
    label: "City",
  },
];

// const data = [
//   {
//     id: "1",
//     username: "Ram",
//     email: "ram@gmail.com",
//     age: 5,
//     city: "Nepal",
//   },
//   {
//     id: "2",
//     username: "Ram",
//     email: "ram@gmail.com",
//     age: 5,
//     city: "Nepal",
//   },
//   {
//     id: "3",
//     username: "Ram",
//     email: "ram@gmail.com",
//     age: 5,
//     city: "Nepal",
//   },
// ];

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  useEffect(() => {
    //API integration
    // axios
    //   .get("http://localhost:4000/users")
    //   .then((res) => {
    //     setUsers(res.data);
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        alert("API SERVER ERROR");
        console.log(err);
      });
    // setUsers(data);

    // setTimeout(() => {
    // }, 1000);
  }, []);

  const handleSearchUsername = (e) => {
    setSearchUsername(e.target.value);
    searchByUsername(e.target.value)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        alert("API server error");
        console.log(err);
      });
  };
  const handleSearchEmail = (e) => {
    setSearchEmail(e.target.value);
    searchByEmail(e.target.value)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        alert("API server error");
        console.log(err);
      });
  };
  return (
    <div className="usr-management">
      <h1>User Management</h1>

      <Link to="/user-management/add" className="btn pull-right">
        Add
      </Link>

      <br />
      <div className="vi-flex-container">
        <div style={{ flexGrow: "5" }}>
          <ViTextInput
            title="Username"
            name="username"
            placeholder="Search by username"
            value={searchUsername}
            handleInputChange={handleSearchUsername}
          />
        </div>
        <div style={{ flexGrow: "5" }}>
          <ViTextInput
            title="Email"
            name="email"
            placeholder="Search by email"
            value={searchEmail}
            handleInputChange={handleSearchEmail}
          />
        </div>
      </div>

      <ViTable
        data={users}
        header={header}
        actions={[
          {
            name: "Detail",
            link: "/user-management/detail",
            className: "btn btn-default",
          },
          {
            name: "Edit",
            link: "/user-management/edit",
            className: "btn",
          },
          {
            name: "Delete",
            link: "/user-management/delete",
            className: "btn btn-danger",
          },
        ]}
      />

      <h1>Banks</h1>
      <ViTable
        data={[
          {
            name: "Everest",
            branch: "Baneshwor",
          },
          {
            name: "Sanima",
            branch: "Bouddha",
          },
          {
            name: "Siddhartha",
            branch: "Patan",
          },
        ]}
        header={[
          {
            key: "name",
            label: "Name",
          },
          {
            key: "branch",
            label: "Branch",
          },
        ]}
      />
    </div>
  );
};

export default UserManagement;
