import { createContext, useContext, useState } from "react";
import { Images } from "../assets/images";

const FishContext = createContext({});

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const FishProvider = ({ children }) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [fishIdx, setFishIdx] = useState(0);

  const guessWithFishName = (userInput, answerFishName) => {
    const isUserInputCorrect = userInput === answerFishName 
    if (isUserInputCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setFishIdx(fishIdx + 1)
  }

  return (
    <FishContext.Provider
      value={{
        initialFishes,
        fishIdx,
        setFishIdx,
        correctCount,
        setCorrectCount,
        incorrectCount,
        setIncorrectCount,
        guessWithFishName
      }}
    >
      {children}
    </FishContext.Provider>
  );
};

export const useFish = () => {
  return useContext(FishContext);
};
