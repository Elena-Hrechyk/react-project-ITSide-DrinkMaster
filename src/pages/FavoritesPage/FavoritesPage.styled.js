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

export const Wrap = styled.main`
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;

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
