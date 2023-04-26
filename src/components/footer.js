import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <p>
          <span className="footerText">
            &copy; 2023 Kody McIntosh - All Rights Reserved
          </span>{" "}
          |{" "}
          <Link to="/privacy" style={{ textDecoration: "none" }}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
