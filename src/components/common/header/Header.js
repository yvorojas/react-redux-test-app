import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <nav>
    <NavLink to="/" activeClassName="active" exact>
      Home
    </NavLink>
    {" | "}
    <NavLink to="/courses" activeClassName="active">
      Courses
    </NavLink>
    {" | "}
    <NavLink to="/about" activeClassName="active">
      About
    </NavLink>
  </nav>
);

export default Header;
