import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import arrow from "../assets/svg/arrow-line-right.svg";
import "../assets/css/studentsignup.css";
import "../assets/css/signup.css";
import profile from "../assets/svg/student.svg";
import cam from "../assets/svg/profilecam.svg";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { authenticated } = useAuth();
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectDepartment, setSelectDepartment] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [availableCourses, setAvailableCourses] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectDepartment === "CITE") {
      setAvailableCourses(["BSIT"]);
    } else if (selectDepartment === "CEA") {
      setAvailableCourses(["BSCPE", "BSCE", "BSEE", "BSARC", "BSECE", "BSME"]);
    } else if (selectDepartment === "CAHS") {
      setAvailableCourses(["BSN", "PHARMA"]);
    } else if (selectDepartment === "CCJE") {
      setAvailableCourses(["BSCRIM"]);
    } else if (selectDepartment === "CMA") {
      setAvailableCourses(["BSA", "BSAIS", "BSMA","BSBA-MM", "BSBA-FM", "BSHM", "BTSM"]);
    } else if (selectDepartment === "CELA") {
      setAvailableCourses(["ABCOMM", "ABPOLSCI", "BEED","BSED-ENG", "BSED-MATH", "BSED-SCI", "BSED-SOC"]);
    } else {
      setAvailableCourses([]);
    }
  }, [selectDepartment]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      department: selectDepartment,
      course: selectCourse,
      password: password,
      gender: gender,
      profileImage: profileImage,
    };

    try {
      await axios.post("http://localhost:5000/api/users/register", userData);
      alert("You have created an account!");
      navigate("/stage/login");
    } catch (error) {
      alert("Registration error");
    }
  };
  return (
    <>
      {authenticated ? (
        <Navigate to="/user/home" />
      ) : (
        <div className="student flex">
          <div className="student_color"></div>
          <div className="student_intro flex">
            <h1>Student Account</h1>
            <h3>
              You can choose to keep your data a secret on the profile settings
            </h3>
            <img src={profile} alt="profile" />
          </div>
          <div className="student_container flex">
            <div className="student_form flex">
              <form className="student_form flex" onSubmit={handleSubmit}>
                <h2>SIGN UP</h2>
                <div className="inputfield flex">
                  <label>
                    <input
                      type="number"
                      name="id"
                      placeholder="Student Number"
                      required
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <select
                      name="gender"
                      required
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </label>
                  <label className="user">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <select
                      value={selectDepartment}
                      onChange={(e) => setSelectDepartment(e.target.value)}
                    >
                      <option value="">Filter by Department</option>
                      <option value="CITE">CITE</option>
                      <option value="CEA">CEA</option>
                      <option value="CAHS">CAHS</option>
                      <option value="CCJE">CCJE</option>
                      <option value="CMA">CMA</option>
                      <option value="CELA">CELA</option>
                    </select>
                  </label>
                  <label>
                    <select
                      value={selectCourse}
                      onChange={(e) => setSelectCourse(e.target.value)}
                    >
                      <option value="">Filter by Course</option>
                      {availableCourses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="pass">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$"
                      title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@, #, $, %, ^, &, *, or !)"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </label>
                  <label className="confirm pass">
                    <input
                      id="confirmpassword"
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </label>
                  <p className="signup__terms">
                    By signing you agree to our{" "}
                    <span>Terms and Conditions</span>
                  </p>
                  <button type="submit" className="signup-btn">Sign Up</button>
                  <div className="signup flex">
                    <h5>Already a member?</h5>
                    <Link to="/stage/login" className="signup-txt">
                      <h5>Sign In</h5>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
