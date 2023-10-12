import styled from 'styled-components';
import Drinks_bg1_mob_1x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg1_mob@1x.png';
// import Drinks_bg3_mob_1x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg3_mob@1x.png';
import Drinks_bg1_mob_2x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg1_mob@2x.png';
// import Drinks_bg3_mob_2x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg3_mob@2x.png';

import Drinks_bg1_tab_1x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg1_tab@1x.png';
import Drinks_bg3_tab_1x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg3_tab@1x.png';
import Drinks_bg1_tab_2x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg1_tab@2x.png';
import Drinks_bg3_tab_2x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg3_tab@2x.png';

import Drinks_bg1_desk_1x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg1_desk@1x.png';
import Drinks_bg3_desk_1x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg3_desk@1x.png';
import Drinks_bg1_desk_2x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg1_desk@2x.png';
import Drinks_bg3_desk_2x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg3_desk@2x.png';

export const BGWrapper = styled.div``;

export const AddPageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  text-align: center;
  padding: 80px 0 80px 0;
  /* background-color: '#0A0A11'; */
  font-size: 14px;

  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  @media (-webkit-min-device-pixel-ratio: 1) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    /* padding: 224px 32px 622px 32px; */
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1279.98px */
  @media (min-width: 768px) and (max-width: 1279.98px) {
    padding: 160px 0 136px 0;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1279.98px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1279.98px) {
    padding: 160px 0 136px 0;
    font-size: 17px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1279.98px */
  @media (min-width: 1279.98px) {
    padding: 224px 0 140px 0;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1279.98px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 1279.98px) {
    background-image: url(${Drinks_bg1_mob_1x});
    background-size: contain;

    background-repeat: no-repeat;
    background-position:
      left -97px top -331px,
      right -497px top -287px;
  }

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${Drinks_bg1_mob_2x});
    background-size: contain;

    background-repeat: no-repeat;
    background-position: left top -160px;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${Drinks_bg1_tab_1x}), url(${Drinks_bg3_tab_1x});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${Drinks_bg1_tab_2x}), url(${Drinks_bg3_tab_2x});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -194px top -332px,
      right -78px top -96px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${Drinks_bg1_desk_1x}), url(${Drinks_bg3_desk_1x});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -97px top -331px,
      right -497px top -287px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${Drinks_bg1_desk_2x}), url(${Drinks_bg3_desk_2x});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -27px top -180px,
      right -258px top -68px;
  }
`;

export const Custom = styled.label`
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: white;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;
export const CustomFileInput = styled.input`
  display: none;
`;

export const ToastStyled = styled.div`
  font-size: 18px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background: #1f263f;
  color: #f3f3f3;
`;
