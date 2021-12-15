import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";
import TextError from "./TextError";

// done No-26 form No-26 = 30-Nov-2021

const initialValues = {
  name: "Ishaq",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Format").required("Required"),
  channel: yup.string().required("Required"),
  comments: yup.string().required("Required"),
  address: yup.string().required("Required"),
});

function YoutubeFormSeven() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => {
        console.log("Formik Props", formik);
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <FastField type='text' id='name' name='name' />
              <ErrorMessage name='name' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <FastField type='email' id='email' name='email' />
              <ErrorMessage name='email' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <FastField type='text' id='channel' name='channel' />
              <ErrorMessage name='channel' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <FastField as='textarea' id='comments' name='comments' />
              <ErrorMessage name='comments' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {(props) => {
                  console.log("Render Props", props);
                  const { field, form, meta } = props;
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
            {/* social */}
            <div className='form-control'>
              <label htmlFor='facebook'>Facebook Profile</label>
              <FastField type='text' id='facebook' name='social.facebook' />
            </div>
            <div className='form-control'>
              <label htmlFor='twitter'>Twitter Profile</label>
              <FastField type='text' id='twitter' name='social.twitter' />
            </div>
            {/* Phone Number */}
            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary Phone Number</label>
              <FastField type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>
            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary Phone Number</label>
              <FastField type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>
            {/* List of Phone Number */}
            <div className='form-control'>
              <label htmlFor='list'>List Of Phone Numbers</label>
              <FieldArray name='phNumbers'>
                {(fieldArrayProps) => {
                  console.log("fieldArrayProps", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type='button' onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button onClick={() => formik.validateField("comments")}>
              Validate Comments
            </button>
            <button onClick={() => formik.validateForm()}>Validate All</button>
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeFormSeven;
