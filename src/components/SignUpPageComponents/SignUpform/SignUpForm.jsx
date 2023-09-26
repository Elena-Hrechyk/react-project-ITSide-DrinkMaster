import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../redux/auth/authOperations.js';
// import { selectIsLogin } from '../../../redux/auth/authSlise.js';
import { Formik } from 'formik';
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
import Icon from './SvgComponents.jsx';
import { useState } from 'react';
import StyledDatepicker from './StyledDatepicker.jsx';
import { FiEye, FiEyeOff } from 'react-icons/fi';

// import * as authOperation from 'redux/auth/auth-operation';

//початкові значення форміка
const initialValues = {
  name: '',
  email: '',
  password: '',
  birthday: null,
  // startDate: new Date(),
};

export const SignUpForm = () => {
  const dispatch = useDispatch();
  // const isLogin = useSelector(selectIsLogin);
  // const [field, meta] = useField();

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);

  const [showPassword, setShowPassword] = useState(false);

  //виклик диспечера
  // const dispatch = useDispatch();
  //отримання даних з редакс

  //додавання контакту при сабміті
  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    console.log('Выбранная дата:', values.birthday);
    // виклик диспечера для відправки даних в редакс
    const reg = JSON.stringify({
      name: values.name.trim(),
      birthday: values.birthday,
      email: values.email.trim(),
      password: values.password.trim(),
    });
    console.log('reg', reg);

    dispatch(
      signUp({
        name: values.name.trim(),
        birthday: values.birthday.trim(),
        email: values.email.toLowerCase().trim(),
        password: values.password.trim(),
      }),
    );

    resetForm();
  };
  //схема валідації
  const schema = yup.object().shape({
    name: yup.string().required().min(4),

    email: yup.string().required().min(4),
    password: yup.string().required().min(4),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        displayName="MyForm"
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
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

            <Field
              name="birthday"
              // type="calendar"
              component={StyledDatepicker}
              value={values.birthday}
            />
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <div
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Изменяем состояние showPassword при клике на кнопку
                style={{
                  position: 'absolute',
                  right: '24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  color: 'white',
                  outline: 'transparent',
                }}
              >
                {!showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </Label>
            {!errors.password && touched.password && showPassword && (
              <DoneMessage>This is an CORRECT password</DoneMessage>
            )}
            {showPassword && <ErrorMessage name="password" component="div" />}
            <SignUpBTN type="submit">Sign Up</SignUpBTN>
          </Form>
        )}
      </Formik>
    </>
  );
};
