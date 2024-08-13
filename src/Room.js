


import React, { useState } from "react";

import './style.css'

export function Room() {
    let [light, setLight] = useState()    // ()-undefined means false
    let [buttonClicked, setButtonclicked] = useState(0)
    let [roomLit, setRoomlit] = useState(0)
    function click() {
        setLight(!light)
        setButtonclicked(++buttonClicked)
        console.log(`Button Clicked`)
        if(buttonClicked%2 !==0) {
                setRoomlit(++roomLit)
        }
    }
        

    return (
    <div >
        <br />
        <h2>Click Button to Turn-{light? 'OFF' : 'ON'} the Lights. </h2>
        <br />
        <button   onClick={click}>{light? 'OFF' : 'ON'}</button>
        <br />
        <h3>Room lit: {roomLit}-times. </h3>

        <div className={light? 'litRoom' : 'darkRoom'}>
            <h2>Room is {light? 'Lit' : 'Dark'}</h2>
        </div>
    </div>
    )
}



