import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home" id="home">
      <header>
        <h1> Beth Williamson </h1>
        <h3>Front-End Developer</h3>
        <a href="#about">Get to Know me</a>
        <h3>
          <ul>
            <li>Html & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>BootStrap</li>
            <li>Web Hosting</li>
          </ul>
        </h3>
      </header>
    </div>
  );
}