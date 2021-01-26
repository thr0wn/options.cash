import styled from "styled-components";

export const StyledBlockchain = styled.div`
  position: fixed;
  animation: fadeInFromNone 1s ease-out;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    border: none;
    outline: none;
    overflow: hidden;
    transform: scaleY(1.1);
  }

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
