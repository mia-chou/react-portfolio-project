import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about">
      <h2 className="introduction">
        Hi, I'm Fang-Yi Chou, but people usually call me Mia
      </h2>

      <div className="row">
        <div className="col-sm-6">
          <p className="about-me">
          As a freelance Front-End developer with a Master's degree in Communication and Media from the University of Leeds, I began my coding journey about a year ago. Driven by a curiosity to understand the inner workings of web apps, I have since developed skills in HTML, CSS, JavaScript, TypeScript, React.js, Python, and responsive design. I enjoy exploring new software and automation technologies, and I thrive in collaborative environments. I'm always eager to embrace creative challenges that make a positive impact in the online world.


          </p>
        </div>
        <div className="col-sm-6">
          {/* Add content here if needed */}
        </div>
      </div>
    </div>
  );
}
