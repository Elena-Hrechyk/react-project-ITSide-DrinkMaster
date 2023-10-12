import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const UserBarBtn = styled.button`
  margin-left: auto;
  width: 116px;
  height: 44px;
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  gap: 14px;

  
`;

export const UserBarName = styled.span`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f3;
  
`;

export const UserBarImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: white;
`;

export const UserBar = styled.div`
  margin-left: auto;
`;

export const GlobalStyle = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;
