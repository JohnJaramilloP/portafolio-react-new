import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo1.png";
import { AiOutlineUp } from "react-icons/ai";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isOpen, setOpen] = useState(false);

  const navMenu = (e) => {
    setOpen(null)
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <AiOutlineUp
        className={`go__top ${isScrolling > 20 ? "visible" : null}`}
        onClick={toTheTop}
      />
      <div className="navbar__logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className={`menu__nav ${isOpen ? "active" : null}`}>
        <Link className="menu__options" to="/" onClick={e => navMenu(e)}>
          <p onClick={toTheTop}>Home</p>
        </Link>
        <Link className="menu__options" to="/about" onClick={e => navMenu(e)}>
          <p onClick={toTheTop}>Acerca de mí</p>
        </Link>
        <Link className="menu__options" to="/proyects" onClick={e => navMenu(e)}>
        <p onClick={toTheTop}>Mis proyectos</p>
        </Link>
        <Link className="menu__options" to="/skills" onClick={e => navMenu(e)}>
        <p onClick={toTheTop}>Habilidades</p>
        </Link>
      </div>
      <div className="hamburger__menu">
        <Hamburger duration={0.8} toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={`initial ${isOpen ? "active" : null}`}></div>
    </nav>
  );
};

export default Navbar;
