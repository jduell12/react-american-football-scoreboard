//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, scoreHomeGoal] = useState(0);
  const [awayScore, scoreAwayGoal] = useState(0);
 

  /* touchdown is worth 7 points (assume the following extra point is made)
 A field goal is worth 3 points */

  const homeTouchDown= event => {
    scoreHomeGoal(homeScore + 7);
  }

  const homeFieldGoal = event => {
    scoreHomeGoal(homeScore + 3);
  }

  const awayTouchDown = event => {
    scoreAwayGoal(awayScore + 7);
  }

  const awayFieldGoal = event => {
    scoreAwayGoal(awayScore + 3);
  }

  return (
    <div className="container">
      <ScoreBoard homeScore = {homeScore} awayScore={awayScore}/>
      <section className="buttons">
      <HomeButtons touchDown ={homeTouchDown} fieldGoal ={homeFieldGoal}/>
      <AwayButtons touchDown={awayTouchDown} fieldGoal={awayFieldGoal}/>
    </section>
    </div>
  );
  //   return (
  //     <div className="container">
  //       <section className="scoreboard">
  //         <div className="topRow">
  //           <div className="home">
  //             <h2 className="home__name">Lions</h2>
  
  //             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  //             <div className="home__score">32</div>
  //           </div>
  //           <div className="timer">00:03</div>
  //           <div className="away">
  //             <h2 className="away__name">Tigers</h2>
  //             <div className="away__score">32</div>
  //           </div>
  //         </div>
  //         <BottomRow />
  //       </section>
  //       <section className="buttons">
  //         <div className="homeButtons">
  
  //           {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
  //           <button className="homeButtons__touchdown">Home Touchdown</button>
  //           <button className="homeButtons__fieldGoal">Home Field Goal</button>
  //         </div>
  //         <div className="awayButtons">
  //           <button className="awayButtons__touchdown">Away Touchdown</button>
  //           <button className="awayButtons__fieldGoal">Away Field Goal</button>
  //         </div>
  //       </section>
  //     </div>
  // );
}

function ScoreBoard(props){
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

function Home(props){
  const {score} = props
  return(
    <div className="home">
      <h2 className="home__name">Lions</h2>
      <div className="home__score">{score}</div>
    </div>
  )
}

function Away(props){
  return(
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score">{props.score}</div>
    </div>
  )
}

function HomeButtons(props){
  const {touchDown, fieldGoal} = props

  return(
    <div className="homeButtons">
      <button className="homeButtons__touchdown" onClick={touchDown}>Home Touchdown</button>
      <button className="homeButtons__fieldGoal" onClick={fieldGoal}>Home Field Goal</button>
    </div>
  )
}

function AwayButtons(props){
  const {touchDown, fieldGoal} = props

  return(
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={touchDown}>Away Touchdown</button>
      <button className="awayButtons__fieldGoal" onClick={fieldGoal}>Away Field Goal</button>
    </div>
  )
}

export default App;
