import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// done No-13 form No-17 = 28-Nov-2021

const initialValues = {
  name: "Ishaq",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  return values;
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Format").required("Required"),
  channel: yup.string().required("Required"),
});

function YoutubeFormThree() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage
            name='name'
            render={(error) => <div className='error'>{error}</div>}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage
            name='email'
            render={(error) => <div className='error'>{error}</div>}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage
            name='channel'
            render={(error) => <div className='error'>{error}</div>}
          />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeFormThree;
