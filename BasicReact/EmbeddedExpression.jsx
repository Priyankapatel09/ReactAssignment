import React from "react";
function Practice(User){
    return User.name +" "+ User.surname;
}
const User ={
    name:"Priyanka",
    surname:"Patel"
}
const Display = () =>(<h2>
{Practice(User)}</h2>
)
export default Display;