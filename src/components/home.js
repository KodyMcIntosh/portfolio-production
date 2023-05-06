import React from "react";
import PortfolioIndex from "./portfolioindex";
import Testimonials from "./testimonials";
import { Link } from "react-router-dom";

//images
import kodyProfile from "../img/profileNew.png";
import computerDev from "../img/computerDevNew.png";
import phoneCreative from "../img/phoneCreativeNew.png";
import managementIcon from "../img/managementNew.png";
import divider1 from "../img/divider2.png";
import divider2 from "../img/divider3.png";
import divider3 from "../img/divider4.png";

const HomePage = () => {
  return (
    <>
   <div className="homePage">
      <div className="homeIntro">
        <div className="homeBlurb">
          <h1>Hi, I'm Kody.</h1>
          <p>
            <strong>I'm a graphic designer turned web developer.</strong>
          </p>
          <p>
          With over ten years of experience in the creative sector, I have specialised in brand and web development. Recently I have retrained in full-stack development with a focus on Javascript based work, taking on new challenges and expanding my technical expertise.
          </p>
          <p>
          In my role as the Learner Success Team Lead at Developers Institute, my focus is on ensuring that our learners have everything they need to get the most out of their learning experience, and that my team is fully equipped to enable this success. This includes providing technical leadership and support, as well as creating an environment that fosters collaboration and innovation. I am constantly seeking out new ways to improve our support for our learners, as well as further my own professional growth.
          </p>
          <p>
          I am open to freelance work in both design and development, and I am eager to take on new challenges that will further expand my technical capabilities. If you're interested in collaborating with me, please get in touch.
          </p>

          <Link to="/contact"><p className="button">Contact Me</p></Link>
        </div>
        <div className="homePhoto">
          <img src={kodyProfile} alt="Kody McIntosh" />
        </div>
      </div>

      <h2>Portfolio</h2>
      <div className="featuredProject">
        
        <PortfolioIndex />
      </div>

      <div className="divider">
        <img src={divider1} alt="neon divider" />
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

      <div className="divider">
        <img src={divider2} alt="neon divider" />
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

      <div className="divider">
        <img src={divider3} alt="neon divider" />
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

      <div className="testimonials">
        <h2>Testimonials</h2>
        <Testimonials />
      </div>
    </div>
    </>
  );
};

export default HomePage;
