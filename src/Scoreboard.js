import React from "react";
import "./App.css";
import Home from './Home';
import Away from './Away';
import BottomRow from './BottomRow';

function Scoreboard(props){
    const {homeScore, awayScore} = props
    return (
      <section className="scoreboard">
        <div className="topRow">
        <Home score={homeScore}/>
        <div className="timer">00:03</div>
        <Away score={awayScore}/>
        </div>
        <BottomRow />
      </section>
    )
  
  }

  export default Scoreboard;