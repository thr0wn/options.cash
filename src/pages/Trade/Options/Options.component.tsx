import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Table, AssetPair, Button } from "../../../components";
import { Option } from "../Option";
import { TitleText, StyledOptions, StyledTable } from "./Options.styles";

export const Options = () => {
  const [selectedOption, setSelectedOption] = useState<any>();

  const columns = [
    "Pair",
    "Type",
    "Token amount",
    "Strike Price (sat)",
    "Premium (sat)",
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
      "10000",
      "30.5 hours",
      (index) => {
        return <Button onClick={() => onRowClick(index)}>Trade</Button>;
      },
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
      "9000",
      "72 hours",
      (index) => {
        return <Button onClick={() => onRowClick(index)}>Trade</Button>;
      },
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
      "8000",
      "3 hours",
      (index) => {
        return <Button onClick={() => onRowClick(index)}>Trade</Button>;
      },
    ],
  ];

  const onRowClick = (index) => {
    const option = data[index];
    setSelectedOption(option);
  };

  return (
    <Fade triggerOnce>
      <StyledOptions>
        <TitleText variant="h5" marked>
          Options
        </TitleText>
        <StyledTable>
          <Button>+ Write Option</Button>
          <Table data={data} columns={columns} />
        </StyledTable>
        <Option
          open={!!selectedOption}
          option={selectedOption}
          onClose={() => setSelectedOption(null)}
        />
      </StyledOptions>
    </Fade>
  );
};

export default Options;
