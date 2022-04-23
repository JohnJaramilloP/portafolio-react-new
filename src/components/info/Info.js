import React from "react";
import "./Info.css";

const info = () => {
  return (
    <div className="info__container">
      <div className="wrapper">
        <div className="static__text">Trabajemos juntos</div>
        <div className="static__text2">y creemos algo único.</div>
        <ul className="dinamic__txts">
          <li><span> y creemos algo único.</span></li>
          <li><span> y seremos un gran equipo.</span></li>
          <li><span> y soñemos en grande.</span></li>
          <li><span> y cambiemos el mundo.</span></li>
        </ul>
      </div>
      <div className="skew-abajo"></div>
    </div>
  );
};

export default info;
