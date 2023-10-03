import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalUserLogoPopup = styled(ReactModal)`
  position: fixed;
  width: 177px;
  height: 134px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #161f37;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;



export const ButtonModal = styled.button`
  width: 141px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 12px, 45px, 12px, 45px;
  border-radius: 42px;
  color: #161f37;
  background-color: #f3f3f3;
  border: none;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #434D67;
    color: #F3F3F3;
  }
`;

export const ButtonEditModal = styled.button`
  width: 141px;
  height: 18px;
  margin-botton: auto;
  color: #f3f3f3;
  background-color: transparent;
  border: none;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const EditText = styled.span`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
