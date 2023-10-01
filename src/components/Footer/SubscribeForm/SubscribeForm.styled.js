import styled from 'styled-components';

import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';


export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Form = styled(FormikForm)`
  width: 309px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  width: 309px;
  margin-left: auto;
  margin-right: auto;
  color: black;
`;


export const SubscribeBox = styled.div`
  margin-left: auto;
`;
