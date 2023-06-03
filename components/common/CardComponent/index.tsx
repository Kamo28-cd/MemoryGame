import React, { ReactNode } from "react";
import { Container, CardWrapper, StyledContainer } from "./styles";

interface CardContainerProps {
  children: ReactNode;
  topPosition?: string;
  isStyled?: boolean;
}

const CardComponent: React.FC<CardContainerProps> = ({
  children,
  topPosition,
}) => {
  return (
    <>
      <Container $topPosition={topPosition} className="cardComponent">
        <CardWrapper>{children}</CardWrapper>
      </Container>
    </>
  );
};

export default CardComponent;
