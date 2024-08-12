import React from "react";

import Hello from './hello';


// NEW CSS STYLE FILE:
import './style.css'

function App2(props) {
    return (
      <div className="app2js">
        <h4>--------------START App2.js------------</h4>
        <div>
          <ul > 
            <li><h4>Hello World! APP-2.JS   </h4></li> 
            <li><h4>Wellcome to course {props.course} in {props.course}.   </h4></li> 
            </ul>

          <br />
          <hr />
          <Hello firstName="Ahmed" />
          <br />
          <hr />
          <br />
      </div>
        <h4>--------------END App2.js------------</h4>
      </div>
    );
  }
  
  export default App2;