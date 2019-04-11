import React from "react";

function Display(props){
    return (
      <div>
        <p>{ props.from } { props.to }</p>
        <p>{ props.exchange }</p>
      </div>
    );
}

export default Display;