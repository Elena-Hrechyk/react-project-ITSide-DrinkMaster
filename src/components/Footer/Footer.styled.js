import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg1_mob_1x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg1_footer_mob@1x.png';
import bg1_mob_2x from '../../img/my-drinks/BGIMG/mobBG/Drinks_bg1_footer_mob@2x.png';

import bg1_tab_1x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg1_footer_tab@1x.png';
import bg2_tab_1x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg2_footer_tab@1x.png';
import bg1_tab_2x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg1_footer_tab@2x.png';
import bg2_tab_2x from '../../img/my-drinks/BGIMG/tabBG/Drinks_bg2_footer_tab@2x.png';

import bg1_desk_1x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg1_footer_desk@1x.png';
import bg2_desk_1x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg2_footer_desk@1x.png';
import bg1_desk_2x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg1_footer_desk@2x.png';
import bg2_desk_2x from '../../img/my-drinks/BGIMG/deskBG/Drinks_bg2_footer_desk@2x.png';

export const FooterSection = styled.footer`
  border-top: 1px solid rgba(243, 243, 243, 0.2);

  background-image: url(${bg1_mob_1x});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${bg1_mob_2x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
  }
  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) and (max-width: 1279.98px) {
    background-image: url(${bg1_tab_1x}), url(${bg2_tab_1x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      center 20px bottom,
      center bottom;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1279.98px) {
    background-image: url(${bg1_tab_2x}), url(${bg2_tab_2x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      center bottom,
      center bottom;
  }
  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${bg1_desk_1x}), url(${bg2_desk_1x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      center 20px bottom,
      center bottom;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${bg1_desk_2x}), url(${bg2_desk_2x});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      center bottom,
      center bottom;
  }
`;

export const FooterContainer = styled.div`
  position: relative;
  font-family: 'Manrope', Arial, sans-serif;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 18px;
  margin-left: auto;
  margin-right: auto;

  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;

    margin-left: auto;
    margin-right: auto;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
  }
`;

export const FooterBox = styled.div`
  display: flex;
 
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    position: relative;
  }
  
`;

export const LinkLogo = styled(Link)`
  display: inline-flex;


  height: 28px;
  align-items: center;
  justify-content: center;
  
  margin-bottom: 40px;

  padding-top: 8px;
  padding-left: 0;
  padding-right: 16px;
  padding-bottom: 8px;
  gap: 14px;
  color: #f3f3f3;

  text-decoration: none;
`;

export const SocialsBox = styled.div`

@media screen and (min-width: 1279.5px) {
    margin-right: 411px;
  }
  
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 260px;
  }
  @media screen and (max-width: 767.5px) {
    margin-bottom: 364px;
    margin-right: auto; }
`;

export const NavigationBox = styled.div`
  @media screen and (min-width: 767.5px) and (max-width: 1279.5px) {
    position: absolute;
    top: 220px;
    left: 32px;
    widht: 103px;
    height: 140px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  @media screen and (max-width: 767.5px) {
    display: inline-block;
  }
`;

export const CopyrigthReserved = styled.p`
  margin-right: 689px;
  @media screen and (max-width: 1279.5px) {
    margin-right: 153px;
  }

  @media screen and (max-width: 767.5px) {
    margin-bottom: 8px;
  }
`;

export const CopyrightPrivasy = styled.div`
  display: flex;
  gap: 18px;
`;

export const CopyrightText = styled.p`
  display: block;
  color: #f3f3f333;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: right;
`;
