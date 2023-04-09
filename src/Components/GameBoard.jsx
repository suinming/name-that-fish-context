import "./styles/game-board.css";
import { useState } from "react";
import { useFish } from "./FishProvider";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const {
    initialFishes,
    fishIdx,
    guessWithFishName,
  } = useFish();
  const [userInput, setUserInput] = useState("");

  const nextFishToName = fishIdx <= initialFishes.length - 1
    ? initialFishes[fishIdx]
    : null;

  function handleSubmit(e) {
    e.preventDefault();
    guessWithFishName(userInput, nextFishToName.name)
    setUserInput("");
  }

  return (
    nextFishToName && (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  );
};
