import React from "react";

import profileAbout from "../img/profile-about.png";

const About = () => {
  return (
    <div className="about">
      <div className="blockLeft">
        <h1>About Me</h1>
        <h3>
          I've been actively working as a graphic designer for over ten years,
          and have done simple font-end development as part of that.
        </h3>
        <p>
          Like many people, my business was heavily affected by covid, and thus
          I had to make some difficult choices about my career, and what to do
          next. Given I had always done simple front-end development and enjoyed
          it, I decided to delve further into this area, hence studying
          full-stack at The Developers' Institute.
        </p>
        <p>
          I have a passion for not only creating great work myself, but also
          empowering juniors to do the same. Whether this means preparing them
          for the realities of working environments, supporting and encouraging
          them through existing projects, or aiding directly in their
          professional development, I'm a firm believer in paying it forward. My
          work within the creative industry has allowed me to do this, both in
          mentoring juniors within client's businesses, to providing teaching at
          a tertiary level.
        </p>
        <p>
          These years of running my own business have seen me work across lots
          of industries, including film promotion, marketing for manufacturers,
          brand development and strategy for technology companies, social media
          for beauty companies, and many more. This has been both from an
          external perspective and also as an internal contractor where
          required.
        </p>
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
            <li>Agile</li>
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
