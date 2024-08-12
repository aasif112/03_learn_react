import React from "react";

// NEW CSS STYLE FILE:
import './style.css'

function Offer(props) {
    return (
      <div className="offerjs">
      <h4>--------------START product.js------------</h4>
        <ul><h2>Product-{props.productNo}: {props.product}</h2>
        <li>
        <h3>We have launched a new pair of {props.product}</h3>
        </li>
        <li>
        <h3>The price of one pair {props.product} is {props.price} </h3>
        </li>
        <li>
        <h3>We offer {props.discount}% discount on two pairs of {props.product}. 
            The price will be {(props.price *2) *((100-props.discount)/100)} </h3>
        </li>
        </ul>
        <br />
      <h4>--------------END product.js------------</h4>
      </div>
    );
  }
  
  export default Offer;