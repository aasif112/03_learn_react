import React from 'react';


// NEW CSS STYLE FILE:
import './style.css'


function App({name, city, age }) {
  return (
    <div className="appjs">
    <h4>--------------START App.js------------</h4>
      <div>
      <h4>  Hello World! APP.JS  </h4>
      <h1>I am {name} from {city} </h1>
      <h1>I am {age} next year I will complete my course at the age of {age +1} </h1>

      </div>
    <h4>--------------END App.js------------</h4>
    </div>
  );
}

export default App;