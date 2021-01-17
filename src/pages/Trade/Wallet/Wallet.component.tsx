import React from "react";
import { Fade } from "react-awesome-reveal";
import { Asset } from "../../../components";
import { TitleText, StyledWallet, StyledAsssets } from "./Wallet.styles";

export const Wallet = () => {
  const assets = [
    {
      symbol: "BCH",
      tokenId: "",
      amount: 2.01,
    },
    {
      symbol: "USDt",
      tokenId:
        "9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11",
      amount: 100,
    },
    {
      symbol: "SPICE",
      tokenId:
        "4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf",
      amount: 10.155,
    },
  ];

  return (
    <Fade triggerOnce>
      <StyledWallet>
        <TitleText variant="h5" marked markDirection="right">
          Wallet
        </TitleText>
        <StyledAsssets>
          {assets.map((asset) => (
            <Asset
              symbol={asset.symbol}
              amount={asset.amount}
              tokenId={asset.tokenId}
            />
          ))}
        </StyledAsssets>
      </StyledWallet>
    </Fade>
  );
};

export default Wallet;
