import React from "react";
import { Link } from "react-router-dom";

const ViTable = (props) => {
  return (
    <div>
      {/* <h1>Table</h1> */}
      <table className="customers">
        <thead>
          <tr>
            {props.header.length > 0 &&
              props.header.map((row, index) => {
                return <th key={index}>{row.label}</th>;
              })}
            {/* <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th> */}
            {/* <th colSpan={3}>Action</th> */}
            {props.actions && props.actions.length > 0 && (
              <th colSpan={3}>Action</th>
            )}
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
          {/* {props.users.length > 0 &&
            props.users?.map((item, index) => { */}
          {props.data.length > 0 &&
            props.data.map((row, index) => {
              return (
                <tr key={index}>
                  {props.header.map((header, index) => {
                    return <td key={index}>{row[header.key]}</td>;
                  })}
                  {/* body ends */}

                  {/* action starts */}
                  {props.actions && props.actions.length > 0 && (
                    <td>
                      {props.actions.map((action, index) => {
                        return (
                          <Link
                            to={`${action.link}/${row.id}`}
                            className={action.className}
                            key={index}
                          >
                            {action.name}
                          </Link>
                        );
                      })}
                    </td>
                  )}
                </tr>
              );
            })}
          {props.data.length === 0 && (
            <tr>
              <td colSpan={5}>No records</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViTable;
