import styled, { css } from "styled-components";

export const StyledWrapper = styled.div<{
  flexDirection?: string;
  width?: string;
  color?: string;
  height?: string;
}>(({ flexDirection, width, color, height }) => {
  return css`
    width: ${width?.endsWith("%") ? width : width ? width + "px" : "auto"};
    height: ${height ? height + "px" : "auto"};
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${flexDirection ? flexDirection : "row"};
    padding 10px;
    background-color: ${color && color};
    border-radius: 10px;
    transition: all 1s ease-out;
  `;
});
