import { Field as FormikField, Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  /* max-width: 700px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 0 20px 0 20px; */
  max-width: 335px;
  gap:14px;
  /* margin: 0 auto; */
    margin-bottom: 14px;
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
  /* /* display: block; */
  /* width: 100%; */
  height: 54px;
  padding-left: 18px;
  padding-right: 18px;

  max-width: 335px; 
  /* padding: 18px 24px 18px 24px; */
  color: #f3f3f3;
  /* text-align: center; */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  /* margin-top: 10px;
  margin-bottom: 32px;
  padding: 0.5rem;
  font-size: 2rem;
  /* border: 1px solid black; */
  outline: transparent;
  border-radius: 200px;
  /* transition: box-shadow 0.3s ease; */
  /* background-color: rgb(99, 99, 255); */
  /* &:hover {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  /* } */
`;
export const ButtonAddContacts = styled.button`
  /* display: inline-block;
  background-color: rgb(99, 99, 255);
  border-radius: 4px;
  border: 2px solid black;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 32px;
  padding-left: 32px;
  min-width: 100%;

  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  &:hover,
  :focus,
  :active {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    background-color: fuchsia;
  } */
`;
export const Title = styled.h3`margin-bottom: 20px`