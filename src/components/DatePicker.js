import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
  const { name, label, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { value } = field;
          const { setFieldValue } = form;

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
