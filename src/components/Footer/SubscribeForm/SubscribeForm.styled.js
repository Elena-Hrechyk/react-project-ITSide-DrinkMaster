import styled from 'styled-components';

import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Form = styled(FormikForm)`
  width: 309px;
  height: 226px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  width: 309px;
  height: 56px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 56px;
  border: 1px solid #f3f3f333;
  color: #f3f3f3;
  text-align: center;
  font-family: Manrope;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 156%;
`;

export const SubscribeBox = styled.div`
  margin-left: auto;
  @media screen and (max-width: 767.5px) {
    position: absolute;
    top: 250px;
    left: 90px;
  }
`;

export const TextForm = styled.p`
  margin-bottom: 24px;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (max-width: 767.5px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Field = styled(FormikField)`
  width: 309px;
  height: 56px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 56px;
  border: 1px solid #f3f3f333;
  padding-left: 24px;
`;
