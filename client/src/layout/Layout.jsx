import { Outlet } from "react-router-dom";
import "../assets/css/layout.css";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/line.svg";

const Layout = () => {
  return (
    <>
      <div className="front">
        <div className="header">
          <div className="logo grid">
            <img src={logo} alt="logo" />
            <div className="txt">
              <h5>Amore</h5>
              <img src={line} alt="line" />
            </div>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Layout;
