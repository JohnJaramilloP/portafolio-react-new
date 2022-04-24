import React from "react";
import "./Slider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portafolio from "../assets/imagenes/portafolio.png";
import portafolioBandas from "../assets/imagenes/portafolioBandas.png";
import technews from "../assets/imagenes/technews.png";
import netflixclon from "../assets/imagenes/netflixclon.png";
import appclima from "../assets/imagenes/appclima.png";
import Dashboard from "../assets/imagenes/Dashboard.png";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const Slider = () => {
  return (
    <AnimatedPage>
      <div className="carousel__container">
        <div className="background__slider"></div>
        <Carousel
          className="main__slider"
          autoPlay
          infiniteLoop
          showThumbs={false}

          // animationHandler="fade"
          // swipeable={false}
          // centerMode
          // centerSlidePercentage="20"
        >
          <div className="slider__container__img">
            <img className="slider__img" src={Dashboard} alt="appclima" />
            <div className="legenda">
              <span>
                <a
                  href="https://johnjaramillop.github.io/Dashboard_covid-19/"
                  target="_blank"
                >
                  Dashboard para reporte COVID-19 -
                  React
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/JohnJaramilloP/Dashboard_covid-19"
                  target="_blank"
                >
                  Repositorio
                </a>
              </span>
            </div>
          </div>
          <div className="slider__container__img">
            <img className="slider__img" src={portafolio} alt="portafolio" />
            <div className="legenda">
              <span>
                <a
                  href="https://johnjaramillop.github.io/portafolio/"
                  target="_blank"
                >
                  Portafolio responsive - Landing page HTML, CSS, JS
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/JohnJaramilloP/portafolio"
                  target="_blank"
                >
                  Repositorio
                </a>
              </span>
            </div>
          </div>
          <div className="slider__container__img">
            <img
              className="slider__img"
              src={portafolioBandas}
              alt="portafolio"
            />
            <div className="legenda">
              <span>
                <a
                  href="https://johnjaramillop.github.io/portafolio-bandas-hard/"
                  target="_blank"
                >
                  Portafolio Bandas Hard Rock - HTML, CSS, JS
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/JohnJaramilloP/portafolio-bandas-hard"
                  target="_blank"
                >
                  Repositorio
                </a>
              </span>
            </div>
          </div>
          <div className="slider__container__img">
            <img className="slider__img" src={technews} alt="technews" />
            <div className="legenda">
              <span>
                <a
                  href="https://johnjaramillop.github.io/tech-news/"
                  target="_blank"
                >
                  Tech News - Responsive - Landing page HTML, CSS, JS
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/JohnJaramilloP/tech-news"
                  target="_blank"
                >
                  Repositorio
                </a>
              </span>
            </div>
          </div>
          <div className="slider__container__img">
            <img className="slider__img" src={netflixclon} alt="netflixclon" />
            <div className="legenda">
              <span>
                <a
                  href="https://johnjaramillop.github.io/copia-netflix/"
                  target="_blank"
                >
                  Netflix clon - Responsive - Landing page HTML, CSS, JS
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/JohnJaramilloP/copia-netflix"
                  target="_blank"
                >
                  Repositorio
                </a>
              </span>
            </div>
          </div>
          <div className="slider__container__img">
            <img className="slider__img" src={appclima} alt="appclima" />
            <div className="legenda">
              <span>
                <a
                  href="https://johnjaramillop.github.io/app-del-clima/"
                  target="_blank"
                >
                  Principales ciudades de Colombia - Aplicación del clima -
                  HTML, CSS, JS
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/JohnJaramilloP/app-del-clima"
                  target="_blank"
                >
                  Repositorio
                </a>
              </span>
            </div>
          </div>
        </Carousel>

        <div className="carousel__title">
          <h2 className="title">Mis proyectos</h2>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Slider;
