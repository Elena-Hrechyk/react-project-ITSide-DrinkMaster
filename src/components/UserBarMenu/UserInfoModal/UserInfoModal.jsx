import { Formik } from 'formik';

import { ReactComponent as CloseSvg } from '../../../img/svg/delete.svg';
import { ReactComponent as EditSvg } from '../../../img/svg/edit-01.svg';
import { ReactComponent as UserAddSvg } from '../../../img/svg/add-photo.svg';
import {
  FormLabel,
  Form,
  Button,
  ModalUserLogoInfo,
  ButtonClose,
  FieldEditName,
  SvgContainer,
  EditAvatarContainer,
  FieldEditAvatar,
  AvatarFormLabel,
  UserImg
} from './UserInfoModal.styled';

export const UserInfoModal = ({ isEditModalOpen, closeEditModal, avatarUser, nameUser }) => {
  return (
    <ModalUserLogoInfo
      isOpen={isEditModalOpen}
      onRequestClose={closeEditModal}
      contentLabel="Edit user profile modal"
      appElement={document.getElementById('root')}
    >
      <ButtonClose onClick={closeEditModal}>
        <CloseSvg />
      </ButtonClose>
      <Formik
        initialValues={{
          name: '',
        }}
      >
        <Form>
          <EditAvatarContainer>
            <UserImg src={avatarUser} alt="" />
            <FieldEditAvatar component={UserAddSvg}/>
            <AvatarFormLabel></AvatarFormLabel>
          </EditAvatarContainer>
          <FormLabel>
            <FieldEditName name="name" placeholder={nameUser} />
            <SvgContainer>
              <EditSvg />
            </SvgContainer>
          </FormLabel>

          <Button type="submit">Save changes</Button>
        </Form>
      </Formik>
    </ModalUserLogoInfo>
  );
};
