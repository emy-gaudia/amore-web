import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../assets/css/profileimage.css";
import arrow from "../assets/svg/arrow-line-right.svg";
import defaultboy from "../assets/svg/avatar/avatar-default-boy.svg";
import cam from "../assets/svg/profilecam.svg";
import { avatarData } from "../layout/Data";
import Avatar from "../assets/component/Avatar";

const ProfileImage = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ image: "" });
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    console.log("Name: ", e.target.name);
    console.log("File Name: ", e.target.files[0].name);

    setImage(URL.createObjectURL(e.target.files[0]));

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files[0].name,
    }));
  };

  const home = (e) => {
    e.preventDefault();
    navigate("/user/home");
  };
  return (
    <div className="image_main grid">
      <div className="container grid">
        <div className="color"></div>
        <div className="heading_image flex">
          <div className="headtxt">
            <h1>Profile Image</h1>
            <h3>Upload an image or pick an avatar</h3>
          </div>
          <div className="image-holder">
            <img src={defaultboy} alt="default" className="uploadimg" />

            <label className="float" htmlFor="image">
              <img src={cam} alt="cam" />
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <form className="form_image flex">
          <h2>Avatar</h2>
          <div className="inputs grid">
            {avatarData.map(({ src, alt }) => {
              return <Avatar src={src} alt={alt} />;
            })}
          </div>
          <div className="progress flex">
            <div className="progress-status flex">
              <div className="left"></div>
              <div className="right">
                <Link to="home" onClick={home}>
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

export default ProfileImage;
