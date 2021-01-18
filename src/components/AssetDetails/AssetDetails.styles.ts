import styled, { createGlobalStyle } from "styled-components";

export const StyledTabContent = styled.div`
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiFormControl-root {
    &:not(:first-child) {
      margin-top: 16px !important;
    }

    .MuiOutlinedInput-notchedOutline,
    .MuiOutlinedInput-notchedOutline:hover {
      border-color: white !important;
    }
    * {
      color: white !important;
    }
  }

  .MuiChip-root {
    background: rgba(44, 50, 64, 0.5);
    color: white;
    cursor: pointer;

    .MuiChip-label {
      > * {
        display: flex;
        align-items: center;

        svg {
          margin-left: 8px;
          width: 0.8rem;
        }
      }
    }
  }
`;

export const StyledContent = styled.div`
  .MuiPaper-root {
    background: rgba(44, 50, 64, 0.3);
  }
  .MuiTab-root {
    color: white;
  }
  .MuiTabs-indicator {
    background: #0ac18e;
  }
`;

export const GlobalStyles = createGlobalStyle`
  .MuiDialog-paper {
    background: rgba(44, 50, 64, 1) !important;
    padding: 18px 0;

    > .MuiButtonBase-root {
      position: absolute;
      color: white;
      right: 24px;
      padding: 0;
    }
  }

  .MuiDialogTitle-root {
    color: white;
    padding-top: 8px !important;

    img, canvas {
      width: 32px !important;
      height: 32px !important;
      border-radius: 50%;
    }

    .MuiTypography-root  {
      display: flex;
      align-items: center;

      > :first-child {
        margin-right : 8px;
      }
    }
  }

  .MuiDialogContent-root {
    padding-top: 0 !important;

    > * {
      margin-top: 0 !important;
    }
  }

  .MuiDialogActions-root {
    padding: 16px 24px 8px !important;
  }
`;

export const StyledAssetDetails = styled.div`
  position: relative;
  background: black;
`;
