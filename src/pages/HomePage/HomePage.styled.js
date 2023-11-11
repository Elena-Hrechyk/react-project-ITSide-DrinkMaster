import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Drinks_bg1_mob_1x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg1_mob@1x.png';
import Drinks_bg3_mob_1x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg3_mob@1x.png';
import Drinks_bg1_mob_2x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg1_mob@2x.png';
import Drinks_bg3_mob_2x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg3_mob@2x.png';

import Drinks_bg1_tab_1x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg1_tab@1x.png';
import Drinks_bg3_tab_1x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg3_tab@1x.png';
import Drinks_bg1_tab_2x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg1_tab@2x.png';
import Drinks_bg3_tab_2x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg3_tab@2x.png';

import Drinks_bg1_desk_1x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg1_desk@1x.png';
import Drinks_bg3_desk_1x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg3_desk@1x.png';
import Drinks_bg1_desk_2x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg1_desk@2x.png';
import Drinks_bg3_desk_2x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg3_desk@2x.png';

export const HomeSection = styled.section`
  font-family: var(--font-main);
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${Drinks_bg1_mob_1x}), url(${Drinks_bg3_mob_1x});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${Drinks_bg1_mob_2x}), url(${Drinks_bg3_mob_2x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${Drinks_bg1_tab_1x}), url(${Drinks_bg3_tab_1x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${Drinks_bg1_tab_2x}), url(${Drinks_bg3_tab_2x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${Drinks_bg1_desk_1x}), url(${Drinks_bg3_desk_1x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${Drinks_bg1_desk_2x}), url(${Drinks_bg3_desk_2x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`;

export const AddDrinkContainer = styled.div`
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`;

export const LeftSideHero = styled.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.19;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1280) {
    margin-bottom: 28px;
    font-size: 64px;
    line-height: 1.06;
  }
`;

export const Discribe = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const LinkAddDrink = styled(NavLink)`
  display: inline-block;
  width: 165px;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.button.buttonBgc};
  margin-bottom: 47px;
  color: ${({ theme }) => theme.button.battonText};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.23;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.button.buttonBgcHover};
    color: ${({ theme }) => theme.button.buttonTextHover};
    outline: 2px solid ${({ theme }) => theme.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const HeroImg = styled.img`
  display: block;
  width: 252px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 359px;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -57px;
    right: 36px;
  }
`;

export const CategoryDrinkList = styled.ul`
  margin-bottom: 40;
`;

export const ItemCategory = styled.li`
  margin-bottom: 40px;

  &:nth-child(n + 5) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const TitleCategory = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 20px;
  }
`;

export const LinkOtherDrink = styled(NavLink)`
  display: block;
  width: 165px;
  padding: 14px 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.button.buttonBgc};
  margin-bottom: 47px;
  color: ${({ theme }) => theme.button.battonText};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.23;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.button.buttonBgcHover};
    color: ${({ theme }) => theme.button.buttonTextHover};
    outline: 2px solid ${({ theme }) => theme.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`;
