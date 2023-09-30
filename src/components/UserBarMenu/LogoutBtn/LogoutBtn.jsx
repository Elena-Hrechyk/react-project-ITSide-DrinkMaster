import Modal from 'react-modal';

import { ReactComponent as CloseSvg } from '../../../img/svg/delete.svg';

import {
  ModalLodOut,
  ButtonClose,
  ButtonModal,
  ButtonContienr,
  TextLogOut,
  TextContainer,
} from './LogoutBtn.styled';

export const LogOutBtnModal = ({ isLogoutModal, isCloseLogoutModal }) => {
  return (
    <ModalLodOut
      isOpen={isLogoutModal}
      onRequestClose={isCloseLogoutModal}
      contentLabel="Log out modal"
      appElement={document.getElementById('root')}
    >
      <ButtonClose onClick={isCloseLogoutModal}>
        <CloseSvg />
      </ButtonClose>
      <TextContainer>
        <TextLogOut>Are you sure you want to log out?</TextLogOut>
      </TextContainer>
      <ButtonContienr>
        <ButtonModal>Log out</ButtonModal>
        <ButtonModal onClick={isCloseLogoutModal}>Cancel</ButtonModal>
      </ButtonContienr>
    </ModalLodOut>
  );
};
