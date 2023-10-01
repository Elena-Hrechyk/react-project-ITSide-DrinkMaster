import { Formik } from 'formik';
import { useEffect, useState, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/auth/authSelectors';
import { updateUserProfile } from '../../../redux/auth/authOperations';

import { ReactComponent as CloseSvg } from '../../../img/svg/delete.svg';
import { ReactComponent as EditSvg } from '../../../img/svg/edit-01.svg';

import {
  Form,
  Button,
  ModalUserLogoInfo,
  ButtonClose,
  FieldEditName,
  SvgContainer,
  EditAvatarContainer,
  UserImg,
  FieldEditAvatar,
  AddPhotoSvg,
  LabelFileUpload,
} from './UserInfoModal.styled';

export const UserInfoModal = forwardRef(
  ({ isEditModalOpen, closeEditModal }, ref) => {
    const dispatch = useDispatch();
    const { name, avatarURL } = useSelector(selectUserData);

    const [userName, setUserName] = useState(name);
    const [image, setImage] = useState(null);
    const [imgURL, setImageURL] = useState(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const userInfoFormSubmit = (values) => {
      if (!isButtonEnabled) {
        setIsButtonEnabled(false);
        // Notify.failure('No data changed');
        // return;
      }

      const formData = new FormData();

      // const formData = {
      //   name: values.name,
      //    avatarURL: values.image};

      // formData.append('name', values.name);
      // if (image) {
      //   formData.append('avatarURL', image);
      // }

      formData.append('name', values.name);

      formData.append('avatarURL', image);

      // console.log(image);
      // console.log(formData);

      dispatch(updateUserProfile(formData));
    };

    const onImageChange = (e) => {
      const [_file] = e.target.files;
      setImageURL(URL.createObjectURL(_file));
      setImage(_file);
      setIsButtonEnabled(true);
      console.log(e);
      console.log(_file);
      console.log(image);
    };

    const onNameChange = (e) => {
      setUserName(e.target.value);
      console.log(e.target.value);
      if (name !== e.target.value) {
        setIsButtonEnabled(true);
      } else if (name === e.target.value && imgURL === null) {
        setIsButtonEnabled(false);
      }
    };

    // const handleFileChange = (event) => {
    //   const selectedFile = event.currentTarget.files[0];
    //   console.log(selectedFile);
    // }

    useEffect(() => {
      const userImage = document.getElementById('user_image');
      if (imgURL) {
        userImage.src = imgURL;
      }
      return () => {
        if (imgURL) {
          URL.revokeObjectURL(imgURL);
        }
      };
    }, [imgURL]);

    return (
      <ModalUserLogoInfo
        ref={ref}
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit user profile modal"
        appElement={document.getElementById('root')}
      >
        <ButtonClose onClick={closeEditModal}>
          <CloseSvg />
        </ButtonClose>
        <Formik
          initialValues={{ avatarURL: '', name: `${userName}` }}
          enableReinitialize={true}
          onSubmit={userInfoFormSubmit}
        >
          <Form>
            <EditAvatarContainer>
              <FieldEditAvatar
                id="file_upload"
                type="file"
                name="avatarURL"
                accept="image/*"
                onChange={onImageChange}
              />
              <LabelFileUpload htmlFor="file_upload">
                <UserImg src={avatarURL} alt="UserAvatar" id="user_image" />
                <AddPhotoSvg />
              </LabelFileUpload>
            </EditAvatarContainer>

            <label htmlFor="name_upload"></label>
            <FieldEditName
              id="name"
              name="name"
              type="text"
              onChange={onNameChange}
            />
            <SvgContainer>
              <EditSvg />
            </SvgContainer>

            <Button disabled={!isButtonEnabled} type="submit">
              Save changes
            </Button>
          </Form>
        </Formik>
      </ModalUserLogoInfo>
    );
  },
);
