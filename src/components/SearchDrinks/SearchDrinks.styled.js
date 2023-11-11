import styled from 'styled-components';

import { Form } from 'formik';



export const SearchDrinksForm = styled(Form)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Lable = styled.label`
  position: relative;
`;

export const SearchDrinksInput = styled.input`
  background-color: transparent;
  width: 335px;
  height: 54px;

  padding: 17px 23px;
  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.navLinkBorder};

  color: ${({ theme }) => theme.colorText};
  line-height: 1.29;

  &::placeholder {
    line-height: 1.29;
    color: ${({ theme }) => theme.colorText};
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
    padding: 13px 23px;

    &::placeholder {
      line-height: 1.56;
    }
  }
`;

export const EditIconWrapper = styled.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
  color: ${({ theme }) => theme.colorText};
`;
