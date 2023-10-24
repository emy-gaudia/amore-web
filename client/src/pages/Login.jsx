import "../assets/css/login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import React from "react";
import bg from "../assets/svg/bg.svg";
import axios from "axios"; 

const Login = () => {
  const { authenticated, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      const { userId } = response.data;
      login(userId);
      alert("You hav successfully logged in!")
      navigate("/user/home");
    } catch (error) {
      alert("There's a problem in login");
    }
  };

  return (
    <>{
      authenticated ? 
      <Navigate to="/user/home"/> :
      <div className="login grid">
      <img src={bg} alt="bg" className="login_bg" />
      <div className="container grid">
        <div className="login_color"></div>
        <div className="heading_login flex">
          <h1>Welcome Back!</h1>
          <h3>PHINMA UPang Student</h3>
        </div>
        <form className="form_login flex" onSubmit={handleSubmit}>
          <h2>SIGN IN</h2>
          <div className="inputs flex">
            <label className="user--login">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="true"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </label>
            <label className="pass">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </label>
            <button type="submit" value="Sign In">
              Sign In
            </button>
            <div className="signup--login flex">
              <h5>Not a member?</h5>
              <Link to="/stage/signup" className="signup-txt">
                <h5>Signup</h5>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    }</>
  );
};

export default Login;
