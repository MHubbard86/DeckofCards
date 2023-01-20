import React from "react";
import { Button } from 'react-bootstrap'

const ActionsButtons = (props) => {
  const { shuffle, dealOneCard, sortCards, deckArray } = props;
  return (
    <div style={{ margin: "40px auto", textAlign: "center" }}>
      <Button variant="primary" onClick={() => shuffle(deckArray)}>Shuffle</Button>
      <Button variant="secondary" onClick={() => dealOneCard()} style={{marginLeft: '5px'}}>Deal Card</Button>
      <Button variant="danger" onClick={() => sortCards()} style={{marginLeft: '5px'}}>Sort Cards</Button>
    </div>
  );
};

export default ActionsButtons;