import { styled } from 'styled-components';

export const DrinkIngredientsContainer = styled.div`
  background-color: transparent;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    /* width:496px; */
  }
  @media screen and (min-width: 1280px) {
    width: 540px;
  }
`;

export const CountBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 104px;
  height: 40px;
  margin-left: 77px;
  border: 1px solid ${({ theme }) => theme.linkSeeMore};
  border-radius: 200px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    margin-left: 370px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 206px;
  }
`;

export const CountButton = styled.button`
  background-color: transparent;
  border: transparent;
  padding: 5px;
  line-height: 1.29; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const IngridientsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
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

export const IngredientPortionContainer = styled.div`
  display: flex;
`;

export const Ingridient = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.linkSeeMore};
  border-radius: 200px;
  height: 40px;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 332px;
  }
  @media screen and (min-width: 1280px) {
    width: 316px;
  }
`;

export const Portion = styled.div`
  width: 101px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  border: 1px solid ${({ theme }) => theme.linkSeeMore};
  border-radius: 200px;
  height: 40px;
  padding-left: 18px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    width: 150px;
    margin-left: 14px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: transparent;
  width: 90%;
  color: ${({ theme }) => theme.colorText};
  &:focus {
    outline: transparent;
  }
`;

export const XButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colorText};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
