import React, { useState } from "react";
import BigNumber from "bignumber.js";
import {
  AppBar,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  Chip,
  TextField,
  Snackbar,
} from "@material-ui/core";
import QRCode from "qrcode.react";
import CloseIcon from "@material-ui/icons/Close";
import Blockies from "react-blockies";
import ReactImageFallback from "react-image-fallback";
import BITBOX from "slp-sdk";
import * as slpjs from "slp-sdk/node_modules/slpjs";
import { Button } from "..";
import {
  StyledAssetDetails,
  StyledContent,
  GlobalStyles,
  StyledTabContent,
} from "./AssetDetails.styles";
import { useWallet } from "../../utils/Wallet";

const bitbox = new BITBOX();
const bitboxNetwork = new slpjs.BitboxNetwork(bitbox);

interface AssetDetailsProps {
  open: boolean;
  tokenId?: string;
  symbol?: string;
  amount?: number;
  onClose: () => void;
}

export const AssetDetails: React.FC<AssetDetailsProps> = ({
  symbol,
  tokenId,
  amount,
  open,
  onClose = () => null,
}) => {
  const [tab, setTab] = useState<string>("send");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<string | number>("");
  const [inputAddress, setInputAddress] = useState<string>("");
  const wallet = useWallet();

  const handleOnClose = (evt) => {
    evt.stopPropagation();
    onClose();
  };

  const onSend = () => {
    if (tokenId) {
      return sendToken(tokenId);
    }
    return sendBch();
  };

  const sendBch = async () => {
    setLoading(true);
    try {
      await bitboxNetwork.simpleBchSend(
        [new BigNumber(inputAmount).times(10 ** 8)] as any,
        ((await bitboxNetwork.getAllSlpBalancesAndUtxos(
          wallet.Address
        )) as any).nonSlpUtxos.map((utxo) => ({
          ...utxo,
          wif: wallet.PrivateKey,
        })),
        inputAddress,
        wallet.Address
      );
      wallet.updateParent();
      onClose();
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 6000);
    }
    setLoading(false);
  };

  const sendToken = async (tokenId: string) => {
    setLoading(true);
    try {
      await bitbox.TokenType1.send({
        fundingAddress: wallet.SLPAddress,
        fundingWif: wallet.PrivateKey,
        tokenReceiverAddress: inputAddress,
        bchChangeReceiverAddress: wallet.Address,
        tokenId: tokenId,
        amount: inputAmount,
      });
      wallet.updateParent();
      onClose();
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 6000);
    }
    setLoading(false);
  };

  return (
    <StyledAssetDetails>
      <GlobalStyles />
      <Dialog open={open} onClose={handleOnClose} maxWidth="xl">
        <IconButton onClick={handleOnClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle>
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
          />{" "}
          {symbol}
        </DialogTitle>
        <DialogContent>
          <StyledContent>
            <Paper>
              <AppBar position="static">
                <Tabs
                  variant="fullWidth"
                  value={tab}
                  onChange={(evt, newValue) => setTab(newValue)}
                >
                  <Tab label="Send" value="send" />
                  <Tab label="Receive" value="receive" />
                </Tabs>
              </AppBar>
              {tab === "send" && (
                <StyledTabContent>
                  <TextField
                    label="Amount"
                    value={inputAmount}
                    onChange={(evt) => setInputAmount(evt.target.value)}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => setInputAmount(amount as number)}
                          style={{ cursor: "pointer" }}
                        >
                          MAX
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    label="Address"
                    value={inputAddress}
                    onChange={(evt) => setInputAddress(evt.target.value)}
                    fullWidth
                    variant="outlined"
                  />
                </StyledTabContent>
              )}
              {tab === "receive" && (
                <StyledTabContent>
                  <Chip
                    icon={
                      <img
                        width="16px"
                        src={
                          tokenId
                            ? "slp-logo.svg"
                            : "bch-logos/logo-2020/bitcoin-cash-circle.svg"
                        }
                        alt="SLP"
                      />
                    }
                    label={tokenId ? wallet?.SLPAddress : wallet?.Address}
                  />
                  <QRCode
                    value={tokenId ? wallet?.SLPAddress : wallet?.Address}
                  />
                </StyledTabContent>
              )}
            </Paper>
          </StyledContent>
        </DialogContent>
        <DialogActions>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={!!error}
            message={error}
            autoHideDuration={6000}
          />
          <Button onClick={handleOnClose} textOnly>
            Close
          </Button>
          {tab === "send" && (
            <Button disabled={!inputAmount || !inputAddress} onClick={onSend}>
              {loading ? <CircularProgress size="1rem" /> : "Send"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </StyledAssetDetails>
  );
};

export default AssetDetails;
