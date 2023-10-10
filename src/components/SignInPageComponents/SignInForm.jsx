import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authOperations.js';
// import { selectIsLogin } from '../../redux/auth/authSelectors.js';
import {
  Field,
  ErrorMessage,
  SignUpBTN,
  Form,
  Label,
} from './SignInForm.styled.js';
import Icon from '../SignUpPageComponents/SignUpform/SvgComponents.jsx';
import schema from './signInSchema.js';

// import * as authOperation from 'redux/auth/auth-operation';

//початкові значення форміка
const initialValues = {
  email: '',
  password: '',

  // startDate: new Date(),
};

export const SignInForm = () => {
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
    // console.log('values', values);

    // виклик диспечера для відправки даних в редакс
    const reg = JSON.stringify({
      email: values.email.trim(),
      password: values.password.trim(),
    });

    dispatch(
      signIn({
        email: values.email.toLowerCase().trim(),
        password: values.password.trim(),
      }),
    );

    resetForm();
  };

  return (
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
              name="email"
              type="email"
              placeholder="Email"
              onFocus={handleFocus}
              value={values.email}
              onChange={handleChange}
            />
            {didFocus &&
              values.email.length > 2 &&
              (errors.email && touched.email ? (
                <Icon.SvgError />
              ) : (
                <Icon.SvgDone />
              ))}
          </Label>
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
              onClick={() => setShowPassword(!showPassword)}
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
          {showPassword && <ErrorMessage name="password" component="div" />}
          <SignUpBTN type="submit">Sign In</SignUpBTN>
        </Form>
      )}
    </Formik>
  );
};
