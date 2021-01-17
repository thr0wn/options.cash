import styled from "styled-components";
import { Text } from "../../../components";

export const SecondaryText = styled(Text)`
  margin: 30px 0 !important;
  text-align: right;
`;

export const MarkedText = styled(Text)`
  position: relative;
  padding: 12px 18px;
  text-align: right;
`;

export const StyledPresentation = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  max-width: 450px;
  padding-left: 128px;

  a {
    text-decoration: none;
  }

  img {
    margin-left: 12px;
    position: absolute;
    width: 80px;
    top: 0;
    right: -100px;
  }

  @media (max-width: 960px) {
    padding: 0 16px;

    img {
      position: absolute;
      width: 80px;
      top: -150%;
      right: 0;
    }
  }
`;
