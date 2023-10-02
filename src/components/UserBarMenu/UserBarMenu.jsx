import { createRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUserData } from '../../redux/auth/authSelectors';

import {
  UserBarBtn,
  UserBarName,
  UserBarImg,
  UserBar,
  GlobalStyle,
} from './UserBarMenu.styled';

import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
import { UserInfoModal } from './UserInfoModal/UserInfoModal';
import { LogOutBtnModal } from './LogoutBtn/LogoutBtn';

export const UserBarMenu = ({ toggleMenu, isOpenBurgerMenu }) => {
  const { name, avatarURL } = useSelector(selectUserData);

  const [isOpenLogoPopup, setIsOpenLogoPopup] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const nodeRef = createRef(null);

  const openDropDownModal = () => {
    if (isOpenBurgerMenu === true) {
      toggleMenu();
    }
    setIsOpenLogoPopup(true);
    document.body.classList.add('modal-open');
  };

  const closeDropDownModal = () => {
    setIsOpenLogoPopup(false);
    document.body.classList.remove('modal-open');
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const openLogoutModal = () => {
    setIsLogoutModal(true);
    document.body.classList.add('modal-open');
  };

  const closeLogoutModal = () => {
    setIsLogoutModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <UserBar>
      <UserBarBtn type="button" onClick={openDropDownModal}>
        <UserBarImg src={avatarURL} alt={name} />
        <UserBarName>{name}</UserBarName>
      </UserBarBtn>

      <UserLogoPopup
        ref={nodeRef}
        isOpen={isOpenLogoPopup}
        onClose={closeDropDownModal}
        openEdit={openEditModal}
        openLogout={openLogoutModal}
      />

      <UserInfoModal
        ref={nodeRef}
        isEditModalOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
      />

      <LogOutBtnModal
        ref={nodeRef}
        isLogoutModal={isLogoutModal}
        isCloseLogoutModal={closeLogoutModal}
      />
      <GlobalStyle />
    </UserBar>
  );
};
