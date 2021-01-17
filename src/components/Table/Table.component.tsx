import React from "react";
import MUIDataTable from "mui-datatables";
import { StyledTable } from "./Table.styles";

export const Table: React.FC<any> = ({
  children,
  options = {},
  ...otherProps
}) => {
  return (
    <StyledTable>
      <MUIDataTable
        options={{
          ...options,
          download: false,
          filter: false,
          filterArrayFullMatch: false,
          print: false,
          viewColumns: false,
          selectableRowsHeader: false,
          selectableRows: false,
          rowsPerPage: 50,
          rowsPerPageOptions: [10, 50, 100],
        }}
        {...otherProps}
      />
    </StyledTable>
  );
};

export default Table;
