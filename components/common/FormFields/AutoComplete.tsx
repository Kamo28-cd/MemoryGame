import { FieldProps, getIn } from "formik";
import React from "react";
import { ISelectField } from "../../../utils/types/FormFields";
import { StyledFormControl } from "./styles";
import {
  Autocomplete,
  Box,
  CircularProgress,
  FormHelperText,
  TextField,
} from "@mui/material";

const AutoComplete: React.FC<
  FieldProps & {
    label?: string;
    options: ISelectField;
    isLoading: boolean;
    onOpenProp: () => void;
    onCloseProp: () => void;
    onSelect?: (val: string) => void;
    onNewSelection?: () => void;
    onClear?: () => void;
    // inputValue?: any;
  }
> = ({
  field,
  form,
  label,
  options,
  isLoading,
  onOpenProp,
  onCloseProp,
  onSelect,
  onNewSelection,
  onClear,
  // inputValue,
  ...props
}) => {
    const errorText =
      getIn(form.touched, field.name) && getIn(form.errors, field.name);
    return (
      <StyledFormControl fullWidth error={!!errorText}>
        <Autocomplete
          disablePortal
          options={options}
          loading={isLoading}
          onOpen={onOpenProp}
          onClose={onCloseProp}
          clearOnBlur={false}
          // key={inputValue}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, newValue, reason) => {
            form.setFieldValue(field.name, newValue?.value);
            onSelect && onSelect(newValue?.value ? newValue?.value : "");
            onNewSelection && onNewSelection();

            if (reason == "clear") {
              onClear && onClear();
            }
          }}
          renderOption={(props, option) => {
            return (
              <Box component={"li"} {...props} key={option.id}>
                {option.label}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        <FormHelperText>{errorText}</FormHelperText>
      </StyledFormControl>
    );
  };

export default AutoComplete;
