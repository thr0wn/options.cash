import styled from "styled-components";

export const StyledAssetPair = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;
