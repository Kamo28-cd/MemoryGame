import { ICardProps } from "@/utils/types/Common";
import React from "react";
import { StyledCardContainer, StyledImage } from "./styles";

const Card: React.FC<ICardProps[0]> = ({
  index,
  status,
  image,
  handleClick,
}) => {
  const itemClass = status ? `active ${status}` : "";

  return (
    <StyledCardContainer
      itemClass={itemClass}
      className={`card ${itemClass}`}
      // style={{ transform: itemClass ? "rotateY(0)" : "rotateY(180)" }}
      onClick={() => handleClick && handleClick(index)}
    >
      <StyledImage
        className="image-card"
        style={{ transform: itemClass ? "scale(1)" : "" }}
        src={image}
        alt=""
        width="80%"
        height="80%"
        $status={status}
      />
    </StyledCardContainer>
  );
};

export default Card;
