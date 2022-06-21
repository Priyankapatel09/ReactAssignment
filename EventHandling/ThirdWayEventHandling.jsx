import React, { Component } from 'react'

export default class ThirdWayEventHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         action:"An action will take place on button click"
      }
      this.buttonClick = this.onButtonClick.bind(this)
    }
    onButtonClick(){
        this.setState({
            action:"Hey!!! Good Morning... Thanks for clicking the button"
        })
    }
  render() {
    return (
        <div>
            <h2> {this.state.action}</h2>
            <button onClick={this.buttonClick}>Press The Button</button>
            
        </div>
    )
  }
}
