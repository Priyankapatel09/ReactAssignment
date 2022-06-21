import React from 'react'
const Details = (props) =>{
    return(
    <div>
        <h4>Hello My name is {props.name} </h4>
        <h4>I work as a {props.designation}</h4>
        <h4>I have experience of {props.years} yrs.</h4>
    </div>)
}
export default Details;