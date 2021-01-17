import styled from "styled-components";
import { Text } from "../../../components";

export const TitleText = styled(Text)`
  display: inline-block;
  padding: 12px 18px;
  align-self: flex-end;
`;

export const StyledHowItWorks = styled.div`
  position: relative;
  max-width: 100%;
  height: 100vh;
  padding: 32px 128px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(44, 50, 64, 1) 0%,
      rgba(0, 0, 0, 1) 50%
    );
    content: "";
    display: block;
    top: 0px;
    width: 100vw;
    height: 100vh;
  }

  #tsparticles {
    position: absolute;
    opacity: 1;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .youtube {
    margin-top: 32px;
    height: 80vh;
    width: calc(100vw - 256px);
    max-width: calc(1440px - 256px);
    position: relative;
    z-index: 2;
  }

  @media (max-width: 960px) {
    padding: 16px;

    .youtube {
      width: calc(100vw - 16px);
    }
  }
`;
