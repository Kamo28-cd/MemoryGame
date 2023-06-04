import { Typography } from "@mui/material";
import React from "react";
import MemoryCards from "../MemoryCards";
import FlexContainer from "@/components/common/FlexContainer";
import { CardContainer } from "./styles";

const HomePage = () => {
  return (
    <FlexContainer flexDirection="column">
      <Typography variant="h3" color={"white"}>
        Memory Card Game
      </Typography>
      <CardContainer>
        <MemoryCards />
      </CardContainer>
    </FlexContainer>
  );
};

export default HomePage;
