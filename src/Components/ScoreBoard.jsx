import "./styles/score-board.css";
import { useFish } from "./FishProvider";
const answersLeft = ["trout", "salmon", "tuna", "shark"];
// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const {fishIdx, correctCount, incorrectCount} = useFish()
  const displayAnswers = answersLeft.filter((answerFish, idx) =>
    idx >= fishIdx
  );
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {displayAnswers.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
