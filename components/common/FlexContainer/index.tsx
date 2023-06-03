import React, { ReactNode } from "react";
import { StyledWrapper } from "./styles";

interface CardContainerProps {
  children: ReactNode;
  flexDirection?: "column" | "row";
  $width?: string;
  $height?: string;
  $color?: string;
  handleClick?: Function;
}

const FlexContainer: React.FC<CardContainerProps> = ({
  children,
  flexDirection,
  $width,
  $height,
  $color,
  handleClick,
}) => {
  return (
    <StyledWrapper
      flexDirection={flexDirection && flexDirection}
      className={"container"}
      width={$width && $width}
      height={$height && $height}
      color={$color && $color}
      onClick={() => handleClick && handleClick("100")}
    >
      {children}
    </StyledWrapper>
  );
};

export default FlexContainer;
