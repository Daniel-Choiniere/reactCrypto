import React from "react";

function Display(props){
    return (
      <div>
        <p>{ props.from }</p>
        <p>{ props.to }</p>
        <p>{ props.exchange }</p>
      </div>
    );
}

export default Display;