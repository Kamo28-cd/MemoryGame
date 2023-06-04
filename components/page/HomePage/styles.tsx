import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  height: 90vh;
  /* overflow-y: hidden; */
  max-height: fit-content;
  width: 600px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
