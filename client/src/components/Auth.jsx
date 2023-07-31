import Cookies from "universal-cookie";
import { useState } from "react";
import axios from "axios";
import SignIn from "../assets/signup.jpg";

const cookies = new Cookies() ;

const initialState = {
    FullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarUrl: '',
}

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);

  const OnSubmit = async (event) => {
    event.preventDefault();
    const { fullName, username, phoneNumber, password, avatarUrl } = form;
    const URL = "http://localhost:5000/auth";
    const {data:{token, userId, securedPassword}} = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      fullName,
      username,
      phoneNumber,
      password,
      avatarUrl
    });

    cookies.set('token', token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup){
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarUrl", avatarUrl);
      cookies.set("securedPassword", securedPassword);

    }
    window.location.reload()
  };



  const handleChange = (event) => {
    setForm({...form,
        [event.target.name]: event.target.value
    })
  };
  const SwitchMode = ()=>{
    setIsSignup((previousState)=> !previousState)
  }
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
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="confirmPassword">Password</label>
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                //   value={fullName}
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  placeholder="confirm"
                  name="password"
                  //   value={fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "SignUp" : "SignIn"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account" : "Don't have an account?"}
            </p>
            <span onClick={SwitchMode}>{isSignup ? "SignIn" : "SignUp"}</span>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={SignIn} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
