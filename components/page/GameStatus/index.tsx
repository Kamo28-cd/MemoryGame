import {
  AlertCard,
  CardComponent,
  CustomButton,
  StatusModal,
} from "@/components/common";
import { useScoreContext, useScoreUpdateContext } from "@/context";
import React, { useEffect, useState } from "react";

interface IGameStatusProps {
  tries: number;
}

const GameStatus: React.FC<IGameStatusProps> = ({ tries }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const scoreSheet = useScoreContext();
  const handleScoreSheet = useScoreUpdateContext();

  useEffect(() => {
    if (scoreSheet[0].moves >= tries || scoreSheet[0].points >= 4) {
      setGameOver(true);

      if (scoreSheet[0].points < 4) {
        setIsWinner(false);
      }
      if (scoreSheet[0].points >= 4) {
        setIsWinner(true);
      }
      setToggleModal(true);
    } else {
      setGameOver(false);
    }
  }, [scoreSheet]);

  const handleButton = () => {
    setToggleModal(false);

    setTimeout(() => {
      location.reload();
    }, 500);
  };

  return (
    <>
      {gameOver ? (
        <StatusModal
          toggleModal={toggleModal}
          handleClose={() => setToggleModal}
        >
          <CardComponent>
            {isWinner ? (
              <AlertCard
                type={"win"}
                heading={"Congratulations"}
                messages={["You win! Would you like to play again?"]}
                feedback={" "}
              />
            ) : (
              <AlertCard
                type={"lose"}
                heading={"Game Over "}
                messages={["You didn't win this time!"]}
                feedback={" "}
              />
            )}
            <CustomButton
              $buttonType={"primary"}
              onClick={() => {
                handleButton();
              }}
            >
              Try again
            </CustomButton>
          </CardComponent>
        </StatusModal>
      ) : null}
    </>
  );
};

export default GameStatus;
