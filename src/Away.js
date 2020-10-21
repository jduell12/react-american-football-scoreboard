import React from "react";
import "./App.css";

function Away(props){
    return(
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{props.score}</div>
      </div>
    )
  }

export default Away;