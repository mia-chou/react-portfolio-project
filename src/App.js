import React from "react";
import "./App.css";
import "./Home.css";
import "./Projects.css";
import "./Nav.css";
import Footer from "./Footer";
import "bootstrap";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Nav";
export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}