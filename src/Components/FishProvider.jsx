import { createContext, useContext, useState } from "react";
import { Images } from "../assets/images";

const FishContext = createContext({});

export const FishProvider = ({ children }) => {
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

  const [fish, setFish] = useState({
    correctCount: 0,
    incorrectCount: 0,
    fishIdx: 0,
    incrementProp: (prop) => {
      setFish({ ...fish, [prop]: fish[prop] + 1 });
    },
  });

  return (
    <FishContext.Provider value={{ fish, setFish, initialFishes }}>
      {children}
    </FishContext.Provider>
  );
};

export const useFish = () => {
  return useContext(FishContext);
};
