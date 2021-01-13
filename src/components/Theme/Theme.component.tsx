import React from "react";
import { StylesProvider } from "@material-ui/core/styles";

export const Theme: React.FC<{}> = ({ children, ...otherProps }) => {
  return <StylesProvider {...otherProps}>{children}</StylesProvider>;
};

export default Theme;
