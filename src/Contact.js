import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="contact-head">Get in touch ✉️ </div>
      <h3>Available via email, linkedin and Mobile </h3>
      <ul>
        <li>
          Email <br />{" "}
          <a
            href="mailto:bethanyjw@live.co.uk"
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
            href=""
            target="_blank"
            rel="noreferrer"
          >
            @bethjwilliamson
          </a>
        </li>
      </ul>
    </div>
  );
}