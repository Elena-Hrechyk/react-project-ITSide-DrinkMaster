import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { subscribe } from "../../../redux/auth/authOperations";

import {
  FormLabel,
  Form,
  ErrorMessage,
  Button,
  SubscribeBox,
} from './SubscribeForm.styled';

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Email may be in this format: test@mail.com',
    )
    .required('Input email...'),
});

export const SubscribeForm = () => {

    const dispatch = useDispatch();

	

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            await dispatch(subscribe(values));
        } catch (error) {
            console.log(error)
        }
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
                  <p>
                    Subscribe up to our newsletter. Be in touch with latest news
                    and special offers, etc
                  </p>
                  <Field name="email" placeholder="Enter the email" />
                  <ErrorMessage name="email" component="span" />
                </FormLabel>
                <Button type="submit">Subscribe</Button>
              </Form>
            </Formik>
    </SubscribeBox>
  );
};
