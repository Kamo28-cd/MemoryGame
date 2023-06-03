import React, { useState } from "react";
import { FormControl, FormControlLabel, Radio } from "@mui/material";
import { StyledRadioGroup } from "./styles";

interface RadioFormFieldProps {
  label: string;
  name: string;
  defaultValue?: string;
  options: Array<string>;
}

const RadioFormField: React.FC<RadioFormFieldProps> = ({
  label,
  name,
  defaultValue,
  options,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl className="radio">
      <h4>{label}</h4>
      <StyledRadioGroup name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option.toLowerCase()}
            control={<Radio />}
            label={option}
          />
        ))}
      </StyledRadioGroup>
    </FormControl>
  );
};

export default RadioFormField;
