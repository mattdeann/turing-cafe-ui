import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';


class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }


  render() {
    return (
      <main>
        <Card />
        <Card />
        <Card /> 
      </main>
    )
  }
}

export default CardContainer;