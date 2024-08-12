import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// New Tags Created:

import App2 from './App2';
import Offer from './product';

// NEW CSS STYLE FILE:
// import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      
      <Offer  productNo={1} product="Paints" price={5000}  discount={25} />
      <br />
      <hr />
      <Offer className="offerjs" productNo={2} product="Sun Glasses" price={2500}  discount={25} />
      <br />
      <hr />
      <Offer className="offerjs" productNo={3} product="Trousers" price={1500}  discount={25} />
      <br />
      <hr />
      <hr />
      <App  name="Asif"  city="Karachi" age={34} />
      <App2 className="app2js" course="React"  quarter="Quarter-2" />
      


    </div>
);

// <div>HELLO WORLD! INDEX.JS</div>




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();