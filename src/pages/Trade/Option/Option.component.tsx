import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Table, Button } from "../../../components";
import { StyledOption, StyledTable, GlobalStyles } from "./Option.styles";

interface OptionProps {
  option?: any;
  open: boolean;
  isPosition?: boolean;
  columns: Array<any>;
  onClose: () => void;
}

export const Option: React.FC<OptionProps> = ({
  columns,
  option,
  open,
  isPosition = false,
  onClose,
}) => {
  const data = [option];

  return (
    <StyledOption>
      <GlobalStyles />
      <Dialog open={option && open} onClose={onClose} maxWidth="xl">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle>
          {isPosition ? "Position details" : "Option details"}
        </DialogTitle>
        <DialogContent>
          <StyledTable>
            <Table
              data={data}
              columns={columns.filter((column) => !!column)}
              options={{ search: false, pagination: false, sort: false }}
            />
          </StyledTable>
        </DialogContent>
        {!isPosition ? (
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button disabled color="primary">
              Accept
            </Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Button disabled color="primary">
              Execute
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </StyledOption>
  );
};

export default Option;
