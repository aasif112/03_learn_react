


import React, { useState } from 'react';
import './App.css';
import { NumChecker } from './RandomNum';
import { Counter } from './RandomNum';

function App() {
  let [RandomNum, setRandomNum] = useState() 
  let [isMorning, setMorning] = useState(true)
  let [evenCount, setevenCount] = useState(0)
  let [oddCount, setoddCount] = useState(0)
  return (
    <div>
    <div >
      <br />
      <h2>Random Number: {RandomNum} </h2>
      <br />
      <button onClick={()=> {setRandomNum(parseInt(Math.random()*100 +1))
        {RandomNum%2 === 0 ? setevenCount(++evenCount) : setoddCount(++oddCount)}
      }}>Generate Number</button>
      <br />
      <NumChecker numType= {RandomNum%2 === 0 ? 'Even' : 'Odd'} getClass= {RandomNum%2 === 0 ? 'even' : 'odd'} />
      <br />
      <br />
      
      <Counter evenCounts = {evenCount}  oddCounts = {oddCount} evenClass= {RandomNum%2 === 0 ? 'highlight' : 'simple'}
      oddClass = {RandomNum%2 === 0 ? 'simple'  : 'highlight'} />
      

    </div>

    <div className= { `${isMorning? 'sunRise' : 'box'}` }>
      <h4>Setting Time-Zone</h4>
      <br />
      <h1>Good {  isMorning? "Morning" : "Night"  }!</h1>
      <br />
    <button id='timeBtn' onClick={()=> setMorning(!isMorning)}>Change Time</button>

    </div>
    </div>
    
  );
}

export default App;
