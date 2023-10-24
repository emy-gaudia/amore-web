import React from "react";
import { navData } from "../../layout/Data";
import { useNavigate, NavLink } from "react-router-dom";
import NavItem from "../component/NavItem";
import logouticon from "../svg/logout.svg";
import { useAuth } from "../../context/AuthContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="sidebar_container">
      <ul>
        {navData.map(({ svg, alt, path }) => {
          return <NavItem svg={svg} alt={alt} path={path} />;
        })}
        <li className="navitem">
          <NavLink className="navlink" onClick={handleLogout}>
            <img className="nav-icon" src={logouticon} alt="logout" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
