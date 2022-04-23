import React from "react";
import "./Skills.css";
import HTML5 from "../../components/assets/imagenes/HTML5.png";
import CSS3 from "../../components/assets/imagenes/CSS3.webp";
import JS from "../../components/assets/imagenes/JS.png";
import git from "../../components/assets/imagenes/git.png";
import react from "../../components/assets/imagenes/react.png";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const info = () => {
  return (
    <AnimatedPage>
      <div id="skills" className="container__skills">
        <h2 className="title__skills">Habilidades</h2>
        <p className="text-skills">
          -Bootstrap - Consumo de API Rest - Responsive Desing - Diseño
          creativo-
        </p>
        <div className="grid__skills">
          <div className="html">
            <img src={HTML5} alt="html5"></img>
          </div>
          <div className="css">
            <img src={CSS3} alt="css3"></img>
          </div>
          <div className="js">
            <img src={JS} alt="javascript"></img>
          </div>
          <div className="git">
            <img src={git} alt="git"></img>
          </div>
          <div className="react">
            <img src={react} alt="react"></img>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default info;
