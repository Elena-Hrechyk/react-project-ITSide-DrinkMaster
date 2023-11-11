import styled from 'styled-components';

export const Title = styled.h4`
  color: ${({ theme }) => theme.linkSeeMore};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const ListIngredients = styled.ul`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    grid-gap: 35px;
    width: 100%;
  }
`;

export const ItemIngredient = styled.li`
  width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`;

export const ImgIngredient = styled.img`
  width: 157px;
  height: 157px;
  padding: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.addDrinkImgBgc};
  margin-bottom: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const BoxTitleIngredient = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleIngredient = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33; /* 133.333% */
  }
`;

export const Measure = styled.p`
  color: ${({ theme }) => theme.linkSeeMore};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25; /* 133.333% */
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;
