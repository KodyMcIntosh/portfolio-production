import React from "react";

import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="portfolio" style={{ textDecoration: "none" }}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
