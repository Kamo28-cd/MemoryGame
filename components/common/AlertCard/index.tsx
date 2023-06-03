import React, { ReactNode } from "react";
import CardComponet from "../CardComponent";
import { ThemeProvider } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import theme from "@utils/theme/theme";
import { StyledContainer } from "./styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { CircularProgress } from "@mui/material";

interface AlertCardProps {
  messages: string[];
  heading?: string;
  feedback?: string;
  type: "error" | "success" | "warning" | "loading";
  children?: ReactNode;
  className?: string;
}

const AlertCard: React.FC<AlertCardProps> = ({
  messages,
  heading,
  feedback,
  type,
  children,
  className,
}) => {
  return (
    <StyledContainer className={className} $isDisplayed={true}>
      <CardComponet>
        <ThemeProvider theme={theme}>
          {type === "success" ? (
            <CheckCircleOutlineIcon color="success" fontSize="large" />
          ) : type === "error" ? (
            <ErrorOutlineIcon color="error" fontSize="large" />
          ) : type === "warning" ? (
            <WarningAmberIcon color="warning" fontSize="large" />
          ) : type === "loading" ? (
            <CircularProgress size={"2em"} color="inherit" />
          ) : null}
        </ThemeProvider>
        {heading ? <h3>{heading}</h3> : null}
        {feedback ? <p>{feedback}</p> : null}
        <StyledContainer className={"message"} $isDisplayed={true}>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </StyledContainer>

        {children}
      </CardComponet>
    </StyledContainer>
  );
};

export default AlertCard;
