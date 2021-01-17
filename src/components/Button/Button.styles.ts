import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
  color: white !important;
  border-color: white !important;
  border-radius: 0 !important;

  &:hover {
    border-color: #0ac18e !important;
    background: #0ac18e !important;
  }

  &.Mui-disabled {
    opacity: 0.5;
  }
`;
