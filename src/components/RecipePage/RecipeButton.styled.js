import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 40px;
  text-align: center;
  color: ${({ theme }) => theme.button.battonText};
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
  border-radius: 42px;
  background-color: ${({ theme }) => theme.button.buttonBgc};
  margin-bottom: 80px;
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  text-align: justify;
  transition: all var(--transition-dur-and-func);

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.button.buttonBgcHover};
    color: ${({ theme }) => theme.button.buttonTextHover};
    outline: 2px solid ${({ theme }) => theme.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 198px;
  }
`;
