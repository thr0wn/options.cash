import React from "react";
import { Badge, Tooltip } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Forward";
import GetAppIcon from "@material-ui/icons/GetApp";
import { StyledAsset } from "./Asset.styles";

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
  return (
    <StyledAsset {...otherProps}>
      <Badge
        badgeContent={
          <Tooltip title="receive">
            <GetAppIcon style={{ fontSize: 12 }} />
          </Tooltip>
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Badge
          badgeContent={
            <Tooltip title="send">
              <SendIcon style={{ fontSize: 12 }} />
            </Tooltip>
          }
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Badge
            badgeContent={symbol}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Badge badgeContent={amount} max={Number.MAX_SAFE_INTEGER}>
              {!tokenId ? (
                <img
                  src="bch-logos/logo-2020/bitcoin-cash-circle.svg"
                  alt={symbol}
                />
              ) : (
                <img
                  src={`https://tokens.bch.sx/64/${tokenId}.png`}
                  alt={symbol}
                />
              )}
            </Badge>
          </Badge>
        </Badge>
      </Badge>
    </StyledAsset>
  );
};

export default Asset;
