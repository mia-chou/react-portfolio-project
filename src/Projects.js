import React from "react";
import "./Projects.css";
import Weather from "./weather 2.png";
import Recipe from "./recipe 2.png";
import Dictionary from "./dict.png";
import ResponsiveLego from "./responsive.png";
export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h4>View my featured Work</h4>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Dictionary} alt="dictionary" />
            <div className="card-body">
              <h5 className="card-title">Dictionary React App</h5>
              <p className="card-text">
                A dictionary app made using React with an integrated Dictionary
                API and images API.
              </p>
              <a
                href="https://react-dictionary-app-proyecto.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={ResponsiveLego} alt="lego" />
            <div className="card-body">
              <h5 className="card-title">Responsive Website</h5>
              <p className="card-text">
                A responsive website built with javascript, utilising responsive
                design with media queries.
              </p>
              <a
                href="https://leeds-travel-project.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Weather} alt="weather" />
            <div className="card-body">
              <h5 className="card-title">React Weather App</h5>
              <p className="card-text">
                A weather app built using React with an integrated weather{" "}
                <br /> API.
              </p>
              <a
                href="https://react-weather-clima-app.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Recipe} alt="recipe" />
            <div className="card-body">
              <h5 className="card-title">Recipe Generator</h5>
              <p className="card-text">
                A Recipe generator built with javascript that uses an AI <br />{" "}
                API.
              </p>
              <a
                href="https://cocktail-generator-project.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="git ">
        <a href="https://github.com/mia-chou" target="_blank" rel="noreferrer">
          Take a look at my code on GitHub
        </a>
      </p>
    </section>
  );
}