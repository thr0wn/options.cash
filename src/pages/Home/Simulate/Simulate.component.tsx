import React from "react";
import { Fade } from "react-awesome-reveal";
import { Plot } from "../../../components";
import { TitleText, StyledContent, StyledSimulate } from "./Simulate.styles";

export const Simulate = () => {
  return (
    <Fade triggerOnce>
      <StyledSimulate>
        <TitleText variant="h4" marked>
          Simulate
        </TitleText>
        <StyledContent>
          <Plot />
        </StyledContent>
      </StyledSimulate>
    </Fade>
  );
};

export default Simulate;
