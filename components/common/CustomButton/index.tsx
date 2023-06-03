import React from "react";
import { ButtonProps } from "@mui/material";
import { StyledButton, StyledButtonProps } from "./styles";

const CustomButton: React.FC<ButtonProps & StyledButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledButton disableRipple {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
