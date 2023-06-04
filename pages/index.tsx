import HomePage from "@/components/page/HomePage";
import ScoreContextProvider from "@/context";
import React from "react";

const Home = () => {
  return (
    <ScoreContextProvider>
      <HomePage />
    </ScoreContextProvider>
  );
};

export default Home;
