import React from "react";
import { Tooltip } from "@material-ui/core";
import { StyledAssetPair } from "./AssetPair.styles";

interface AssetPairProps {
  assets: Array<{ symbol: string; tokenId: string }>;
}

export const AssetPair: React.FC<AssetPairProps> = ({
  assets = [],
  ...otherProps 
}) => {
  return (
    <StyledAssetPair {...otherProps}>
      {assets.map((asset) => (
        <Tooltip title={asset.symbol}>
          {!asset.tokenId ? (
            <img
              src="bch-logos/logo-2020/bitcoin-cash-circle.svg"
              alt={asset.symbol}
            />
          ) : (
            <img
              src={`https://tokens.bch.sx/64/${asset.tokenId}.png`}
              alt={asset.symbol}
            />
          )}
        </Tooltip>
      ))}
    </StyledAssetPair>
  );
};

export default AssetPair;
