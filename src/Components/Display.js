import React from "react";

function Display(props){
  console.log(props)
  if (props.from !== null) {
        return (
      <ul className="display">
        <li>{ props.from } { props.to }</li>
        <li>{ props.from }{ props.to } CURRENT PRICE: { props.currentPrice }</li>
        <li>{ props.from } DAILY HIGH: { props.dailyHigh }</li>
        <li>{ props.from } DAILY LOW:{ props.dailyLow }</li>
        <li>{ props.from } 24HR VOLUME:{ props.twentyfourVol }</li>
      </ul>
    );
  }
  else{ 
    return null;
  }
}

export default Display;