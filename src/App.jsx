import "./App.css";
import "./Components/styles/final-score.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { useFish } from "./Components/FishProvider";

function App() {
  const {initialFishes, fish} = useFish()
  return (
      <div className="App">
        <header>
          {fish.fishIdx === initialFishes.length
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
