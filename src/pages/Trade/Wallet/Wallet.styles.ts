import styled from "styled-components";
import { Text } from "../../../components";

export const StyledAsssets = styled.div`
  margin: 18px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  & > * {
    margin: 12px 24px;
  }

  @media (max-width: 960px) {
    justify-content: space-between;

    & > * {
      margin: 12px;
    }
  }
`;

export const TitleText = styled(Text)`
  padding: 12px 18px;
  text-align: left;
  line-height: 1;
  display: inline-block;
  align-self: flex-end;
`;

export const StyledWallet = styled.div`
  display: flex;
  flex-direction: column;

  .MuiChip-root {
    background: rgba(44, 50, 64, 0.5);
    color: white;
    margin-top: 18px;
    cursor: pointer;

    .MuiChip-label {
      > * {
        display: flex;
        align-items: center;

        svg {
          margin-left: 8px;
          width: 0.8rem;
        }
      }
    }

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;
