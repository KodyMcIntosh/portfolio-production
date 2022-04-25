import React from "react";
import { Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Outlet />
    </div>
  );
};

export default Portfolio;
