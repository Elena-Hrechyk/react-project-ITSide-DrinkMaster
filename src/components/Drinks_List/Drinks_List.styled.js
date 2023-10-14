import styled from '@emotion/styled';

export const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-top: 40px;
  gap: 40px 0px;

  @media screen and (min-width: 768px) {
    gap: 80px 20px;
  };
`;
