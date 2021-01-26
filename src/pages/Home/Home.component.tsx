import React from "react";
import { Blockchain } from "../../components";
import { Presentation } from "./Presentation";
import { HowItWorks } from "./HowItWorks";
import { Simulate } from "./Simulate";
import { StyledContent, StyledHome } from "./Home.styles";

export const Home = () => {
  return (
    <StyledHome>
      <Blockchain />
      <StyledContent>
        <Presentation />
        <HowItWorks />
        <Simulate />
      </StyledContent>
    </StyledHome>
  );
};

export default Home;
