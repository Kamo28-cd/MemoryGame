import styled, { css } from "styled-components";

interface IStyledImage {
  $status: string;
}

interface IStyledContainer {
  itemClass: string;
}

export const StyledCardContainer = styled.div<IStyledContainer>(
  ({ itemClass }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      transition: transform 0.5s;
      transform: ${itemClass ? "rotateY(0)" : "rotateY(180deg)"};
      animation: 2s hideCard linear;
      background-color: white;

      @keyframes hideCard {
        0%,
        70% {
          transform: rotateY(0);
        }
        100% {
          transform: rotateY(180deg);
        }
      }

      .image-card {
        max-width: 80%;
        max-height: 80%;
        width: 95px;
        height: 120px;
        transition: transform 0.5s;
        transform: ${itemClass ? "scale(1)" : "scale(0)"};
        animation: 2s hideImage linear;
      }

      @keyframes hideImage {
        0%,
        70% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }

      .active {
        transform: rotateY(0);
      }
      .active .image-card {
        transform: scale(1);
      }

      .incorrect {
        border: 2px solid;
        border-color: red;
      }

      .correct {
        border: 2px solid green;
        background-color: green;
      }
    `;
  }
);

export const StyledImage = styled.img<IStyledImage>(({ $status }) => {
  const status = $status;

  return css`
    border: 5px solid
      ${status === "correct"
        ? "green"
        : status === "incorrect"
        ? "red"
        : "white"};
  `;
});
