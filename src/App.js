


import React, { useState } from 'react';
import './App.css';

function App() {
  let RandomNum = parseInt(Math.random()*100 +1)
  let [isMorning, setMorning] = useState(true)
  return (
    <div>
    <div >
      <br />
      <h3>Random Number: {RandomNum} </h3>
      <br />
      
       
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
