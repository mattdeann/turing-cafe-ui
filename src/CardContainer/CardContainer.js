import React, { Component } from 'react';
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
      <div>
        <Card />
        <Card />
        <Card /> 
      </div>
    )
  }
}

export default CardContainer;