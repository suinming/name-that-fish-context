import "./App.css";
import "./Components/styles/final-score.css";
import React from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { useFish } from "./Components/FishProvider";

function App() {
  const {initialFishes, fishIdx} = useFish()
  return (
      <div className="App">
        <header>
          {fishIdx === initialFishes.length
            ? (
                <FinalScore />
            )
            : (
              <>
                <ScoreBoard />
                <GameBoard />
              </>
            )}
        </header>
      </div>
  );
}

export default App;
