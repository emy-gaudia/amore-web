import { Link } from "react-router-dom";
import React from "react";
import "../assets/css/interest.css";
import profile from "../assets/svg/setprofile.svg";
import arrow from "../assets/svg/arrow-line-right.svg";
import Pill from "../assets/component/Pill";
import { pillData } from "../layout/Data";

const Interest = () => {
  return (
    <div className="interest_main grid">
      <div className="container grid">
        <div className="color"></div>
        <div className="heading_interest flex">
          <div className="headtxt">
            <h1>Profile</h1>
            <h3>Set up your basic profile information</h3>
          </div>
          <img src={profile} alt="student" />
        </div>
        <form className="form_interest flex">
          <div className="interesttxt flex">
            <h2>Interest</h2>
          </div>

          <div className="inputs flex">
            {pillData.map(({ txt, def, hover }) => {
              return <Pill txt={txt} def={def} hover={hover} />;
            })}
          </div>
          <div className="progress flex">
            <div className="progress-status flex">
              <div className="left"></div>
              <div className="right">
                <Link to="/stage/image">
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Interest;
