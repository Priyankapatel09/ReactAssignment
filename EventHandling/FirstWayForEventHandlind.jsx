import React from 'react'
function onButtonClick(){
    console.log("Button clicked for response")
}

function ClickMethod(){
    return(<div className='button'>Event Handling Concept 
    <button onClick={onButtonClick}>Button</button></div>)
}

export default ClickMethod;