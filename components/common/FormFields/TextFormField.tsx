import React from "react";
import { FieldProps, getIn } from "formik";
import { TextField } from "@mui/material";

export const TextFormField: React.FC<
  FieldProps & { disabled?: boolean; hideField?: boolean }
> = ({ field, form, disabled, hideField, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      margin="normal"
      disabled={disabled}
      sx={{ display: hideField ? "none" : "" }}
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};
