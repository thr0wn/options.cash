import { Box } from "@material-ui/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Button, Logo } from "../../../components";
import {
  SecondaryText,
  MarkedText,
  StyledPresentation,
} from "./Presentation.styles";

export const Presentation = () => {
  return (
    <StyledPresentation>
      <Fade duration={1000} delay={1000} triggerOnce>
        <MarkedText variant="h3" marked>
          options.cash
          <Logo width="80px" />
        </MarkedText>
      </Fade>

      <Fade delay={2000} duration={1000} triggerOnce>
        <SecondaryText variant="h6">
          Manage portfolio risks and returns with decentralized options
        </SecondaryText>
        <Box display="flex" flexDirection="row-reverse">
          <Link to="trade">
            <Button size="large">Try it now</Button>
          </Link>
        </Box>
      </Fade>
    </StyledPresentation>
  );
};

export default Presentation;
