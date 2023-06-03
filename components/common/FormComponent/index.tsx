import React, { ReactNode } from "react";
import { Field, Form, Formik } from "formik";
import { UserFormParams } from "@utils/types/FormFields";
import FormObserver from "./FormObserver";
import CustomRadio from "../FormFields/CustomRadio";

const FormComponent: React.FC<UserFormParams> = ({ formFields }) => (
  <>
    {/* <FormObserver /> */}
    {formFields.map((fields, index): ReactNode => {
      return (
        <div key={index}>
          {fields.component === CustomRadio ? (
            <CustomRadio
              key={index}
              name={fields.name}
              type="radio "
              options={fields.options}
              label={fields.label}
            />
          ) : (
            <Field
              key={index}
              label={fields.label}
              name={fields.name}
              component={fields.component}
              options={fields.options ? fields.options : ""}
            />
          )}
        </div>
      );
    })}
  </>
);

export default FormComponent;
