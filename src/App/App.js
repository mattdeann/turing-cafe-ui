import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer'

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



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <CardContainer allCards={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
