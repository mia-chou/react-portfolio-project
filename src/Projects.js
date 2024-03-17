import React from "react";
import "./Projects.css";
import Weather from "./weather.png";
import Recipe from "./cocktail.png";
import QRcode from "./QRcode.png";
import ResponsiveTravel from "./responsive.png";
import Todolist from "./todo.png";
import Worldclock from"./Worldclock.png";
import MemoryGame from"./memory game.png";
import Tip from"./tip.png";



export default function Projects() {
  return (
    <div>
      <section className="Projects" id="projects">
        <h4>View my featured Work</h4>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={Todolist} alt="dictionary" />
              <div className="card-body">
                <h5 className="card-title">Todo List</h5>
                <p className="card-text">
                  A todo list app made using HTML, CSS and JavaScript.
                </p>
                <a
                  href="https://to-do-list-lista.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: " #F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={ResponsiveTravel} alt="travel" />
            <div className="card-body">
              <h5 className="card-title">Responsive Website</h5>
              <p className="card-text">
              A JavaScript-based responsive website employing responsive design techniques through media queries.
              </p>
              <a
                href="https://leeds-travel-project.netlify.app/"
                className="btn btn-outline-success"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #F9CAD2", color: "white" }}
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
              <h5 className="card-title">Cocktail Generator</h5>
              <p className="card-text">
                A responsive website built with javascript, utilising responsive
                design with media queries.
              </p>
              <a
                href="https://cocktail-generator-project.netlify.app/"
                className="btn btn-outline-success"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #F9CAD2", color: "white" }}
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>


        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Worldclock} alt="clock" />
            <div className="card-body">
              <h5 className="card-title">World Clock App</h5>
              <p className="card-text">
                A responsive website built with javascript, utilising responsive
                design with media queries.
              </p>
              <a
                href="https://reloj-mundial.netlify.app/"
                className="btn btn-outline-success"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #F9CAD2", color: "white" }}
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>

        </div>
      </section>

      <section className="Projects" id="projects">
        <h4>My React Projects </h4>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={QRcode} alt="code" />
              <div className="card-body">
                <h5 className="card-title">QR Code Generator</h5>
                <p className="card-text">
                  A dictionary app made using React with an integrated Dictionary
                  API and images API.
                </p>
                <a
                  href="https://qr-code-generator-react-project.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: " #F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={MemoryGame} alt="game" />
            <div className="card-body">
              <h5 className="card-title">Memory Game</h5>
              <p className="card-text">
                A responsive website built with javascript, utilising responsive
                design with media queries.
              </p>
              <a
                href="https://lego-bjw.netlify.app/"
                className="btn btn-outline-success"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #F9CAD2", color: "white" }}
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Tip} alt="tip" />
            <div className="card-body">
              <h5 className="card-title">Tip Calculator </h5>
              <p className="card-text">
                A responsive website built with javascript, utilising responsive
                design with media queries.
              </p>
              <a
                href="https://react-tip-calculator-app-project.netlify.app/"
                className="btn btn-outline-success"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #F9CAD2", color: "white" }}
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
                <br /> API
              </p>
              <a
                href="https://react-weather-clima-app.netlify.app/"
                className="btn btn-outline-success"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #F9CAD2", color: "white" }}
              >
                Launch App{" "}
              </a>
            </div>
          </div>
        </div>
        
        </div>
      </section>

      <p className="git"style={{ marginTop: "20px" }}>
        <a href="https://github.com/mia-chou" target="_blank" rel="noreferrer">
          Take a look at my code on GitHub
        </a>
      </p>
    </div>
  );
}
