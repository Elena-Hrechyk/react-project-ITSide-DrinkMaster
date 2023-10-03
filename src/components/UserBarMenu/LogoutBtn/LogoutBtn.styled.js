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
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 37px;
`;

export const ButtonContienr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 54px;
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

export const TextLogOut = styled.p`
  width: 263px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #f3f3f3;
`;
