import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Table, Button } from "../../../components";
import { StyledOption, StyledTable, GlobalStyles } from "./Option.styles";

interface OptionProps {
  option?: any;
  open: boolean;
  onClose: () => void;
}

export const Option: React.FC<OptionProps> = ({ option, open, onClose }) => {
  const columns = [
    "Pair",
    "Type",
    "Token amount",
    "Strike Price (satoshis)",
    "Premium (satoshis)",
    "Expires in",
  ];

  const data = [option];

  return (
    <StyledOption>
      <GlobalStyles />
      <Dialog open={option && open} onClose={onClose} maxWidth="xl">
        <DialogTitle>Option details</DialogTitle>
        <DialogContent>
          <StyledTable>
            <Table
              data={data}
              columns={columns}
              options={{ search: false, pagination: false, sort: false }}
            />
          </StyledTable>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">Accept</Button>
        </DialogActions>
      </Dialog>
    </StyledOption>
  );
};

export default Option;
