import styled from "styled-components";
import { Text } from "../../../components";

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 18px;

  button {
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

export const StyledOptions = styled.div`
  position: relative;
`;
