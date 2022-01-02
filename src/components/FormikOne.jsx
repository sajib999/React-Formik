import { Formik, Form, FastField, ErrorMessage } from "formik";

import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "ishaq",
  email: "",
  textarea: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form Data", values);
  console.log("Submit Form", onSubmitProps);
  onSubmitProps.setSubmitting("false");
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  textarea: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  social: Yup.string().required("Required"),
});

function FormikOne() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ formik }) => {
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
            <div className='form-control'>
              <label htmlFor='textarea'>Message</label>
              <FastField id='textarea' name='textarea' as='textarea' />
              <ErrorMessage name='textarea' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {(props) => {
                  const { meta, field } = props;

                  return (
                    <div>
                      <input type='text' id='address' {...field} />
                      {meta.touched && meta.error ? (
                        <div className='error'>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className='form-control'>
              <label htmlFor='facebook'>Facebook Profile</label>
              <FastField type='text' id='facebook' name='social.facebook' />
              <ErrorMessage name='facebook' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='twitter'>Twitter Profile</label>
              <FastField name='twitter'>
                {(props) => {
                  const { meta, field } = props;

                  return (
                    <div>
                      <input type='text' id='twitter' {...field} />
                      {meta.touched && meta.error ? (
                        <div className='error'>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikOne;
