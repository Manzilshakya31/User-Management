import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    Username: "Ram",
    email: "ram@gmail.com",
    age: 5,
    city: "Nepal",
  },
  {
    id: "2",
    Username: "Ram",
    email: "ram@gmail.com",
    age: 5,
    city: "Nepal",
  },
  {
    id: "3",
    Username: "Ram",
    email: "ram@gmail.com",
    age: 5,
    city: "Nepal",
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(data);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <p>Hello</p>

      <Link to="/user-management/add">Add</Link>
      <table className="customers">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        {/* {users?.map((item) => {
          return (
            <tr>
              <td>{item.Username}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          );
        })} */}
        <tbody>
          {users.length > 0 &&
            users?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.Username}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>
                    <Link
                      to={`/user-management/edit/${item.id}`}
                      className="btn"
                    >
                      {" "}
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/user-management/delete/${item.id}`}
                      className="btn"
                    >
                      Delete
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/user-management/detail/${item.id}`}
                      className="btn"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          {users.length === 0 && (
            <tr>
              <td colSpan={5}>No records</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
