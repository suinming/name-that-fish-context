import React from "react";
import {useFish} from "./FishProvider"
// ! Do Not Add Props Here
export const FinalScore = () => {
  const {initialFishes, fish} = useFish()
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{fish.correctCount}</p>
        <hr />
        <p>{initialFishes.length}</p>
      </div>
    </div>
  );
};
