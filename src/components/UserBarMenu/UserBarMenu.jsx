import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { selectUserData } from '../../redux/auth/authSelectors';

import {
  UserBarBtn,
  UserBarName,
  UserBarImg,
  UserBar,
} from './UserBarMenu.styled';



import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
import { UserInfoModal } from './UserInfoModal/UserInfoModal';
import { LogOutBtnModal } from './LogoutBtn/LogoutBtn';

export const UserBarMenu = () => {
  const { name, avatarURL } = useSelector(selectUserData);

  const [isOpenLogoPopup, setIsOpenLogoPopup] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const openDropDownModal = () => {
    setIsOpenLogoPopup(true);
  };

  const closeDropDownModal = () => {
    setIsOpenLogoPopup(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openLogoutModal = () => {
    setIsLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModal(false);
  };

  return (
    <UserBar>
      <UserBarBtn type="button" onClick={openDropDownModal}>
        <UserBarImg src={avatarURL} alt={name} />
        <UserBarName>{name}</UserBarName>
      </UserBarBtn>

      <UserLogoPopup
        isOpen={isOpenLogoPopup}
        onClose={closeDropDownModal}
        openEdit={openEditModal}
        openLogout={openLogoutModal}
      />

      <UserInfoModal
        isEditModalOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
        avatarUser={avatarURL}
        nameUser={name}
      />

      <LogOutBtnModal
        isLogoutModal={isLogoutModal}
        isCloseLogoutModal={closeLogoutModal}
      />
    </UserBar>
  );
};
