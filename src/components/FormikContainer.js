import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOption = [
    { key: "Select a Option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option R", value: "optionR" },
    { key: "Option RR", value: "optionRR" },
    { key: "Option RRR", value: "optionRRR" },
    { key: "Option RRRR", value: "optionRRRR" },
  ];

  const checkboxOptions = [
    { key: "checkbox 1", value: "checkbox1" },
    { key: "checkbox 2", value: "checkbox2" },
    { key: "checkbox 3", value: "checkbox3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            label='Email'
            name='email'
            type='email'
          />
          <FormikControl
            control='textarea'
            name='description'
            label='Message'
          />
          <FormikControl
            control='select'
            name='selectOption'
            label='Select A Option'
            options={dropdownOption}
          />
          <FormikControl
            control='radio'
            label='Select A Radio'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Select A Checkbox'
            name='checkboxOption'
            options={checkboxOptions}
          />
          <FormikControl control='date' name='birthDate' label='Pick a date' />
          <button
            type='submit'
            disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
