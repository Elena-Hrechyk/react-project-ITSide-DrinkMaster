import { ReactComponent as EditSvg } from '../../../img/svg/edit-01.svg';
import {
  ModalUserLogoPopup,
  ButtonModal,
  ButtonEditModal,
  ModalContent,
  EditText,
  ButtonContent,
} from './UserLogoPopup.styled';

export const UserLogoPopup = ({ isOpen, onClose, openEdit, openLogout }) => {
  return (
    <ModalUserLogoPopup
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Drop down modal"
      appElement={document.getElementById('root')}
    >
      <ModalContent>
        <ButtonEditModal onClick={openEdit}>
          <ButtonContent>
            <EditText>Edit profile</EditText>
            <EditSvg />
          </ButtonContent>
        </ButtonEditModal>
        <ButtonModal onClick={openLogout}>Log out</ButtonModal>
      </ModalContent>
    </ModalUserLogoPopup>
  );
};
