import React, { useEffect } from "react";
import { useFormikContext } from "formik";

const FormObserver: React.FC = () => {
  const { values } = useFormikContext();
  useEffect(() => {
    // console.log("FormObserver:values", values);
  }, [values]);
  return null;
};

export default FormObserver;
