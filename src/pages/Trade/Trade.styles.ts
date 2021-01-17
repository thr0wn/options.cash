import styled from "styled-components";

export const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 32px;

  @media (max-width: 1440px) {
    overflow-x: hidden;
  }

  @media (max-width: 960px) {
    padding: 16px;
  }
`;

export const StyledTrade = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;

  &:before {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    content: "";
    display: block;
    top: 0px;
    width: 100vw;
    height: 100vh;
  }
`;
