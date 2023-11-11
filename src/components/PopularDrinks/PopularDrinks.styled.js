import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const DrinksContainer = styled.div`
  margin-top: 80px;
  @media screen and (min-width: 1280px) {
    width: 313px;
    margin-top: 0;
  }
`;

export const TitleFollowUs = styled.h4`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33; /* 133.333% */
  text-align: left;
`;

export const TitlePopDrinks = styled.h4`
  margin-bottom: 28px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33; /* 133.333% */
  text-align: left;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
`;

export const PopularDrinkCont = styled.li`
  display: flex;
  width: 335px;
  height: 90px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 313px;
  }
`;

export const ImgStyled = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;

export const DescriptionContainer = styled.div`
  width: 232px;
  height: 90px;
  margin-left: 8px;
  text-align: left;
  @media screen and (min-width: 768px) {
    margin-left: 14px;
  }
`;

export const TitleDrink = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colorText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375; /* 137.5% */
`;

export const Text = styled.p`
  /* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; */
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.linkSeeMore};

  @media screen and (min-width: 768px) {
    line-height: 1.43;
  }
`;

/* @media (min-width: 768px){
  width: 480px;
  } */

export const UlContainer = styled.ul`
  width: 336px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 313px;
    gap: 28px;
  }
`;
