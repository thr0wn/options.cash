import { TypographyProps } from "@material-ui/core";
import React from "react";
import { StyledText } from "./Text.styles";

interface TextProps {
  marked?: boolean;
  markDirection?: string;
}

export const Text: React.FC<TypographyProps & TextProps> = ({
  children,
  ...otherProps
}) => {
  return <StyledText {...otherProps}>{children}</StyledText>;
};

export default Text;
