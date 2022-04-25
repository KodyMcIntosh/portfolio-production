import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "./portfolioData";

const PortfolioIndex = () => {
  return (
    <>
      <h1 className="portfolioTitle">Portfolio</h1>
      <p className="portfolioIntro">
        <strong>These are just some of my favourite portfolio works.</strong>
      </p>
      <p className="portfolioIntro">
        For a full portfolio, or to ask about specific kinds of work I have
        completed, please <a href="/contact/">contact me.</a>
      </p>
      <div className="portfolioGrid">
        <ul>
          {Object.entries(portfolioData).map(
            ([slug, { name, subtitle, featureImage, tags }]) => (
              <li
                key={slug}
                className="gridBackImage"
                style={{
                  backgroundImage: `url(${featureImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Link to={`/portfolio/${slug}`}>
                  <div className="portfolioIndexTitle">
                    <h3>{name}</h3>
                    <h4>{subtitle}</h4>
                    <p>{tags}</p>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default PortfolioIndex;
