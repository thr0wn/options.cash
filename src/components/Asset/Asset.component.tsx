import React, { useState } from "react";
import { Badge, CircularProgress } from "@material-ui/core";
import Blockies from "react-blockies";
import ReactImageFallback from "react-image-fallback";
import { StyledAsset } from "./Asset.styles";
import { AssetDetails } from "../AssetDetails";

interface AssetProps {
  tokenId?: string;
  symbol?: string;
  amount?: number;
}

export const Asset: React.FC<AssetProps> = ({
  symbol,
  tokenId,
  amount,
  ...otherProps
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <StyledAsset onClick={() => setShowDetails(true)} {...otherProps}>
      <Badge
        badgeContent={symbol}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Badge badgeContent={amount} max={Number.MAX_SAFE_INTEGER}>
          <ReactImageFallback
            src={
              tokenId
                ? `https://tokens.bch.sx/64/${tokenId}.png`
                : "bch-logos/logo-2020/bitcoin-cash-circle.svg"
            }
            initialImage={<CircularProgress />}
            fallbackImage={
              <Blockies
                style={{ borderRadius: "50%" }}
                seed={tokenId}
                size={10}
              />
            }
            alt=""
          />
        </Badge>
      </Badge>
      <AssetDetails
        open={showDetails}
        onClose={() => setShowDetails(false)}
        symbol={symbol}
        tokenId={tokenId}
        amount={amount}
      />
    </StyledAsset>
  );
};

export default Asset;
