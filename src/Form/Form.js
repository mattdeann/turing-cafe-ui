import React, { Component } from 'react';
import './Form.css'


// This is a class as it needs to store data until submit
class Form extends Component {
  constructor() {
    super()
    this.state = {
      // make sure to clear form and add 1 to id after submit
      id: 10001,
      name: "",
      date: "",
      time: "",
      number:""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  render() {
    return(
      <div className="form">
        <input 
          id="name" 
          placeholder="Name" 
          onChange={event => this.handleChange(event)} 
          value={this.state.name}
        />
        <input 
          id="date" 
          type="date" 
          placeholder="Date" 
          onChange={event => this.handleChange(event)} 
          value={this.state.date}
        />
        <input 
          id="time" 
          type="time" 
          placeholder="Time" 
          onChange={event => this.handleChange(event)} 
          value={this.state.time}
        />
        <input 
          id="number" 
          type="number" 
          placeholder="# of Guests" 
          onChange={event => this.handleChange(event)} 
          value={this.state.number}
        />
        <button>
          Submit
        </button>
      </div>
      
    )
  }
}

export default Form;