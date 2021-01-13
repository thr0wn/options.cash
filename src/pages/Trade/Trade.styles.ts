import styled from "styled-components";

export const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 32px 64px;

  @media (max-width: 1440px) {
    overflow-x: hidden;
  }
`;

export const StyledTrade = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
`;
