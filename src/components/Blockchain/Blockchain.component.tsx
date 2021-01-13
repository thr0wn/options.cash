import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import { StyledBlockchain } from "./Blockchain.styles";
import { Shader } from "..";

const hasWebgl2Support = () => {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch (error) {
    return false;
  }
};

export const Blockchain = () => {
  const supportWebgl2 = hasWebgl2Support();
  const blockchainRoot = document.getElementById("blockchain-root");

  return (
    blockchainRoot &&
    ReactDOM.createPortal(
      <StyledBlockchain>
        {supportWebgl2 ? (
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
