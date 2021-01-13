import styled from "styled-components";

export const StyledBlockchain = styled.div`
  position: absolute;
  animation: fadeInFromNone 1s ease-out;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  #tsparticles {
    position: absolute;
    width: 50vw;
    height: 100vh;
    left: 50vw;
    overflow: hidden;
  }

  @keyframes fadeInFromNone {
    0% {
      opacity: 0;
    }

    1% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
