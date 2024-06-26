import React from "react";
import "./Projects.css";
import Weather from "./weather.png";
import Recipe from "./cocktail.png";
import ResponsiveTravel from "./responsive.png";
import Todolist from "./todo.png";
import Worldclock from "./Worldclock.png";
import MemoryGame from "./memory game.png";
import Dictionary from "./Dictionary.png";
import ModalProject from "./Modal.png";

export default function Projects() {
  return (
    <div>
      <section className="Projects" id="projects">
        <h4>View my featured Work</h4>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={Todolist} alt="Todo List" />
              <div className="card-body">
                <h5 className="card-title">Todo List</h5>
                <p className="card-text">
                  This to-do list app simplifies task management by utilising HTML, CSS, and JavaScript for easy addition, deletion, searching, and filtering of tasks.
                </p>
                <a
                  href="https://todo-list-lista-app.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={ResponsiveTravel} alt="Responsive Website" />
              <div className="card-body">
                <h5 className="card-title">Responsive Website</h5>
                <p className="card-text">
                  A responsive website adjusts layout and content for different screen sizes using HTML/CSS. Media queries ensure consistent appearance on desktops, tablets, and smartphones.
                </p>
                <a
                  href="https://leeds-travel-project.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={Recipe} alt="Cocktail Generator" />
              <div className="card-body">
                <h5 className="card-title">Cocktail Generator</h5>
                <p className="card-text">
                  A JavaScript-based Cocktail Generator utilises an AI API to suggest cocktail recipes. The AI API enhances the user experience by providing personalised recommendations for cocktails based on preferences.
                </p>
                <a
                  href="https://cocktail-generator-project.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={Worldclock} alt="World Clock" />
              <div className="card-body">
                <h5 className="card-title">World Clock App</h5>
                <p className="card-text">
                  This application displays the local time alongside selected cities worldwide. Users can view time for London, Taipei, and Dominica via a dropdown menu. The project was developed using HTML, CSS, and JavaScript.
                </p>
                <a
                  href="https://reloj-mundial.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Projects" id="react-projects">
        <h4>My React Projects</h4>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={MemoryGame} alt="Memory Game" />
              <div className="card-body">
                <h5 className="card-title">Memory Game</h5>
                <p className="card-text">
                  Built with React.js, this memory game challenges players to match pairs of cards, testing memory skills.
                </p>
                <a
                  href="https://react-magic-match-memory-game.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={Weather} alt="Weather App" />
              <div className="card-body">
                <h5 className="card-title">React Weather App</h5>
                <p className="card-text">
                  A weather app built using React with an integrated weather API.
                </p>
                <a
                  href="https://react-weather-clima-app.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={Dictionary} alt="Dictionary App" />
              <div className="card-body">
                <h5 className="card-title">React Dictionary App</h5>
                <p className="card-text">
                  A React-based dictionary app that allows users to search for words and get detailed definitions, synonyms, and audio pronunciations.
                </p>
                <a
                  href="https://react-audio-dictionary-app.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={ModalProject} alt="Modal Project" />
              <div className="card-body">
                <h5 className="card-title">React Modal Project</h5>
                <p className="card-text">
                This project showcases the use of various customisable modals in React.
                </p>
                <a
                  href="https://modal-popup-in-react.netlify.app/"
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#F9CAD2", color: "white" }}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="git" style={{ marginTop: "20px" }}>
        <a href="https://github.com/mia-chou" target="_blank" rel="noreferrer">
          Take a look at my code on GitHub
        </a>
      </p>
    </div>
  );
}