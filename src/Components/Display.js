import React from "react";

function Display(props){
    return (
      <div>
        <p>{ props.from } { props.to }</p>
        <p>{ props.from }{ props.to } CURRENT PRICE: { props.currentPrice }</p>
        <p>{ props.from } DAILY HIGH: { props.dailyHigh }</p>
        <p>{ props.from } DAILY LOW:{ props.dailyLow }</p>
        <p>{ props.from } 24HR VOLUME:{ props.twentyfourVol }</p>
      </div>
    );
}

export default Display;