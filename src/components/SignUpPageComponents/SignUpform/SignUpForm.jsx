import { Formik, ErrorMessage } from 'formik';
// import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  Field,

 
  Form,
  
} from './SignUpForm.styled.js';



import { SignUpButton } from '../SignUpButton.jsx';
import ReactDatePicker from 'react-datepicker';
// import * as authOperation from 'redux/auth/auth-operation';
//початкові значення форміка
const initialValues = { name: '', email: '', password: '',  startDate: new Date(),};

export const SignUpForm = () => {
  //виклик диспечера
  // const dispatch = useDispatch();
  //отримання даних з редакс

  //додавання контакту при сабміті
  const handleSabmit = (values, { resetForm }) => {
    console.log('values', values);
    // виклик диспечера для відправки даних в редакс
    const reg = JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    });
    console.log('reg', reg);

    // dispatch(
    //   authOperation.register({
    //     name: values.name.trim(),
    //     email: values.email.trim(),
    //     password: values.password.trim(),
    //   })
    // );

    resetForm();
  };
  //схема валідації
  const schema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().min(4),
    password: yup.string().required().min(4),
    
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
      displayName="MyForm"
    >
      <Form>
        <Field name="name" type="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />

        <Field name="startDate" placeholder="startDate">
          {({ field, form }) => (
            <ReactDatePicker
              {...field}
              selected={field.value}
              onChange={(date) => form.setFieldValue('startDate', date)}
              // showIcon
            />
          )}
        </Field>

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <SignUpButton type="sabmit"></SignUpButton>
      </Form>
    </Formik>
  );
};
