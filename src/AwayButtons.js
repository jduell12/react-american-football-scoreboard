import React from "react";
import "./App.css";

function AwayButtons(props){
    const {touchDown, fieldGoal} = props
  
    return(
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={touchDown}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={fieldGoal}>Away Field Goal</button>
      </div>
    )
  }

export default AwayButtons;