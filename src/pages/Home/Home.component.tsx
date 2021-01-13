import React from "react";
import { Blockchain } from "../../components";
import { Presentation } from "./Presentation";
import { HowItWorks } from "./HowItWorks";
// import { Footer } from "./Footer";
import { StyledContent, StyledHome } from "./Home.styles";

export const Home = () => {
  return (
    <StyledHome>
      <Blockchain />
      <StyledContent>
        <Presentation />
        <HowItWorks />
      </StyledContent>
      {/* <Footer /> */}
    </StyledHome>
  );
};

export default Home;
