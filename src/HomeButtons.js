import React from "react";
import "./App.css";

function HomeButtons(props){
    const {touchDown, fieldGoal} = props
  
    return(
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={touchDown}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={fieldGoal}>Home Field Goal</button>
      </div>
    )
  }
export default HomeButtons;