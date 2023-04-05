import "./styles/game-board.css";
import React from "react";
import { useState } from "react";
import { useFish } from "./FishProvider";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const {initialFishes, fish, setFish} = useFish()
  const [userInput, setUserInput] = useState("");

  const nextFishToName = fish.fishIdx <= initialFishes.length - 1
    ? initialFishes[fish.fishIdx]
    : null;

  function handleSubmit(e) {
    e.preventDefault();
    const isUserInputCorrect = userInput === nextFishToName.name;
    if (isUserInputCorrect) {
      setFish({
        ...fish,
        correctCount: fish.correctCount + 1,
        fishIdx: fish.fishIdx + 1,
      });
    } else {
      setFish({
        ...fish,
        incorrectCount: fish.incorrectCount + 1,
        fishIdx: fish.fishIdx + 1,
      });
    }
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
