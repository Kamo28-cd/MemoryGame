import { ICardProps } from "../types/Common";

export const sortCards = (data: ICardProps) => {
  return data.sort(() => Math.random() - 0.5);
};

export const isGameComplete = (gameData: ICardProps): boolean => {
  let gameComplete: boolean = false;

  const results = gameData.filter((obj) => {
    return obj.status !== "correct";
  });

  if (results.length > 0) {
    gameComplete = false;
  }
  if (results.length === 0) {
    gameComplete = true;
  }

  return gameComplete;
};
