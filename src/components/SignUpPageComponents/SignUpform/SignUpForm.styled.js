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
  align-items: center;
  max-width: 335px;
  gap: 14px;
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
  /* position: relative; */
  display: block;
  width: 335px;
  height: 54px;
  padding-left: 18px;
  padding-right: 18px;

  /* max-width: 335px; */
  /* padding: 18px 24px 18px 24px; */
  color: #f3f3f3;
  /* text-align: center; */
  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  /* margin-top: 10px;
  margin-bottom: 32px;
  padding: 0.5rem;
  font-size: 2rem; */
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;
  border-radius: 200px;
  /* transition: box-shadow 0.3s ease; */
  background-color: transparent;
  /* &:valid {
    
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
  } */
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
    /* outline: 5px solid green; */
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }

  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
    /* outline: 5px solid green; */
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }
  &:hover::placeholder {
    color: rgba(243, 243, 243, 1);
  }
`;
export const SignUpBTN = styled.button`
  width: 372px;
  height: auto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border-radius: 42px;

  padding: 18px 44px;
 
  background: #f3f3f3;
  color: #161f37;

`;
export const ErrorMessage = styled(FormikErrorMessage)`
  width: 268px;
  color: rgba(218, 20, 20, 1);
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;
// export const ErrorSvg = styled(ErrorSVG)`
//   position: absolute;
//   top: 16px;
//   right: 16px;
// `;
export const Title = styled.h3`
  margin-bottom: 20px;
`;
// export const DoneSvg = styled(DoneSVG)`

//   position: absolute;
//   top: 16px;
//   right: 16px;
// `;

export const DoneMessage = styled.span`
  color: #3cbc81;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
