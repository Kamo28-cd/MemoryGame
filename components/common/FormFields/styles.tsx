import styled from "styled-components";
import { FormControl, RadioGroup } from "@mui/material";

export const StyledRadioGroup = styled(RadioGroup)`
  flex-direction: row;
  padding: 10px;

  span {
    margin-left: 10px;
  }
`;

export const StyledHeading = styled.h4`
  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 16px;
  margin-bottom: 8px;
`;
