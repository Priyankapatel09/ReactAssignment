import React, { Component } from 'react'

export default class ChangeMessage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"Hii... can you help me plz?"
    }
  }

  replyMessage(){
    this.setState({message:"Yes sure"})
  }
  render() {
    return (
      <div><p>{this.state.message}</p>
      <button onClick={()=>this.replyMessage()}>Click Me</button></div>
    )
  }
}
