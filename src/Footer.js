import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          {" "}
          <a href="#home">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#projects">Projects</a>{" "}
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>
    </div>
  );
}