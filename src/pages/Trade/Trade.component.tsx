import { Grid } from "@material-ui/core";
import React from "react";
import { Blockchain } from "../../components";
import { Wallet } from "./Wallet";
import { StyledContent, StyledTrade } from "./Trade.styles";

export const Trade = () => {
  return (
    <StyledTrade>
      <Blockchain />
      <StyledContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            1
          </Grid>
          <Grid item xs={6}>
            <Wallet />
          </Grid>
        </Grid>
      </StyledContent>
    </StyledTrade>
  );
};

export default Trade;
