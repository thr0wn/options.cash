import React from "react";
import { Fade } from "react-awesome-reveal";
import { TitleText, StyledPositions } from "./Positions.styles";

export const Positions = () => {
  return (
    <Fade triggerOnce>
      <StyledPositions>
        <TitleText variant="h5" marked markDirection="right">
          Positions
        </TitleText>
      </StyledPositions>
    </Fade>
  );
};

export default Positions;
