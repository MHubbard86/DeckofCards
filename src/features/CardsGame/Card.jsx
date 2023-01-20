import React from "react";
import heart from "./images/heart.png";
import diamond from "./images/diamond.png";
import club from "./images/club.png";
import spade from "./images/spade.png";
import "./card.scss";

const Card = (props) => {

  const { suits, card, color } = props;

  const getCardSymbol = (suits) => {
    let symbol;
    switch(suits) {
      case "Diamond":
        return symbol = diamond;
      case "Heart":
        return symbol = heart;
      case "Club":
        return symbol = club;
      case "Spade":
        return symbol = spade;
      default:
        return symbol;
    };
  };

  const cardSymbol = getCardSymbol(suits);
  return (
    <div className="card-container" style={{ color: `${color}` }}>
      <div style={{ position: "absolute", top: 15, left: 15 }}>
        <div style={{ maxWidth: 20 }}>{card}</div>
        <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }}/>
      </div>
      <div>
        <img src={cardSymbol} alt="suit-symbol" style={{ height: 25, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
      </div>
      <div style={{ position: "absolute", bottom: 15, right: 15, transform: "rotate(-180deg)" }}>
        <div style={{ maxWidth: 20 }}>{card}</div>
        <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }}/>        
      </div>
    </div> 
  );
};

export default Card;