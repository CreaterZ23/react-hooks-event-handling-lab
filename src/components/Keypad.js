import React from 'react';

function handleChange(){
    console.log("Entering password...")
}

function Keypad (){
    return(
        <input type="password" onChange={handleChange}/>
    )
}


export default Keypad;
