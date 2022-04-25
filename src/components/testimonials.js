import React, { useState } from "react";
import { css, cx } from "@emotion/css";

console.log(cx);

const testimonialData = {
  0: {
    content:
      "My experience in working with Kody has been nothing short of outstanding. Kody has worked on branding, advertisements, promotions and various marketing collateral. Kody has not only been a source of design, but has been able to provide creative direction with a strategic marketing focus. She has been able to turn around projects in a quick and thorough manner, going above and beyond to make recommendations and suggest innovative concepts. Kody is professional in her communication, standard of work and creativity. I would highly recommend her services to you.",
    author: "Larissa - Darche, Australia",
  },
  1: {
    content:
      "Kody's work with Line 7 is greatly appreciated. She is thorough and efficient, always meeting the task given to her. When we were challenged on a project she would contribute suggestions that were always creative and successful.",
    author: "Danielle - Line7, NZ",
  },
  2: {
    content:
      "Kody has been a great asset to our business. She has helped us with graphic design, online marketing and project management, consistently delivering a high standard of work. She has a positive attitude with a proactive and well-thought out approach to projects. We look forward to working with her in the future.",
    author: "Lou - Charles Parsons Fashion, NZ and Australia",
  },
  3: {
    content:
      "Kody was my point of contact for marketing design for the Interiors Division of Charles Parsons Interiors. During the time I worked with Kody she consistently performed to a high standard and delivered exactly what the brief required. All her work was completed within the requested time frame and I never had to follow up on outstanding items. This is extremely important in our industry as we have to work to timelines which if delayed can put significant pressure on our business. Signal Boost's design work is outstanding and not only that, extreme thought was put into each project and adjustments were made to benefit the final outcome. If there was something that didn't look, or sit right in the brief that was provided, they would put thought into a better alternative. I would have no hesitation in recommending Signal Boost for any prospective design or marketing work and hope to work with them again in the future.",
    author: "Kylie - Charles Parsons Interiors, NZ and Australia",
  },
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(
    testimonialData[0]
  );

  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    setCurrentTestimonial(
      testimonialData[event.target.getAttribute("data-quote")]
    );
    setActive(event.target.getAttribute("data-quote"));
  };

  return (
    <div className="testimonials">
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <p>{currentTestimonial.content}</p>
        <p>{currentTestimonial.author}</p>
        <div className="testimonialDots">
          <div
            className={css`
              span[data-quote="${active}"]::before {
                background-color: #8c0303;
              }
            `}
          >
            {Object.keys(testimonialData).map((index) => (
              <span
                onClick={(event) => handleSetClick(event)}
                data-quote={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
