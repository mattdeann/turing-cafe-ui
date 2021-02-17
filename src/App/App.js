import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer'
import Form from '../Form/Form';

class App extends Component {
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

  addReservation = (id, name, date, time, number) => {
    const newResy = {
      id: id,
      name: name,
      date: date,
      time: time,
      number: number
    }

    this.setState(prevState => {
      return {
        data: [...prevState.data, newResy]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <CardContainer allCards={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
