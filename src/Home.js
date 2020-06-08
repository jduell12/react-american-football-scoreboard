import React from "react";
import "./App.css";


function Home(props){
    const {score} = props
    return(
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{score}</div>
      </div>
    )
  }

export default Home;