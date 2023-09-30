import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 335px;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;
export const DivForInput = styled.div`
  /* margin-bottom: 1rem; */
`;

export const Label = styled.label`
  /* display: block;

  margin-bottom: 2rem;
  font-weight: bold; */
`;
export const Input = styled.input`
  /* display: block;
  width: 97%;
  margin-top: 10px;
  margin-bottom: 32px;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid black;
  outline: transparent;
  border-radius: 4px;
  /* transition: box-shadow 0.3s ease; */
  /* background-color: rgb(99, 99, 255);
  &:hover {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  /* } */
`;
export const Field = styled(FormikField)`
  /* position: relative; */
  display: block;
  width: 100%;
  height: 54px;
  padding-left: 18px;
  padding-right: 18px;

  color: #f3f3f3;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;
  border-radius: 200px;

  background-color: transparent;

  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
  }

  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
  }
  &:hover::placeholder {
    color: rgba(243, 243, 243, 1);
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
    height: 56px;
    font-size: 17px;
  }
`;
export const SignUpBTN = styled.button`
  width: 100%;
  height: auto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border-radius: 42px;

  padding: 18px 44px;
  outline: transparent;
  background: #f3f3f3;
  color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);

  &:hover {
    border-radius: 42px;
    background: #161f37;
    color: #f3f3f3;
  }

  :focus {
    border-radius: 42px;
    background: #161f37;
    color: #f3f3f3;
  }

  &:active {
    border-radius: 42px;
    border: 2px solid rgba(64, 112, 205, 0.5);
    background: #f3f3f3;
    color: #161f37;
  }
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  width: 268px;
  color: rgba(218, 20, 20, 1);
 
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;


export const DoneMessage = styled.span`
  color: #3cbc81;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
