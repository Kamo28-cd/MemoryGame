import styled, { css } from "styled-components";
import { Button } from "@mui/material";
import { ButtonProps as MaterialButtonProps } from "@mui/material";
import {
  ButtonColours,
  IButtonColours,
  colours,
  IButtonWidth,
  IButtonSize,
} from "@utils/theme/colours";

type ButtonType = "primary" | "secondary";

export interface StyledButtonProps {
  $buttonSize?: IButtonSize;
  $buttonWidth?: IButtonWidth;
  $colour?: IButtonColours;
  $buttonType: ButtonType;
}

export const StyledButton = styled(Button)<
  StyledButtonProps & MaterialButtonProps
>(({ $buttonWidth, $buttonSize, $colour, $buttonType }) => {
  const isSizeSmall = $buttonSize === "small";
  const isWidthFull = $buttonWidth === "full";

  return css`
    && {
      width: ${isWidthFull ? "100%" : "auto"};
      background: ${$buttonType === "primary"
        ? colours[ButtonColours.primaryColour]
        : colours[ButtonColours.secondaryColour]};
      color: ${$buttonType === "primary"
        ? colours[ButtonColours.white]
        : colours[ButtonColours.black]};
      letter-spacing: 0.4px;
      font-size: ${isSizeSmall ? "12px" : "auto"};
      text-transform: capitalize;
      border-radius: 1.25rem;
      padding: 0.5rem 1.25rem;
      margin: 0.5rem;
    }
  `;
});
