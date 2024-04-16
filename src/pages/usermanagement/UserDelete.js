import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showDangerMessage } from "../../utils/notification";
import { deleteUser } from "../../service/user-management.service";

const UserDelete = () => {
  const navigate = useNavigate();
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

  // const notify = () => toast("Wow so easy!");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("API server error");
        console.log(err);
      });
  });

  // useEffect(() => {
  //   const newUser = data.find((obj) => obj.id.toString() === id.toString());
  //   if (newUser) {
  //     setUser(newUser);
  //   }
  // }, []);

  const handleDeleteUser = () => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      deleteUser(userId)
        .then(() => {
          showDangerMessage("Delete user success");
          // axios
          //   .delete(`http://localhost:4000/users/${userId}`)
          //   .then((res) => {
          //     toast.error("Deleted", {
          //       position: "top-right",
          //       autoClose: 5000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       progress: undefined,
          //       theme: "colored",

          //     });
          // notify();
          navigate("/user-management");
          console.log("Delete user success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="delete-com">
        <h2>Are you really sure that you want to delete this huh???</h2>
        <div className="delete-detail">
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <div>Age: {user.age}</div>
          <div>City: {user.city}</div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-danger"
        // onClick={() => {
        //   navigate("/user-management");
        // }}
        onClick={handleDeleteUser}
      >
        Yes
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          navigate("/user-management");
        }}
      >
        No
      </button>
    </div>
  );
};

export default UserDelete;
