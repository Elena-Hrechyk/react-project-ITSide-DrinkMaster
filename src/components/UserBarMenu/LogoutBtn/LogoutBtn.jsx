import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';

import { signOut } from '../../../redux/auth/authOperations';

import { ReactComponent as CloseSvg } from '../../../img/svg/delete.svg';

import {
  ModalLodOut,
  ButtonClose,
  ButtonModal,
  ButtonContienr,
  TextLogOut,
  TextContainer,
} from './LogoutBtn.styled';

export const LogOutBtnModal = forwardRef(
  ({ isLogoutModal, isCloseLogoutModal }, ref) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerLogoutClick = () => {
      dispatch(signOut());
      navigate('/welcome');
    };

    return (
      <ModalLodOut
        ref={ref}
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
          <ButtonModal onClick={handlerLogoutClick}>Log out</ButtonModal>
          <ButtonModal onClick={isCloseLogoutModal}>Cancel</ButtonModal>
        </ButtonContienr>
      </ModalLodOut>
    );
  },
);
