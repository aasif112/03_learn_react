


import React, { useState } from 'react';
import './App.css';


export function NumGenerator() {
        let [RandomNum, setRandomNum] = useState()
        let [evenCount, setevenCount] = useState(0)
        let [oddCount, setoddCount] = useState(0)
        function Start() {
                console.log({RandomNum})
                setRandomNum(parseInt(Math.random()*100 +1))
                if(RandomNum%2 ===0) {
                        
                        console.log('Even')
                        setevenCount(++evenCount)
                } else if(RandomNum%2 ===1) {
                        setoddCount(++oddCount)
                        console.log('Odd')
                }
        }


  return (
   <div>
      {/* NUMBER GENEARTOR */}
      <div>
        <br />
           <h2>Random Number: {RandomNum} </h2>
           <br />
           <button onClick={Start}>  
              Generate Number
           </button>
      </div>
        
        <br />
        {/* ODD-EVEN CHECKING */}
           <h2>&emsp;The Number is : &emsp; 
                        <span className={RandomNum%2===0? 'even' : 'odd'} > {RandomNum%2===0? 'Even' : 'Odd'}
                        </span> 
           </h2>
        <br />
        {/* ODD EVEN COUNTER */}
        <div>
           <h3 className={RandomNum%2===0? 'highlight' : 'simple'} >
                Even Number Appeared: &emsp; {evenCount} 
           </h3>
           <h3 className={RandomNum%2===0? 'simple' : 'highlight'}>
                Odd Number Appeared: &emsp; {oddCount} 
           </h3>
        </div>

   </div>
)
}
 









