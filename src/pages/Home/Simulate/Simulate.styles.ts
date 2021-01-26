import styled from "styled-components";
import { Text } from "../../../components";

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 24px;
  z-index: 3;
`;

export const TitleText = styled(Text)`
  display: inline-block;
  padding: 12px 18px;
  align-self: flex-start;
`;

export const StyledSimulate = styled.div`
  position: relative;
  max-width: 100%;
  height: 100vh;
  padding: 32px 128px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    position: absolute;
    background: rgba(44, 50, 64, 0.5);
    content: "";
    display: block;
    top: 0px;
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 960px) {
    padding: 16px;

    .youtube {
      width: calc(100vw - 16px);
    }
  }
`;
