import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

// This is does not hold all cards as the form also needs access to the card data
function CardContainer({allCards}) {
  let cards;
    if (allCards) {
      cards = allCards.map(resy => {
        return (
          <Card data={resy} />
        )
      })
    } else {
      cards = null;
    }

  return (
    <main>
      {cards}
    </main>
  )
}

export default CardContainer;