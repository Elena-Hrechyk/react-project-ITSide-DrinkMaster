import styled from 'styled-components';
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

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 158px;
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
    /* background-position:
      left  top,
      right  top ; */
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

export const BoxAboutDrink = styled.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
  }
`;

export const BoxAboutDrinkText = styled.div`
  @media screen and (min-width: 1280px) {
    width: 593px;
  }
`;

export const TypeDrink = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  line-height: 1.17; /* 116.667% */
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.25; /* 125% */
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  line-height: 1.23; /* 128.571% */
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const Button = styled.button`
  padding: 14px 40px;
  text-align: center;
  color: #161f37;
  font-weight: 600;
  line-height: 1.23; /* 128.571% */
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 80px;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: justify;

  &:focus,
  &:hover {
    transform: scale(1.03);
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

export const ImgDrink = styled.img`
  width: 335px;
  height: 400px;
  margin-bottom: 18px;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    margin-bottom: 0;
  }
`;

export const TitleRecipe = styled.h4`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; /* 110% */
  }
`;

export const Recipe = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38; /* 137.5% */
  }
`;

export const ImgDecor = styled.img`
  width: 335px;
  height: 430px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 430px;
  }

  @media screen and (min-width: 1280px) {
    width: 631px;
    height: 480px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    grid-gap: 60px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

