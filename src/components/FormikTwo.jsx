import * as Yup from "yup";
import { Formik, Form, ErrorMessage, FastField } from "formik";
import TextError from "./TextError";

// initialValues

const initialValues = {
  name: "sajib",
  email: "",
};

const onSubmit = (values) => {
  console.log("Form Submit", JSON.parse(JSON.stringify(values)));
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
});

// function

function FormikTwo() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ formik }) => {
        console.log("Formik Props", formik);
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <FastField id='name' name='name' type='text' />
              <ErrorMessage name='name' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <FastField id='email' name='email' type='email' />
              <ErrorMessage name='email' component={TextError} />
            </div>
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikTwo;
