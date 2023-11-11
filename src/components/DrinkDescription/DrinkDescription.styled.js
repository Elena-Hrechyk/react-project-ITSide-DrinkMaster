import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-top: 60px;
    width: 100%;
  }
`;
export const Input = styled.input`
  padding-bottom: 14px;
  padding-top: 31px;
  background-color: transparent;
  border: transparent;
  color: ${({ theme }) => theme.colorText};
  width: 335px;
  &:focus {
    outline: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 352px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 339px;
  }
`;

/* Устанавливаем нижнее подчеркивание */
export const UnderlinedElement = styled.div`
  border-bottom: 0.5px solid ${({ theme }) => theme.linkSeeMore};
  padding-left: 10px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1280px) {
    width: 339px;
  }
`;

export const InputsContainer = styled.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const TitleInput = styled.p`
  color: ${({ theme }) => theme.linkSeeMore};
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const CategoryContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // width: '393px',
  maxHeight: '278px',
};

export const AddImage = styled.div`
  width: 335px; ///// задать гнучкий розмір
  height: 320px;
  background-color: ${({ theme }) => theme.addDrinkImgBgc};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`;
export const AddImageButton = styled.label`
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border: none;
  padding: 18px;
  border-radius: 6px;
  margin-bottom: 18px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
`;

export const TitleAddImg = styled.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
`;

export const RadioContainer = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

// RadioContainer;
export const RadioComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  position: relative;
  color: ${({ theme }) => theme.linkSeeMore};

  &:checked {
    color: ${({ theme }) => theme.colorText};
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  + .radio-label {
    &:before {
      content: '';
      border-radius: 100%;
      border: 2px solid ${({ theme }) => theme.linkSeeMore};
      display: inline-block;
      width: 20px;
      height: 20px;
      position: relative;
      top: -0.2em;
      margin-right: 8px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
  }
  &:checked {
    + .radio-label {
      &:after {
        opacity: 1;
        border: ${({ theme }) => theme.colorText};
        box-shadow: inset 0 0 0 4px ${({ theme }) => theme.bodyBgc};
      }
    }
  }
  &:focus {
    + .radio-label {
      color: ${({ theme }) => theme.colorText};
      &:before {
        outline: none;
        box-shadow: inset 0 0 0 4px ${({ theme }) => theme.bodyBgc};
        border-radius: 100%;
        border: 2px solid ${({ theme }) => theme.colorText};
        background-color: ${({ theme }) => theme.colorText};
      }
    }
  }
  &:focus {
    + .radio-label {
      &:after {
        outline: none;
        border-color: #800080;
      }
    }
  }
  &:checked + .radio-label::before {
    outline: none;
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.bodyBgc};
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.colorText};
    background-color: ${({ theme }) => theme.colorText};
    color: ${({ theme }) => theme.colorText};
  }

  &:checked + .radio-label {
    color: ${({ theme }) => theme.colorText};
  }
`;

export const HiddenInput = styled.input`
  position: 'relative';
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ImageBackground = styled.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`;

// export const CustomFileLabel = styled.label`
//   display: inline-block;
//   background-color: white;
//   padding: 6px 12px;
//   cursor: pointer;
//   color: red;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   text-align: center;
// `;

// export const FieldInput = styled.input`
//   display: none;
// `;

