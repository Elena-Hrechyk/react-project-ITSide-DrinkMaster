import styled from 'styled-components';

export const WrapList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 80px 20px;
  }
`;

export const DrinkItem = styled.li`
  width: 335px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;
