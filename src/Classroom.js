


import React, { useState } from "react";

// ENGLISH Class-Work on-hand practice:

function Classroom() {
    // const state = useState(true)
    let   [isLit, setLit] = useState(false)
    function    click() {
        console.log('Toggle-Button-Clicked');
        setLit(!isLit)
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <h1 >The Class-room is: {isLit? 'Lit': 'Dark'} </h1>

            <button onClick={click}>Toggle Button</button>
            <br />
            <br />
            
        </div>
    )
}

export default Classroom;