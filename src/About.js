import React from "react";
import Portrait from "./image of me.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about">
      <h2 className="introduction">Hi, I'm Fang-Yi Chou, but people usually call me Mia</h2>
      <h4>📍Based in Leeds</h4>
      <div className="row">
        <div className="col-sm-6">
          <p className="about-me">
          As a freelance Front-End developer based in West Yorkshire, Leeds, I hold a Masters degree in Communication and Media. Approximately a year ago, I began learning to code, motivated by a curiosity to understand the details of my web app projects. Proficient in HTML, CSS, JavaScript, TypeScript, React.js, Python, and responsive design, I have a strong skill set in web development. Eager to explore new software and automation technology, I excel in teamwork and welcome new and creative challenges to make a positive difference in the online world.
          </p>
          <p className="CV">
            <a href="
https://s3.amazonaws.com/shecodesio-production/uploads/files/000/120/649/original/Mia_Chou_CV.jpg?1711381405" target="_blank" rel="noreferrer" style={{ fontSize: "22px" }}>
              Download my CV here
            </a>
          </p>
        </div>
        <div className="col-sm-6">
          <img src={Portrait} className="img-fluid" alt="me" />
        </div>
      </div>
    </div>
  );
}
