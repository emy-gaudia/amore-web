import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ path, svg, alt }) => {
  return (
    <li className="navitem">
      <NavLink className="navlink" to={path}>
        <img className="nav-icon" src={svg} alt={alt} />
      </NavLink>
    </li>
  );
};

export default NavItem;
