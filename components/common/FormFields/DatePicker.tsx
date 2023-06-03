import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { FieldAttributes, FieldProps, useField } from "formik";
import dayjs from "dayjs";

const DatePicker: React.FC<
  { label: string } & FieldProps & FieldAttributes<{}>
> = ({ form, label, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const date = new Date();
  const dateValue = dayjs(props.field.value).isValid()
    ? dayjs(props.field.value)
    : dayjs(date);
  return (
    <>
      <h4>{label}</h4>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          inputFormat="DD/MM/YYYY"
          {...field}
          value={dateValue}
          label={label}
          onChange={(value) =>
            form.setFieldValue(props.field.name, dayjs(value), true)
          }
          renderInput={(params) => (
            <TextField
              fullWidth
              margin="normal"
              type="date"
              name={props.field.name}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
