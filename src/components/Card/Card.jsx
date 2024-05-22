import "./Card.css";
import React from "react";

const Card = (props) => {
  const title = props.title

  return (
    <div className="card">
      <div className="titulo">
        <h6>{title}</h6>
      </div>
      <div className="face">
        <span>{props.descricao}</span>
      </div>
    </div>
  );
};

export default Card;
