import React from "react";
import { StyledLogo } from "./Logo.styles";

interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = ({ ...otherProps }) => {
  return <StyledLogo {...otherProps} />;
};

export default Logo;
