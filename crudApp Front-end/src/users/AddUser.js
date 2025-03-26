import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Navigate, useNavigate } from "react-router-dom";

const AddUser = () => {
  var navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const { username, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center">
          <h2>Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User name"
                name="username"
                required
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                required
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit{" "}
            </button>
            <Link to="/" type="delete" className="btn btn-outline-danger mx-2">
              Cancel{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
