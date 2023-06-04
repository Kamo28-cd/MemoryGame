import React, { useEffect, useState } from "react";
import { cardData } from "./index.data";
import { MemoryCardContainer } from "./styles";
import Card from "./Card";
import { ICardProps } from "@/utils/types/Common";
import { isGameComplete, sortCards } from "@/utils/functions/helper";
import {
  initialScore,
  useScoreContext,
  useScoreUpdateContext,
} from "@/context";
import FlexContainer from "@/components/common/FlexContainer";
import { Typography } from "@mui/material";
import Legend from "../Legend";

interface IStorage {
  [x: string]: any;
}

const MemoryCards = () => {
  const [cards, setCards] = useState<ICardProps & IStorage>([]);
  const [prevEl, setPrevEl] = useState(-1);
  const scoreSheet = useScoreContext();
  const setScoreSheet = useScoreUpdateContext();

  useEffect(() => {
    const gameData: string | null = localStorage.getItem("cards");
    const scoreData: string | null = localStorage.getItem("score");

    // setScoreSheet({ player: "Kamo", points: 1, moves: 2 });

    if (gameData && scoreData) {
      const game = JSON.parse(gameData);
      const scoreArray = JSON.parse(scoreData);

      if (isGameComplete(game)) {
        setCards(sortCards(cardData));
        setScoreSheet(initialScore[0]);
        localStorage.removeItem("cards");
        localStorage.removeItem("score");
      }

      if (!isGameComplete(game)) {
        setCards(game);
        setScoreSheet(scoreArray[0]);
      }
    }

    if (!gameData) {
      setCards(sortCards(cardData));
    }
  }, []);

  useEffect(() => {
    const gameData: string | null = localStorage.getItem("cards");
    const scoreData: string | null = localStorage.getItem("score");

    if (gameData && scoreData) {
      const game = JSON.parse(gameData);
      const scoreArray = JSON.parse(scoreData);

      if (isGameComplete(game)) {
        setScoreSheet(initialScore[0]);
        localStorage.removeItem("cards");
        localStorage.removeItem("score");
      }
    }
  }, [cards]);

  const evaluateIndex = (current: number) => {
    if (
      cards[current].id === cards[prevEl].id &&
      cards[current].status !== "active" &&
      cards[current].status !== "correct"
    ) {
      cards[current].status = "correct";
      cards[prevEl].status = "correct";
      setCards([...cards]);
      setPrevEl(-1);
      localStorage.setItem("cards", JSON.stringify(cards));
      setScoreSheet({ points: 1, moves: 1 });
      localStorage.setItem("score", JSON.stringify(scoreSheet));
    } else {
      cards[current].status = "incorrect";
      cards[prevEl].status = "incorrect";
      setCards([...cards]);
      setScoreSheet({ points: 0, moves: 1 });
      localStorage.setItem("score", JSON.stringify(scoreSheet));
      setTimeout(() => {
        cards[current].status = "";
        cards[prevEl].status = "";
        setCards([...cards]);
        setPrevEl(-1);
      }, 2000);
    }
  };

  const handleClick = (index: number) => {
    if (prevEl === -1) {
      cards[index].status = "active";
      setCards([...cards]);
      setPrevEl(index);
    } else {
      evaluateIndex(index);
    }
  };
  return (
    <>
      <Legend />
      <MemoryCardContainer>
        {cards.map((card, index) => (
          <Card key={index} {...{ ...card, index, handleClick }} />
        ))}
      </MemoryCardContainer>
    </>
  );
};

export default MemoryCards;
