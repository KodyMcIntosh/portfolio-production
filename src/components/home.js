import React from "react";
import PortfolioIndex from "./portfolioindex";
import Testimonials from "./testimonials";

//images
import kodyProfile from "../img/profile4.png";
import computerDev from "../img/computer-dev.png";
import phoneCreative from "../img/phone-creative.png";
import managementIcon from "../img/management.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homeIntro">
        <div className="homeBlurb">
          <h1>Hi, I'm Kody.</h1>
          <p>
            <strong>I'm a graphic designer turned web developer.</strong>
          </p>
          <p>
            I have spent over ten years working in the creative sector, with
            specialisation in both brand and web. For many of these years I
            focussed on WordPress based builds, however I have now moved into
            full-stack development more thoroughly.
          </p>
          <p>
            As a result I am currently studying at The Developers' Institute,
            doing diplomas in web development and design, as well as software
            development. This full-stack training is conducted remotely, and
            taught by active industry professionals. It is geared toward
            learning how to work in an agile environment, learning what is
            practical, useful within industry, and what it takes to be
            successful.
          </p>
          <p>
            I am currently seeking freelance and casual contracts while I am
            completing my studies. If you are interested in working with me,
            please get in touch.
          </p>
          {/* <p className="button">
            <a href="cv.pdf">CV Download</a>
          </p> */}
        </div>
        <div className="homePhoto">
          <img src={kodyProfile} alt="Kody McIntosh" />
        </div>
      </div>

      <div className="creativeBlock">
        <div className="blockLeft">
          <p>
            <img
              src={phoneCreative}
              alt="phone with creative design elements"
            />
          </p>
        </div>
        <div className="blockRight">
          <h2 className="blockHeading">Creative</h2>
          <p>
            <strong>
              Good design is much more than a pretty picture, it's about
              creating something that actually works.
            </strong>
          </p>
          <p>
            I'm a trained graphic designer who specialises in branding and
            websites. Both of these areas have a strong 'why' focus, and require
            thinking about the bigger picture. Whether that's designing with
            technical functionality in mind, or ensuring that a message will
            reach a specific audience, I love bringing ideas to life visually.
          </p>
          <p>
            My creative experience includes:
            <ul>
              <li>Adobe Xd, Ps, Ai, Id, Pr, Ae, Au, Acrobat Pro</li>
              <li>Branding and Strategy</li>
              <li>Web Design</li>
              <li>UI / UX</li>
              <li>Print Design</li>
              <li>App Design</li>
              <li>EDM Design and Build</li>
              <li>Copywriting</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="technicalBlock">
        <div className="blockLeft">
          <h2 className="blockHeading">Development</h2>
          <p>
            <strong>
              While I have done basic web development throughout my career, in
              light of covid and its effect on the creative sector, I decided to
              prioritise development moving forward.
            </strong>
          </p>
          <p>
            Since early 2021 I have been studying toward diplomas in web
            development and software development at The Developers' Institute.
            This has been a deep dive into everything full-stack, and creating
            innovative technical solutions.
          </p>
          <p>
            My development experience includes:
            <ul>
              <li>HTML and CSS</li>
              <li>Javascript including React</li>
              <li>Node.JS</li>
              <li>Jest</li>
              <li>Docker</li>
              <li>REST API</li>
              <li>Express</li>
              <li>Auth0</li>
              <li>PostgreSQL</li>
              <li>WordPress</li>
              <li>AWS Pipeline Deployment</li>
              <li>CI / CD</li>
              <li>GitHub</li>
            </ul>
          </p>
        </div>
        <div className="blockRight">
          <p>
            <img src={computerDev} alt="computer with web dev elements" />
          </p>
        </div>
      </div>

      <div className="managementBlock">
        <div className="blockLeft">
          <p>
            <img src={managementIcon} alt="people at desks in illustration" />
          </p>
        </div>
        <div className="blockRight">
          <h2 className="blockHeading">Project Management</h2>
          <p>
            <strong>
              My work experience has included using a number of tools and
              systems for project management.
            </strong>
          </p>
          <p>
            This includes:
            <ul>
              <li>Agile</li>
              <li>Jira</li>
              <li>Asana</li>
              <li>Workflow Max</li>
              <li>NetSuite</li>
              <li>Miro</li>
              <li>Microsoft Office</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="featuredProject">
        <h2>Portfolio</h2>
        <PortfolioIndex />
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
