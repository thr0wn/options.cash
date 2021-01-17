import React from "react";
import { Fade } from "react-awesome-reveal";
import { Table, AssetPair, Button, Text } from "../../../components";
import { TitleText, StyledPositions, StyledTable } from "./Positions.styles";

export const Positions = () => {
  const columns = ["Pair", "Type", "Expires in", "Profit (satoshis)", ""];

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
      "28 hours",
      <Text style={{ color: "green" }}>+5000</Text>,
      <Button>Details</Button>,
    ],
  ];

  return (
    <Fade triggerOnce>
      <StyledPositions>
        <TitleText variant="h5" marked markDirection="right">
          Positions
        </TitleText>
        <StyledTable>
          <Table data={data} columns={columns} />
        </StyledTable>
      </StyledPositions>
    </Fade>
  );
};

export default Positions;
