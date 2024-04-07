import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
import axios from "axios";

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

  useEffect(() => {
    //API integration
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert("API SERVER ERROR");
        console.log(err);
      });
    // setUsers(data);

    // setTimeout(() => {
    // }, 1000);
  }, []);

  return (
    <div>
      <h1>User Management</h1>

      <Link to="/user-management/add" className="btn pull-right">
        Add
      </Link>
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
