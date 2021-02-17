import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';


class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      // data is an array
      data: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(response  =>
      this.setState({data: response})
    )
  }

  // to render the cards, we want to iterate over the array and create a card from each array element

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