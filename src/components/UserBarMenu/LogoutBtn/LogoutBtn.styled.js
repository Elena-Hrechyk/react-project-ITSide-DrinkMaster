import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalLodOut = styled(ReactModal)`
  position: fixed;
  width: 500px;
  height: 215px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #161f37;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media screen and (max-width: 767.5px) {
  width: 335px;
  height: 193px;
  padding-left: 25px;
  padding-top: 50px;
  padding-right: 25px;
  padding-bottom: 50px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 37px;

  @media screen and (max-width: 767.5px) {
  margin-bottom: 37px;
  }
`;

export const ButtonContienr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 54px;

  @media screen and (max-width: 767.5px) {
  width: 288px;
  height: 50px;
  }
`;

export const ButtonModal = styled.button`
  width: 196px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px, 69px, 18px, 69px;
  border-radius: 54px;
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

  @media screen and (max-width: 767.5px) {
  width: 140px;
  height: 50px;
  }
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

   @media screen and (max-width: 767.5px) {
  top: 11px;
  left: 290px;
  }
`;

export const TextLogOut = styled.p`
  width: 263px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #f3f3f3;
`;
