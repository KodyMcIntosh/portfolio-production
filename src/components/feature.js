import React from "react";
import featureImage from "../img/metalmagiclogo.png"

const Feature = () => {
  return (
    <>
    <div className="feature">
        <div className="featuredProjectLeft">
            <h2>Featured Project - Metal Magic Piercings</h2>
            <h3>Website Design and Build</h3>
            <p>This project involved building a website from scratch using React with a limited palette of black and gold as the primary colours. The development process included creating a visually stunning and user-friendly website that reflected the brand's personality and aesthetic.</p>

            <p>In addition to design and development, the project also involved deployment, use of security certificates, custom domain redirection, and integration of external systems.</p>

            <p>Overall, this project required technical expertise in web development, as well as experience in deploying and integrating external systems, to create a successful website that accurately reflected the brand's values and achieved its goals.</p>
            <a href="https://metalmagicpiercings.com/" target="_blank" rel="noreferrer"><p className="button">View Live Site</p></a>
        </div>
        <div className="featuredProjectRight">
            <p><img src={featureImage} alt="Metal Magic Logo"/></p>
        </div>
    </div>
    </>
  );
};

export default Feature;
