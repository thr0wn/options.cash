import { ButtonProps } from "@material-ui/core";
import React from "react";
import { StyledButton } from "./Button.styles";

export const Button: React.FC<ButtonProps & { textOnly?: boolean }> = ({
  children,
  ...otherProps
}) => {
  return (
    <StyledButton variant="outlined" {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
