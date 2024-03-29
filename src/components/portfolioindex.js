import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "./portfolioData";
import Feature from "./feature";

const PortfolioIndex = () => {
  return (
    <>
    <Feature />
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
