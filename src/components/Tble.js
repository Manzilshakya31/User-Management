import React from "react";
import { Link } from "react-router-dom";

const Tble = (props) => {
  return (
    <div>
      <h1>Table</h1>
      <table className="customers">
        <thead>
          <tr>
            {props.header.length > 0 &&
              props.users?.map((row, index) => {
                return <th key={index}>{row.name}</th>;
              })}
            {/* <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th> */}
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
          {props.users.length > 0 &&
            props.users?.map((item, index) => {
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
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/user-management/detail/${item.id}`}
                      className="btn btn-default"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          {props.users.length === 0 && (
            <tr>
              <td colSpan={5}>No records</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tble;
