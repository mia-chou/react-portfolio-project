import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="contact-head">Get in touch ✉️ </div>
      <h3>Available via Email and Linkedin. </h3>
      <ul>
        <li>
          Email <br />{" "}
          <a
            href="mailto:mia.fy.chou@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            mia.fy.chou@hotmail.com
          </a>
        </li>
        <li>
          Linkedin
          <br />
          <a
            href="https://www.linkedin.com/in/mia-chou/"
            target="_blank"
            rel="noreferrer"
          >
            @miafychou
          </a>
        </li>
      </ul>
    </div>
  );
}