import React from "react";
import { Fade } from "react-awesome-reveal";
import { Table, AssetPair, Button } from "../../../components";
import { TitleText, StyledOptions, StyledTable } from "./Options.styles";

export const Options = () => {
  const columns = [
    "Pair",
    "Type",
    "Token amount",
    "Strike Price (satoshis)",
    "Expires in",
    "",
  ];

  const data = [
    [
      <AssetPair
        assets={[
          {
            symbol: "USDt",
            tokenId:
              "9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11",
          },
          {
            symbol: "BCH",
            tokenId: "",
          },
        ]}
      />,
      "Call",
      "50",
      "206750",
      "30.5 hours",
      <Button>Trade</Button>,
    ],
    [
      <AssetPair
        assets={[
          {
            symbol: "USDt",
            tokenId:
              "9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11",
          },
          {
            symbol: "BCH",
            tokenId: "",
          },
        ]}
      />,
      "Call",
      "10",
      "207000",
      "72 hours",
      <Button>Trade</Button>,
    ],
    [
      <AssetPair
        assets={[
          {
            symbol: "SPICE",
            tokenId:
              "4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf",
          },
          {
            symbol: "BCH",
            tokenId: "",
          },
        ]}
      />,
      "Put",
      "1000",
      "267",
      "3 hours",
      <Button>Trade</Button>,
    ],
  ];

  return (
    <Fade triggerOnce>
      <StyledOptions>
        <TitleText variant="h5" marked>
          Trade
        </TitleText>
        <StyledTable>
          <Table data={data} columns={columns} />
        </StyledTable>
      </StyledOptions>
    </Fade>
  );
};

export default Options;
