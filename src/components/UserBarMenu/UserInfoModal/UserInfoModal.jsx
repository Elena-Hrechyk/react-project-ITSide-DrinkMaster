import { Formik } from 'formik';

import { ReactComponent as CloseSvg } from '../../../img/svg/delete.svg';
import { ReactComponent as EditSvg } from '../../../img/svg/edit-01.svg';
import { ReactComponent as UserSvg } from '../../../img/svg/user.svg';
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
    
  
} from './UserInfoModal.styled';

export const UserInfoModal = ({ isEditModalOpen, closeEditModal }) => {
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
                      <UserSvg />
                      <FieldEditAvatar />
                      <AvatarFormLabel>

                      </AvatarFormLabel>
                       
          </EditAvatarContainer>
          <FormLabel>
            <FieldEditName name="name" placeholder="name" />
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
