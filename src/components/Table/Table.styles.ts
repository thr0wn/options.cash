import styled from "styled-components";

export const StyledTable = styled.div`
  .MuiPaper-rounded {
    border-radius: 0;
  }

  .MuiPaper-root {
    background: rgba(44, 50, 64, 0.3);
  }

  .MuiTableCell-head {
    background: transparent;
    * {
      color: white !important;
    }
  }

  .MuiTableCell-root {
    transition: background 0.3s ease;
    border-bottom: 1px solid rgba(44, 50, 64, 0.7);
  }

  *,
  .MuiInputBase-input {
    color: white;
  }

  .Mui-disabled {
    opacity: 0.5;
  }

  .MuiInput-underline::before {
    border-bottom: 1px solid white;
  }

  .MuiInput-underline::after {
    border-bottom: 1px solid white;
  }

  .MuiTableBody-root {
    .MuiTableRow-root {
      &:hover {
        .MuiTableCell-root {
          background: rgba(44, 50, 64, 0.5);
        }
      }
    }
  }
`;
