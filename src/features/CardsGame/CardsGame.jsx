import React, { useEffect, useState } from 'react';
import Card from "./Card" ;
import ActionsButtons from "./ActionsButtons" ;
import { deckArray } from "./DeckArray";

const CardsGame = () => {

  const [cardsArray, setCardsArray] = useState(deckArray);
  const [cardPicked, setCardPicked] = useState([]);

  useEffect(() => shuffle(deckArray), [])

  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };
    setCardsArray(array);
    setCardPicked([]);
  };

  const dealOneCard = () => {
    const randomItem = cardsArray[Math.floor(Math.random()*cardsArray.length)];
    const newCardsArray = cardsArray.filter(element => element.index !== randomItem.index)
    setCardsArray(newCardsArray);
    let cardsPickedArray = cardPicked;
    cardsPickedArray.length < 52 &&
    cardsPickedArray.push(randomItem);
    setCardPicked(cardsPickedArray);
  };

  const sortCards = () => {
    let temporaryArray = deckArray;
    temporaryArray.sort(function (x, y) {
        return x.index - y.index;
    });
    setCardsArray(temporaryArray);
    setCardPicked([]);
  }

  return (
    <div style={{ width: "100%" }}>
      <div  style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 75px", height: 282 }}>
        {cardsArray && cardsArray.map((card, index) => {
          return (
            <div className="animated slideInDown" key={index}>
              <Card suits={card.suits} card={card.card} color={card.color} />
            </div>
          ); 
        })}
      </div>
      <ActionsButtons
       shuffle={shuffle} 
       dealOneCard={dealOneCard}
       sortCards={sortCards}
       deckArray={deckArray}
      />
      <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 75px" }}>
        {cardPicked && cardPicked.map((card, index) => {
          return (
            <div className="animated slideInUp" key={index}>
              <Card suits={card.suits} card={card.card} color={card.color}/>
            </div>
          ); 
        })}
      </div>
    </div>
  );
};

export default CardsGame;