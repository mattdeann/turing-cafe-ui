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

  render() {
    return(
      <div className="form">
        <input placeholder="Name" />
        <input placeholder="Date"/>
        <input placeholder="Time"/>
        <input placeholder="# of Guests"/>
        <button>
          Submit
        </button>
      </div>
      
    )
  }
}

export default Form;