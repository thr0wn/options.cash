import { Grid } from "@material-ui/core";
import React from "react";
import { Blockchain } from "../../components";
// import { Positions } from "./Positions";
import { Wallet } from "./Wallet";
import { Options } from "./Options";
import { StyledContent, StyledTrade } from "./Trade.styles";

export const Trade = () => {
  return (
    <StyledTrade>
      <Blockchain />
      <StyledContent>
        <Grid container spacing={2}>
          <Grid item md={7} xs={12}>
            <Options />
          </Grid>
          <Grid item md={5} xs={12}>
            <Wallet />
            {/* <Positions /> */}
          </Grid>
        </Grid>
      </StyledContent>
    </StyledTrade>
  );
};

export default Trade;
