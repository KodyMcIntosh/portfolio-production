import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import contactImage from "../img/contact.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkyrgjz");
  if (state.succeeded) {
    return <p>Thanks for your message. I will be in touch with you soon.</p>;
  }
  return (
    <div className="contactForm">
      <div className="blockLeft">
        <h1>Contact Me</h1>

        <h3>
          Phone: <a href="tel:0274054979">027 405 4979</a>
        </h3>
        <p>You can also email me using the form below. </p>

        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name *"
            required
          />

          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone Number"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="How can I help you? *"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <p className="disclaimer">
            By submitting this form, you agree to our{" "}
            <a href="/privacy">privacy policy.</a>
          </p>

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="blockRight">
        <img src={contactImage} alt="contact page illustration" />
      </div>
    </div>
  );
};

export default Contact;
