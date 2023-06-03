import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
} from "@material-ui/core";
import { FieldAttributes, useField } from "formik";
import { StyledRadioGroup } from "./styles";

type CustomRadioProps = {
  label: string;
  options?:
    | Array<string | number>
    | {
        label: string;
        value: string;
      }[];
} & FieldAttributes<{}>;

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  options,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FormControl className="radio">
      <h4>{label}</h4>
      <StyledRadioGroup name={field.name} id={props.name} value={field.value}>
        {options &&
          options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Radio />}
              label={option}
              {...field}
              value={option.toString().toUpperCase().replace(/\s/g, "")}
              name={props.name}
              onChange={field.onChange}
              checked={
                field.value ===
                option.toString().toUpperCase().replace(/\s/g, "")
              }
            />
          ))}
      </StyledRadioGroup>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default CustomRadio;
