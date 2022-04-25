import React from "react";
import portfolioData from "./portfolioData";
import { useParams } from "react-router-dom";

const parse = require("html-react-parser");

const PortfolioItem = () => {
  const { slug } = useParams();
  const portfolioContent = portfolioData[slug];

  if (!portfolioContent) {
    return <h2>Not Found</h2>;
  }

  const {
    name,
    subtitle,
    projectBrief,
    description,
    technicalSpec,
    imageGallery,
  } = portfolioContent;

  let content = imageGallery.map((image) => {
    let src = image.imageSrc;
    let alt = image.imageAlt;

    return <img src={src} alt={alt} className="portfolioImage" />;
  });

  return (
    <div className="portfolioItems">
      <div className="gallery">{content}</div>
      <div className="itemInfo">
        <h2>
          {name} - {subtitle}
        </h2>
        <h3>Project Brief: {projectBrief}</h3>
        <p>{parse(description)}</p>
        <h3>Technical Details</h3>
        <p className="technicalSpec">{parse(technicalSpec)}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
