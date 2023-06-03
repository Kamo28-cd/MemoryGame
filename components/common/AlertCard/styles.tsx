import styled, { css } from "styled-components";
interface DisplayProp {
  $isDisplayed?: boolean;
}
export const StyledContainer = styled.div<DisplayProp>(({ $isDisplayed }) => {
  const isDisplayed = $isDisplayed;

  return css`
    margin: 10px auto;
    display: ${isDisplayed ? "block" : "none"};
  `;
});
