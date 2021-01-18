import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import { StyledBlockchain } from "./Blockchain.styles";
import { Shader } from "..";

interface BlockchainProps {
  useWebgl?: boolean;
  useShader?: boolean;
}

const hasWebgl2Support = () => {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch (error) {
    return false;
  }
};

export const Blockchain: React.FC<BlockchainProps> = ({
  useWebgl = true,
  useShader = false,
}) => {
  const blockchainRoot = document.getElementById("blockchain-root");

  if (!useWebgl) {
    return ReactDOM.createPortal(
      <StyledBlockchain>
        <video autoPlay muted loop>
          <source src="long-background.mp4" type="video/mp4" />
        </video>
      </StyledBlockchain>,
      blockchainRoot as HTMLElement
    );
  }

  const supportWebgl2 = hasWebgl2Support();

  return (
    blockchainRoot &&
    ReactDOM.createPortal(
      <StyledBlockchain>
        {supportWebgl2 && useShader ? (
          <Shader />
        ) : (
          <Particles
            params={{
              particles: {
                number: {
                  value: 120,
                },
                opacity: {
                  value: 1,
                },
              },
            }}
          />
        )}
      </StyledBlockchain>,
      blockchainRoot
    )
  );
};

export default Blockchain;
