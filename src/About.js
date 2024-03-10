import React from "react";
import Portrait from "./image of me.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function About() {
  return (
    <div className="About text-center" id="about">
      <h2 className="introduction">Hi, I'm Mia Chou</h2>
      <h4>📍Based in Leeds</h4>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-6">
          <p className="about-me">
            I'm a freelance frontend developer based in West Yorkshire, Leeds,
            holding a Masters degree in Communication and Media. About a year
            ago, I started learning to code because I wanted to understand how
            my web app projects worked behind the scenes. While I was good at
            designing websites and media using design software, I wanted to dive
            into coding to build and improve my projects. I bring a strong skill
            set in web development, including HTML, CSS, JavaScript, and
            responsive design. I love learning new things, especially about new
            software and automation technology, and I thrive in collaborative
            environments and welcome fresh and innovative challenges to create a
            positive influence in the digital world.
            <br />
            <br />
            How did I get here? I began experimenting with basic HTML and CSS
            during my time at university; however, I knew that I wanted to take
            my passion further, and that's when I started a coding course called
            SheCodes.
          </p>
        </div>
        <div className="col-sm-6">
          <img src={Portrait} className="img-fluid" alt="Mia" />
        </div>
      </div>
    </div>
  );
}
