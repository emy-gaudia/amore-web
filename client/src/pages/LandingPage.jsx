import { Link, Navigate } from "react-router-dom";
import React from "react";
import "../assets/css/landingpage.css";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/line.svg";
import bg from "../assets/svg/bg.svg";
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const { authenticated } = useAuth();
  return (
    <>
      {authenticated ?
      <Navigate to="/user/home"/> :
      <div className="landing">
        <img src={bg} alt="bg" className="landing_bg" />
        <div className="header flex">
          <div className="logo grid">
            <img src={logo} alt="logo" />
            <div className="txt">
              <h5>Amore</h5>
              <img src={line} alt="line" />
            </div>
          </div>
        </div>
        <div>
          <div className="container grid">
            <div className="center flex">
              <h1>Amore</h1>
              <h2>PHINMA UPang Love Finder</h2>
              <div className="btns flex">
                <Link to="/stage/login">
                  <button>Sign In</button>
                </Link>
                <Link to="/stage/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default LandingPage;
