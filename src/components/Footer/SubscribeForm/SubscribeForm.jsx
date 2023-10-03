import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { updateSubscribe } from '../../../redux/auth/authOperations';
import { selectUserData } from '../../../redux/auth/authSelectors';

import {
  FormLabel,
  Form,
  ErrorMessage,
  Button,
  SubscribeBox,
  TextForm,
  Field,
} from './SubscribeForm.styled';

const EmailSchema = Yup.object().shape({
  email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email...'),
});

export const SubscribeForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const { subscribe } = useSelector(selectUserData);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(updateSubscribe(values));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e);
  };

  return (
    <SubscribeBox>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={EmailSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormLabel name="email">
            <TextForm>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc
            </TextForm>
            <Field name="email" placeholder="Enter the email" />
            <ErrorMessage name="email" component="span" />
          </FormLabel>
          <Button disabled={subscribe} type="submit">
            {subscribe ? 'You are subscribed' : 'Subscribe'}
          </Button>
        </Form>
      </Formik>
    </SubscribeBox>
  );
};
