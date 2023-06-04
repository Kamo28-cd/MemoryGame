import styled, { css } from "styled-components";

export const MemoryCardContainer = styled.div`
  height: 70vh;
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;
  margin-top: 20px;

  /* @media screen and (max-width: 640px) {
    width: auto;
  } */
`;
