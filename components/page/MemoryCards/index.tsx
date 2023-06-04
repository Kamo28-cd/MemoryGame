import React, { useEffect, useState } from "react";
import { cardData } from "./index.data";
import { MemoryCardContainer } from "./styles";
import Card from "./Card";
import { ICardProps } from "@/utils/types/Common";
import { isGameComplete, sortCards } from "@/utils/functions/helper";

interface IStorage {
  [x: string]: any;
}

const MemoryCards = () => {
  const [cards, setCards] = useState<ICardProps & IStorage>([]);
  const [prevEl, setPrevEl] = useState(-1);

  useEffect(() => {
    const gameData: string | null = localStorage.getItem("cards");

    if (gameData) {
      const game = JSON.parse(gameData);
      if (isGameComplete(game)) {
        setCards(sortCards(cardData));
      }

      if (!isGameComplete(game)) {
        setCards(game);
      }
    }

    if (!gameData) {
      setCards(sortCards(cardData));
    }
  }, []);

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
    } else {
      cards[current].status = "incorrect";
      cards[prevEl].status = "incorrect";
      setCards([...cards]);
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
    <MemoryCardContainer>
      {cards.map((card, index) => (
        <Card key={index} {...{ ...card, index, handleClick }} />
      ))}
    </MemoryCardContainer>
  );
};

export default MemoryCards;
