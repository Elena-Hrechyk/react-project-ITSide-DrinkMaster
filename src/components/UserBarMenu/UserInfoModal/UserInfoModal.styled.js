import styled from 'styled-components';
import Modal from 'react-modal';
import { Form as FormikForm, Field as FormikField  } from 'formik';



export const ModalUserLogoInfo = styled(Modal)`
  position: fixed;
  width: 500px;
  height: 426px;
  top: 50%;
  left: 50%;
 
  transform: translate(-50%, -50%);
  background-color: #161f37;
  padding-left: 50px;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 75px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 18px;
  left: 450px;
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;



export const Form = styled(FormikForm)`
  width: 400px;
  height: 301px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: flex;
  margin-top: auto;
`;

export const FieldEditName = styled(FormikField)`
  width: 400px;
  height: 56px;
  padding: 14px 24px;
  margin-top: auto;
  margin-bottom: 25px;
  border-radius: 56px;
  border: 1px solid #F3F3F380;
  background-color: transparent;
  color: #f3f3f3

`;


export const Button = styled.button`
  
  width: 400px;
  height: 54px;
  padding: 18px, 147px, 18px, 147px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F3F3;
  color: #161F37;
  border: none;
  border-radius: 54px;
`;

export const SvgContainer = styled.div`
position: absolute;
left: 400px;
top: 235px;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const EditAvatarContainer = styled.div`
  display: block;
  
`;

export const FieldEditAvatar = styled(FormikField)`

position: absolute;
top: 132px;
left: 233px;
  background-color: transparent;

`;


export const AvatarFormLabel = styled.label`
  display: none;
`;

export const UserImg = styled.img`
display: block;
margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;

`;









