import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";

const MarkedText = (props: any) => css`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    height: 100%;
    background: #0ac18e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100vw;
    right: 0;
    z-index: -1;

    ${props.markDirection === "right" &&
    css`
      left: 0;
      right: -100vw;
    `}
  }
`;

export const StyledText = styled(Typography)`
  color: white;

  ${(props: any) => props.marked && MarkedText(props)}
`;
