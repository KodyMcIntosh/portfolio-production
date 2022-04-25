import React from "react";
import Hamburger from "./hamburger";
import MainMenu from "./MainMenu";
import { useState } from "react";

const MobileNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <nav className="mobileNavigation">
        <MainMenu />

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>

      <style jsx="true">{`
        .mobileNavigation {
          width: 4.5rem;
          height: 4.5rem;
          background-color: rgba(255, 0, 0, 0.8);
        }

        .mobileNavigation ul {
          display: ${hamburgerOpen ? "inline" : "none"};
          background-color: rgba(255, 0, 0, 0.95);
          min-width: 7rem;
          margin-top: 4.5rem;
          margin-left: -6.75rem;
          position: absolute;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .mobileNavigation ul li,
        .mobileNavigation ul a:visited {
          list-style-type: none;
          padding: 1rem;
          color: #fff;
          font-weight: bold;
          position: relative;
          text-align: right;
          border-bottom: 1px solid #fff;
        }
      `}</style>
    </>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className="desktopNav">
      <MainMenu />
    </nav>
  );
};

const Navigation = () => {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
};

export default Navigation;
