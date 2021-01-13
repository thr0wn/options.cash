import React from "react";
import { Fade } from "react-awesome-reveal";
import { TitleText, StyledWallet } from "./Wallet.styles";

export const Wallet = () => {
  return (
    <Fade triggerOnce>
      <StyledWallet>
        <TitleText variant="h4" marked markDirection="right">
          Wallet
        </TitleText>
      </StyledWallet>
    </Fade>
  );
};

export default Wallet;
