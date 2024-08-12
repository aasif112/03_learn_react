


import React from "react";

export function NumChecker({numType, getClass}) {
        return (
                <h2>&emsp;The Number is : &emsp; <span className={getClass} > {numType}</span> </h2>
        )
}

export function Counter(props) {
        return(
        <div>
                <h3 className={props.evenClass} >Even Number Appeared: &emsp; {props.evenCounts} </h3>
                <h3 className={props.oddClass}>Odd Number Appeared: &emsp; {props.oddCounts} </h3>
        </div>
        )
}

