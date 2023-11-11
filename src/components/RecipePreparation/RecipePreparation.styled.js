import { styled } from 'styled-components';

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 80px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  flex: start;
  width: 335px;
  min-height: 184px;
  margin-top: 40px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: transparent;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.linkSeeMore};
  color: ${({ theme }) => theme.colorText};

  @media screen and (min-width: 768px) {
    width: 480px;
    padding-top: 14px;
    padding-left: 24px;
  }
`;
