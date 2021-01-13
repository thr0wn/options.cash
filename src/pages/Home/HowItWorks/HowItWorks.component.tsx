import React from "react";
import { Fade } from "react-awesome-reveal";
import YouTube from "react-youtube";
import { TitleText, StyledHowItWorks } from "./HowItWorks.styles";

export const HowItWorks = () => {
  return (
    <Fade triggerOnce>
      <StyledHowItWorks>
        <TitleText variant="h4" marked markDirection="right">
          How it works?
        </TitleText>
        <YouTube className="youtube" videoId="9-OkfALrbBU" />
      </StyledHowItWorks>
    </Fade>
  );
};

export default HowItWorks;
