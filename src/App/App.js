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

  postResy = (name, date, time, number) => {
    console.log(typeof name)
    console.log(date)
    console.log(time)
    console.log(number)
    
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        date: date,
        time: time,
        number: parseInt(number)
      }),
      redirect: 'follow'
    };

    return fetch("http://localhost:3001/api/v1/reservations", requestOptions)
    .then(response => console.log(response))
    .catch(error => {
      throw new Error(error)
    })
  }

  addReservation = (id, name, date, time, number) => {
    this.postResy(name, date, time, number)
    
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
