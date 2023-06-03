import React from "react";
import { TextField } from "@mui/material";
import { FieldProps, getIn, useFormik } from "formik";
import { minHeight } from "@mui/system";

const NumberFormField: React.FC<FieldProps & { min: string; max: string }> = ({
  field,
  form,
  min,
  max,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        max: { max },
        min: { min },
      }}
      {...field}
      {...props}
    />
  );
};

export default NumberFormField;
