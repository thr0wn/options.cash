import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
  color: white !important;
  border-color: white !important;
  border-radius: 0 !important;

  ${(props: any) =>
    !props.textOnly
      ? css`
          &:hover {
            border-color: #0ac18e !important;
            background: #0ac18e !important;
          }
        `
      : `
      border-color: transparent !important;
    `}

  &.Mui-disabled {
    opacity: 0.5;
  }
`;
