import "./styles/score-board.css";
import { useFish } from "./FishProvider";
const answersLeft = ["trout", "salmon", "tuna", "shark"];
// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const {fish} = useFish()
  const displayAnswers = answersLeft.filter((answerFish, idx) =>
    idx >= fish.fishIdx
  );
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {fish.incorrectCount}</div>
      <div id="choices-left">
        {displayAnswers.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {fish.correctCount}</div>
    </div>
  );
};
