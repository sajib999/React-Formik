import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

// initialValues

const initialValues = {
  name: "ishaq",
  phoneNumbers: ["", ""],
};

const onSubmit = (values) => {
  onselect.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
});

// function

function PhoneNumber() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(formik) => {
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary Phone Number</label>
              <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>
            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary Phone Number</label>
              <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhoneNumber;
