import React from "react";
import Portrait from "./image of me.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about">
      <h2 className="introduction">Hi, I'm Mia Chou</h2>
      <h4>📍Based in Leeds</h4>
      <div className="row">
        <div className="col-sm-6">
          <p className="about-me">
            I'm a freelance frontend developer based in West Yorkshire, Leeds, holding a Masters degree in Communication and Media. About a year ago, I started learning to code because I wanted to understand how my web app projects worked behind the scenes. While I was good at designing websites and media using design software, I wanted to dive into coding to build and improve my projects. I bring a strong skill set in web development, including HTML, CSS, JavaScript, and responsive design. I love learning new things, especially about new software and automation technology, and I thrive in collaborative environments and welcome fresh and innovative challenges to create a positive influence in the digital world.
            <br />
            How did I reach this stage? I started playing around with basic HTML, CSS, and JavaScript while working. But I wanted to explore my interest more, so I joined a coding course called SheCodes.
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
