import Cookie from "universal-cookie";
import { useState } from "react";
import axios from "axios";
import Signin from "../assets/signup.jpg";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({});

  const OnSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {};
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p> {isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={OnSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="fullName">Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                // value={fullName}
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  placeholder="phoneNumber"
                  name="phoneNumber"
                  //   value={fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarUrl">Avatar URL</label>
                <input
                  type="text"
                  placeholder="avatarUrl"
                  name="avatarUrl"
                  //   value={fullName}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                //   value={fullName}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
