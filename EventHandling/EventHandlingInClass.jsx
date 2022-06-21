import React, { Component } from 'react'

export default class EventHandlingInClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"How are you?"
      }
    }
    clickHandler(){
        this.setState({
            message:"I am fine thank you!!"
        })
    }
  render() {
    return (
      <div className="event"><button onClick={this.clickHandler.bind(this)}>Click to answer</button>{this.state.message}</div>
    )
  }
}
