import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const UserBarBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  max-width: 320px;
  height: 44px;
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;

export const UserBarName = styled.span`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 500;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const UserBarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserBar = styled.div`
  margin-left: auto;
`;

export const GlobalStyle = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;
