import React from "react";

import profileAbout from "../img/profileAboutNew.png";

const About = () => {
  return (
    <div className="about">
      <div className="blockLeft">
        <h1>About Me</h1>
        <p>
        As a highly experienced professional with over a decade of specialized expertise in brand and web development, I have recently retrained in full-stack development with a focus on Javascript-based work. This has allowed me to expand my technical knowledge and take on new challenges in the field.
        </p>
        <p>
        Due to the pandemic's impact on the creative industry, I had to make some difficult choices about my career path. Drawing on my interest and experience in front-end development, I made the decision to delve further into this area and pursue full-stack training at Developers Institute.
        </p>
        <p>
        As an aspiring developer, I am committed to not only producing exceptional work but also empowering junior developers to do the same. Whether it entails preparing them for the realities of working environments, supporting and encouraging them through existing projects, or directly aiding their professional development, I firmly believe in the importance of paying it forward. My extensive experience in the creative industry has enabled me to mentor juniors within clients' businesses and teach at the tertiary level.
        </p>
        <p>
        Over the years, I have worked across a variety of industries, including film promotion, marketing for manufacturers, brand development and strategy for technology companies, social media for beauty companies, and more. This has been both from an external perspective and as an internal contractor, as needed.
        </p>
        <p>As a developer with a strong passion for creating exceptional work and fostering the professional growth of others, I am excited about the opportunity to bring my expertise and experience to a new role.</p>
        <p>
          My commercial skills and experience include but are not limited to:
          <ul>
            <li>Full Stack Web Development</li>
            <li>Graphic Design</li>
            <li>UI / UX</li>
            <li>Website Design</li>
            <li>Branding and Strategy</li>
            <li>Management</li>
            <li>Project Management</li>
            <li>Agile Methodologies</li>
          </ul>
        </p>
        <p>
          Outside of work I am also a musician, performer, and my dog's biggest
          fan. I'm a pragmatic go-getter, and I apply this to all areas of my
          life.
        </p>

        <p>
          If you would like to know more about my work history, please feel free
          to check out my{" "}
          <a
            href="https://www.linkedin.com/in/kody-mcintosh-8a679386/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile.
          </a>
        </p>
      </div>
      <div className="blockRight">
        <p>
          <img src={profileAbout} alt="Kody McIntosh" />
        </p>
      </div>
    </div>
  );
};

export default About;
