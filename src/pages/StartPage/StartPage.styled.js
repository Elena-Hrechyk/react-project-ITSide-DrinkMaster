import styled from 'styled-components';
import { Link } from 'react-router-dom';


import bg1mob_1x from '../../img/start-page/BackgroundIMG/mobBG/bg1mob@1x.png';
import bg2mob_1x from '../../img/start-page/BackgroundIMG/mobBG/bg2mob@1x.png';
import bg3mob_1x from '../../img/start-page/BackgroundIMG/mobBG/bg3mob@1x.png';

import bg1mob_2x from '../../img/start-page/BackgroundIMG/mobBG/bg1mob@2x.png';
import bg2mob_2x from '../../img/start-page/BackgroundIMG/mobBG/bg2mob@2x.png';
import bg3mob_2x from '../../img/start-page/BackgroundIMG/mobBG/bg3mob@2x.png';

import bg1Tab_1x from '../../img/start-page/BackgroundIMG/tabBG/bg1Tab@1x.png';
import bg2Tab_1x from '../../img/start-page/BackgroundIMG/tabBG/bg2Tab@1x.png';
import bg3Tab_1x from '../../img/start-page/BackgroundIMG/tabBG/bg3Tab@1x.png';

import bg1Tab_2x from '../../img/start-page/BackgroundIMG/tabBG/bg1Tab@2x.png';
import bg2Tab_2x from '../../img/start-page/BackgroundIMG/tabBG/bg2Tab@2x.png';
import bg3Tab_2x from '../../img/start-page/BackgroundIMG/tabBG/bg3Tab@2x.png';

import bg1desktop_1x from '../../img/start-page/BackgroundIMG/desktopBG/bg1desktop@1x.png';
import bg2desktop_1x from '../../img/start-page/BackgroundIMG/desktopBG/bg2desktop@1x.png';
import bg3desktop_1x from '../../img/start-page/BackgroundIMG/desktopBG/bg3desktop@1x.png';

import bg1desktop_2x from '../../img/start-page/BackgroundIMG/desktopBG/bg1desktop@2x.png';
import bg2desktop_2x from '../../img/start-page/BackgroundIMG/desktopBG/bg2desktop@2x.png';
import bg3desktop_2x from '../../img/start-page/BackgroundIMG/desktopBG/bg3desktop@2x.png';


export const importImgBg = {
  bg1mob_1x,
  bg2mob_1x,
  bg3mob_1x,
  bg1mob_2x,
  bg2mob_2x,
  bg3mob_2x,

  bg1Tab_1x,
  bg2Tab_1x,
  bg3Tab_1x,
  bg1Tab_2x,
  bg2Tab_2x,
  bg3Tab_2x,

  bg1desktop_1x,
  bg2desktop_1x,
  bg3desktop_1x,
  bg1desktop_2x,
  bg2desktop_2x,
  bg3desktop_2x,


};
export const StartSection = styled.section`
  /* position: relative; */
  max-width: 335px;
  padding-top: 304px;
  padding-bottom: 304px;
  padding-right: 20px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 400px;
    padding-bottom: 400px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media (min-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
    
  }
`;

export const H1 = styled.h1`
  color: #fafafa;
  font-feature-settings: 'liga' off;

  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;

  text-align: center;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    text-align: start;
  }
`;
export const P = styled.p`
  color: #fafafa;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 470px;

    font-size: 18px;
    line-height: 133.333%;
    letter-spacing: -0.36px;
    text-align: start;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap:14px;

  }
`;
export const SignUPButton = styled.button`
  width: 132px;
  color: #161f37;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  @media screen and (max-width: 374.98px) {
    font-size: 13px;
  } 
`;
export const SignInButton = styled.button`
  width: 135px;
  color: #f3f3f3;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  /* display: inline-flex; */
  padding: 18px 44px;
  @media screen and (max-width: 374.98px) {
    font-size: 13px;
  }
`;


export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;



