import React from 'react';
class AnotherClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title:'React'
        }
    }
    render(){
        return<div className="comp">
            <h2>{this.state.title}: Single page Application</h2>
        </div>
    }
}
export default AnotherClassComponent;