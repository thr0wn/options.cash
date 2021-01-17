import styled, { createGlobalStyle } from "styled-components";
import { Text } from "../../../components";

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 18px;

  > button {
    align-self: flex-end;
    margin-bottom: 18px;
    display: inline-block;
  }

  .MuiTableRow-root td:first-child {
    width: 120px;
  }
`;

export const TitleText = styled(Text)`
  padding: 12px 18px;
  text-align: left;
  line-height: 1;
  display: inline-block;
`;

export const GlobalStyles = createGlobalStyle`
  .MuiDialog-paper {
    background: rgba(44, 50, 64, 1) !important;
    padding: 18px 0;
  }

  .MuiDialogTitle-root {
    color: white;
    padding-top: 8px !important;
  }

  .MuiDialogContent-root {
    padding-top: 0 !important;

    > * {
      margin-top: 0 !important;
    }
  }

  .MuiDialogActions-root {
    padding: 16px 24px 8px !important;
  }
`;

export const StyledOption = styled.div`
  position: relative;
  background: black;
`;
