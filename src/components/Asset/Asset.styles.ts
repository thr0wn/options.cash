import styled from "styled-components";

export const StyledAsset = styled.div`
  position: relative;
  padding: 8px;
  cursor: pointer;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .MuiBadge-anchorOriginBottomRightRectangle,
  .MuiBadge-anchorOriginBottomLeftRectangle {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .MuiBadge-badge {
    background-color: rgba(44, 50, 64, 0.7);
    cursor: pointer;
  }

  &:hover {
    .MuiBadge-anchorOriginBottomRightRectangle,
    .MuiBadge-anchorOriginBottomLeftRectangle {
      opacity: 1;
    }
  }
`;
