import { Outlet } from "react-router-dom";
import "../assets/css/mainlayout.css";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/line.svg";
import headerprofile from "../assets/svg/user/header_profile.svg";
import headerfilter from "../assets/svg/user/header_filter.svg";
import headernotif from "../assets/svg/user/header_notif.svg";
import SideBar from "../assets/component/SideBar";

const MainLayout = () => {
  return (
    <>
      <div className="main_front">
        <div className="main_header flex">
          <div className="logo grid">
            <img src={logo} alt="logo" />
            <div className="txt">
              <h5>Amore</h5>
              <img src={line} alt="line" />
            </div>
          </div>
          <img src={headerprofile} alt="profile" className="header_profile" />
        </div>
        <main className="mainlayout">
        <SideBar />
        <Outlet />
        </main>
      </div>
    </>
  );
};
export default MainLayout;
