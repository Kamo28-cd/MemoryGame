import React from "react";
import { FieldProps, getIn } from "formik";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { ISelectField } from "@utils/types/FormFields";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { StyledFormControl } from "./styles";

const SelectFormField: React.FC<
  FieldProps & {
    label?: string;
    options: ISelectField;
    isLoading: boolean;
    hideField: boolean;
  }
> = ({ field, form, label, options, isLoading, hideField, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <StyledFormControl
      sx={{ display: hideField ? "none" : "" }}
      fullWidth
      error={!!errorText}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select fullWidth {...field} {...props}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          options.map((option) => (
            <MenuItem
              key={option.id ? option.id : option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))
        )}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </StyledFormControl>
  );
};

export default SelectFormField;
