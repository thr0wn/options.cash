import { Box, Chip, Tooltip } from "@material-ui/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Asset } from "../../../components";
import { useWallet } from "../../../utils/Wallet";
import { TitleText, StyledWallet, StyledAsssets } from "./Wallet.styles";

export const Wallet = () => {
  const wallet = useWallet();

  return (
    <Fade triggerOnce>
      <StyledWallet>
        <TitleText variant="h5" marked markDirection="right">
          Wallet
        </TitleText>
        <Box display="flex" justifyContent="flex-end">
          <Tooltip title={<QRCode value={wallet?.Address} />}>
            <Chip
              icon={
                <img
                  width="24px"
                  src="bch-logos/logo-2020/bitcoin-cash-circle.svg"
                  alt="BCH"
                />
              }
              label={
                <CopyToClipboard
                  text={wallet?.Address}
                  options={{ message: "copied!" }}
                >
                  <span>
                    BCH Address <FileCopyIcon />
                  </span>
                </CopyToClipboard>
              }
            />
          </Tooltip>
          <Tooltip title={<QRCode value={wallet?.SLPAddress} />}>
            <Chip
              icon={<img width="16px" src="slp-logo.svg" alt="SLP" />}
              label={
                <CopyToClipboard text={wallet?.SLPAddress}>
                  <span>
                    SLP Address <FileCopyIcon />
                  </span>
                </CopyToClipboard>
              }
            />
          </Tooltip>
        </Box>
        <StyledAsssets>
          <Asset symbol="BCH" amount={wallet.GetBchBalance().toFixed()} />
          {Array.from(wallet.GetSlpBalances() || []).map(([tokenId, token]) => (
            <Asset
              symbol={token.name}
              amount={token.amountWithDecimals?.toFixed()}
              tokenId={tokenId}
            />
          ))}
        </StyledAsssets>
      </StyledWallet>
    </Fade>
  );
};

export default Wallet;
