


import React, { useState } from 'react';
import './App.css';
import {Inc}  from './Increase';
import {Dec}  from './Decrease';

function App() {
  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(true)
  return (
    <div>
    <div >
      {/* TODO: Icreament in Value Should Apear in <Inc> & Decreament in <Dec> Components */}
      <br />
      <h3>Value of variable count is: {count} </h3>
      <br />
      <Inc value={count}></Inc>
      <button onClick={() => setCount(++count)}>
        Increase Value
      </button>
      <br />
      <Dec value={count} ></Dec>
      <button onClick={() => setCount(--count)}>
        Decrease Value
      </button>
    </div>

    <div className= {`${isMorning? 'sunRise' : 'box'}`}>
      <h4>Setting Time-Zone</h4>
      <br />
      <h1>Good {isMorning? "Morning" : "Night"}!</h1>
      <br />
    <button id='timeBtn' onClick={()=> setMorning(!isMorning)}>Change Time</button>

    </div>
    </div>
    
  );
}

export default App;
