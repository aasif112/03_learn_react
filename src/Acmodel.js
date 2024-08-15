


import React, { useState } from 'react';
import './Acmodel.css';

function    Acmodel() {
  let [onOff, setPower] = useState(false)
  let [tempUnit, setTempunit] = useState(true)
  let [tempValue, setTempvalue] = useState(28)
  function  Power() {
    setPower(!onOff)
  }
  function TempInc() {
    setTempvalue(++tempValue)
  }
  function TempDec() {
    setTempvalue(--tempValue)
  }
  function RoomTemp() {
        setTempvalue(28)
  }
  function Mode() {
    if(onOff) {
        if(tempValue<26){ return 'Cooling On'} 
        else if(tempValue>35){return 'Heating On'} 
        else {return 'Fan On'}
    } else {return 'Room Temp'}

  }

  return (
    // <!-- ROMET + AC BOX -->
    <div class="main-div">

            {/* <!-- Remote Control --> */}
        <div class="remote">
            <div class="horizontal-buttons">
                <button onClick={onOff? TempDec : RoomTemp } class="button-minus">-</button>
                <button onClick={onOff? TempInc : RoomTemp} class="button-plus">+</button>
            </div>

            <button onClick={Power} class="circle-button">ON / OFF</button>

            <button onClick={onOff? ()=> setTempunit(!tempUnit): ()=> setTempunit(tempUnit)} class="button-cf">C / F </button>
            <button class="button-mode">SELECT MODE</button>
        </div>

        {/* <!-- AC BOX --> */}
        <div class="ac-container">
            {/* <!-- AC Display --> */}
            <div class="ac-display">
                <div class="temp-display">{tempUnit ? `${tempValue}` : `${parseInt(tempValue*9/5)+32}` } <sup>O</sup>{tempUnit? 'C' : 'F'}</div>
                <div class="mode-display">{Mode()}</div>
                <div class="status-display">
                    <div className={onOff? 'status-indicatorOn' : 'status-indicatorOff'}></div>
                    <div>{onOff? 'ON' : 'OFF'}</div>
                </div>
            </div>

            {/* <!-- AC VENTS --> */}
            <div class="ac-vent">
                <div class={onOff? 'ventOn' : 'ventOff'}></div>
                <div class={onOff? 'ventOn' : 'ventOff'}></div>
                <div class={onOff? 'ventOn' : 'ventOff'}></div>
            </div>
    
        </div>

    </div>

    
  );
}

export default Acmodel;

