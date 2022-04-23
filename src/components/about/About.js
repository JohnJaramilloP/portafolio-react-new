import React from "react";
import "./About.css";
import john from "../../components/assets/imagenes/john.jpg";
import AnimatedPage from '../AnimatedPage/AnimatedPage';

const About = () => {
  return (
    <AnimatedPage>
      <div id="about" className="about__container">
        <div className="background__about"></div>
        <div className="about__description">
          <h3 className="about-title">Acerca de mí</h3>
          <p className="about__text">
            Hola, soy John. Un placer conocerte. Desde que inicié mi viaje como
            diseñador, aunque ha sido corto, cada día me he enamorado más de
            esta profesión y sus posibilidades en cuanto a la creación y el
            arte, he trabajado en pequeños proyectos personales para pulir mis
            habilidades cada día y mi disposición siempre frente a los retos es
            de superarlos y estar siempre en constante aprendizaje.
          </p>
          <p className="about__text">
            Mi formación ha sido autodidacta y de busqueda constante, mirando
            siempre aquí y allá y dejando que mi curiosidad y disciplina pulan
            el camino, me encanta trabajar en equipo y conocer personas nuevas,
            así mismo, amante de la docencia y la música como guitarrista. Soy
            una persona ordenada y confiada, siempre amigable y trabajadora, con
            la conciencia de que los problemas se resuelven uno a la vez.
          </p>
        </div>

        <div className="about__img">
          <img src={john} alt="john" className="foto__john" />
        </div>
      </div>
      </AnimatedPage>
  );
};

export default About;
