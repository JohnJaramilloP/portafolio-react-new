import React from "react";
import SendForm from "./SendForm";
import "./form.css";

const Form = () => {
  
  return (
    <div 
    className="formulario-content" 
    onSubmit={SendForm}
    >
      <form id="formulario" className="formulario" >
        <label htmlFor="usuario">Nombre:</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Ingresa tu nombre"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          title="Nombre solo acepta letras y espacios"
          required
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo"
          title="Email incorrecto"
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          required
        />

        <label htmlFor="text">Escribe tu mensaje:</label>
        <textarea
          name="mensaje"
          id="mensaje"
          title="El mensaje es requerido"
          data-pattern=" ^.{1,255}$"
          required
        ></textarea>

        <div className="send">
          <button type="submit" value="Enviar">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
