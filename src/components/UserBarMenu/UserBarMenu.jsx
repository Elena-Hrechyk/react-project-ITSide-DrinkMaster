import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { UserBarBtn, UserBarName, UserBarImg } from './UserBarMenu.styled';

import { ReactComponent as CloseSvg } from '../../img/svg/delete.svg';

import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
import { UserInfoModal } from './UserInfoModal/UserInfoModal';

export const UserBarMenu = () => {


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
    <div>
      <UserBarBtn type="button" onClick={openDropDownModal}>
        <UserBarImg src="" alt="User" />
        <UserBarName>User</UserBarName>
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
      />

      <Modal
        isOpen={isLogoutModal}
        onRequestClose={closeLogoutModal}
        contentLabel="Log out modal"
        appElement={document.getElementById('root')}
      >
        <button onClick={closeLogoutModal}>
          <CloseSvg />
        </button>
        <p>Are you sure you want to log out?</p>
        <div>
          <button>Log out</button>
          <button>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};
