import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  width: 440px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 360px;
  object-fit: cover;
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`;

export const CocktailName = styled.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.286;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.333;
  }
`;

export const CocktailType = styled.p`
  line-height: 1.286;
  color: ${({ theme }) => theme.linkSeeMore};
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
    margin-bottom: 24px;
  }
`;

export const CocktailRecipe = styled.p`
  height: 75px;
  overflow: clip;
  line-height: 1.286;
  margin-bottom: 18px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
    -webkit-line-clamp: 5;
  }
  @media screen and (min-width: 1280px) {
    height: 90px;
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
    -webkit-line-clamp: 4;
  }
`;

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const ButtonSeeMore = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 5px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #161f37;
    background-color: #f3f3f3;
    outline: 1px solid
      ${({ theme }) =>
        theme.body === '#F3F3F3' && theme.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.125;
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 18px;
    padding-bottom: 18px;
    margin-right: 8px;
  }
`;

export const ButtonDelete = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 11px;
  border: none;
  border-radius: 42px;
  color: #f3f3f3;
  background-color: #161f37;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #161f37;
    background-color: #f3f3f3;
    outline: 1px solid
      ${({ theme }) =>
        theme.body === '#F3F3F3' && theme.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;
