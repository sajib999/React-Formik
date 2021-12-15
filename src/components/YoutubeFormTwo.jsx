import { useFormik } from "formik";
import * as yup from "yup";

// done No-11 form No-12 = 27-Nov-2021

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

function YoutubeFormTwo() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            {...formik.getFieldProps("channel")}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeFormTwo;
