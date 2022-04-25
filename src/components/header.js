import React from "react";
import logo from "../img/logoRev1400Shadow.png";
import Navigation from "./navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="topHeaderContainer">
        <div className="contentContainer">
          <p>
            <a
              href="https://www.linkedin.com/in/kody-mcintosh-8a679386/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            |
            <a
              href="https://github.com/KodyMcIntosh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="headerContainer">
        <div className="contentContainer">
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="Kody McIntosh Logo" className="logo" />
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
