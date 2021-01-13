import React from "react";
import { Fade } from "react-awesome-reveal";
import { StyledFooter } from "./Footer.styles";

export const Footer = () => {
  return (
    <Fade triggerOnce>
      <StyledFooter>
        <div>...</div>
      </StyledFooter>
    </Fade>
  );
};

export default Footer;
