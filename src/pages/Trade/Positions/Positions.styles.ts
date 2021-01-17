import styled from "styled-components";
import { Text } from "../../../components";

export const StyledTable = styled.div`
  margin-top: 18px;

  .MuiTableRow-root td:first-child {
    width: 120px;
  }
`;

export const TitleText = styled(Text)`
  padding: 12px 18px;
  text-align: left;
  line-height: 1;
  display: inline-block;
  align-self: flex-end;
`;

export const StyledPositions = styled.div`
  display: flex;
  flex-direction: column;
`;
