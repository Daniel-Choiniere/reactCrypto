import React from "react";

function Display(props){
    return (
      <div>
        <p>{ props.from } { props.to }</p>
        <p>Current Price: { props.currentPrice }</p>
        <p>Daily High: { props.dailyHigh }</p>
        <p>Daily Low: { props.dailyLow }</p>
      </div>
    );
}

export default Display;