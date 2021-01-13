import { MenuList, MenuItem } from "@material-ui/core";
import React from "react";
import { StyledMenu } from "./Menu.styles";

export const Menu: React.FC<{}> = ({ children, ...otherProps }) => {
  return (
    <StyledMenu {...otherProps}>
      <MenuList>
        <MenuItem>Trade</MenuItem>
        <MenuItem>Wallet</MenuItem>
      </MenuList>
    </StyledMenu>
  );
};

export default Menu;
