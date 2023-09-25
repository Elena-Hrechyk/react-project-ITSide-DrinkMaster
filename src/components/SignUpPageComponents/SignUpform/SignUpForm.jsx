// import React from 'react';
// import ReactDOM from 'react-dom';
import {
  Formik,
  // useField,
  
  // ErrorMessage
} from 'formik';
// import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  Field,
  ErrorMessage,
  SignUpBTN,
  Form,
  Label,
  DoneMessage,
} from './SignUpForm.styled.js';
import  Icon from './SvgComponents.jsx';
// import { SignUpButton } from '../SignUpButton.jsx';

import { useState } from 'react';
import StyledDatepicker from './StyledDatepicker.jsx';
// import * as authOperation from 'redux/auth/auth-operation';



//початкові значення форміка
const initialValues = {
  name: '',
  email: '',
  password: '',
  // startDate: new Date(),
};

  
 
 

export const SignUpForm = () => {
// const [field, meta] = useField();  

// Show inline feedback if EITHER
// - the input is focused AND value is longer than 2 characters
// - or, the has been visited (touched === true)
const [didFocus, setDidFocus] = useState(false);
const handleFocus = () => setDidFocus(true);
// const handleBlur = () => setDidFocus(false);
// const showFeedback =
//   (!!didFocus && field.value.trim().length > 2)
  // || meta.touched;

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
      {({ errors, touched, values, handleChange }) => (
        <Form>
          {/* <MyTextField name="firstName" type="text" label="First Name"></MyTextField> */}
          <Label style={{ position: 'relative' }}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onFocus={handleFocus}
            ></Field>

            {didFocus && values.name.length > 2 ? (
              errors.name && touched.name ? (
                <Icon.SvgError />
              ) : (
                <Icon.SvgDone />
              )
            ) : (
              ''
            )}
          </Label>

          {!errors.name && touched.name && (
            <DoneMessage>This is an CORRECT name</DoneMessage>
          )}
          <ErrorMessage name="name" component="div" />

          <StyledDatepicker />

          <Label style={{ position: 'relative' }}>
            <Field
              name="email"
              type="text"
              placeholder="Email"
              onFocus={handleFocus}
              value={values.email}
              onChange={handleChange}
            />
            {didFocus && values.email.length > 2 ? (
              !!errors.email && touched.email ? (
                <Icon.SvgError />
              ) : (
                <Icon.SvgDone />
              )
            ) : (
              ''
            )}
          </Label>
          {!errors.email && values.email.length > 2 && (
            <DoneMessage>This is an CORRECT email</DoneMessage>
          )}
          <ErrorMessage name="email" component="div" />
          <Label style={{ position: 'relative' }}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {didFocus && values.password.length > 2 ? (
              !!errors.password && touched.password ? (
                <Icon.SvgError />
              ) : (
                <Icon.SvgDone />
              )
            ) : (
              ''
            )}
          </Label>
          {!errors.password && touched.password && (
            <DoneMessage>This is an CORRECT password</DoneMessage>
          )}
          <ErrorMessage name="password" component="div" />
          <SignUpBTN type="sabmit" >Sign Up</SignUpBTN>
        </Form>
      )}
    </Formik>
  );
};
