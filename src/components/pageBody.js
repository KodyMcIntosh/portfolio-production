import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio";
import Contact from "./contact";
import About from "./about";
import HomePage from "./home";
import PortfolioIndex from "./portfolioindex";
import PortfolioItem from "./portfolioItem";
import Privacy from "./privacy";

const PageBody = () => {
  return (
    <div className="pageBody">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio" element={<Portfolio />}>
          <Route path="/portfolio/" element={<PortfolioIndex />} />
          <Route path=":slug" element={<PortfolioItem />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
};

export default PageBody;
