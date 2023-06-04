import { TScore } from "@/utils/types/Common";
import React, { ReactNode, useContext, useState, createContext } from "react";

export const initialScore = [
  { player: "Player 1", points: 0, moves: 0, isTurn: true },
];

export const ScoreContext = createContext<TScore>(initialScore);
export const ScoreUpdateContext = createContext((obj: TScore[0]) => {});

export const useScoreContext = () => {
  return useContext(ScoreContext);
};

export const useScoreUpdateContext = () => {
  return useContext(ScoreUpdateContext);
};

interface IScoreContextProvider {
  children: ReactNode;
}

type IScoreIndex = {
  [x: string]: any;
};

const ScoreContextProvider: React.FC<IScoreContextProvider> = ({
  children,
}) => {
  const [score, setScore] = useState<TScore & IScoreIndex>(initialScore);

  const handleSetScore = (obj: TScore[0]) => {
    // TODO: check if single player or multi player

    Object.keys(obj).forEach((key) => {
      if (key === "points") {
        score[0][key] += obj[key];
      } else if (key === "moves") {
        score[0][key] += 1;
      } else {
        score[0][key] = obj[key];
      }
    });

    setScore([...score]);
  };

  return (
    <ScoreContext.Provider value={score}>
      <ScoreUpdateContext.Provider value={handleSetScore}>
        {children}
      </ScoreUpdateContext.Provider>
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
