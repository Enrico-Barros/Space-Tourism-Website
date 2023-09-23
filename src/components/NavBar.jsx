import { NavLink } from "react-router-dom";

import { ReactComponent as ReactLogo } from "../assets/shared/logo.svg";

import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="bar">
        <div className="logo">
          <ReactLogo />
        </div>
        <div className="line"></div>
        <nav>
          <NavLink className="links" to="/Space-Tourism-Website" end>
            <b>00</b> &nbsp; Home
          </NavLink>
          <NavLink className="links" to="/Space-Tourism-Website/Destination">
            <b>01</b> &nbsp; Destination
          </NavLink>
          <NavLink className="links" to="/Space-Tourism-Website/Crew">
            <b>02</b> &nbsp; Crew
          </NavLink>
          <NavLink className="links" to="/Space-Tourism-Website/Technology">
            <b>03</b> &nbsp; Technology
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
