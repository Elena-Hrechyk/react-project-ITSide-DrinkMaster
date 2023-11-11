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

export const SignUpSection = styled.section`
  text-align: center;
  padding-top: 191px;
  padding-bottom: 191px;
  height: 100vh;

  background-image: url(${bg1mob_1x}), url(${bg2mob_1x}), url(${bg3mob_1x});
  background-size: cover, cover, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    left top 50%,
    right top 50%,
    left 80px top 50%;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${bg1mob_2x}), url(${bg2mob_2x}), url(${bg3mob_2x});
    background-size: cover, cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 50%,
      right top 50%,
      left 80px center 50%;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) and (max-width: 1279.98px) {
    background-image: url(${bg1Tab_1x}), url(${bg2Tab_1x}), url(${bg3Tab_1x});
    background-size: cover, cover, contain;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left bottom 152px,
      right bottom,
      right bottom;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1279.98px) {
    background-image: url(${bg1Tab_2x}), url(${bg2Tab_2x}), url(${bg3Tab_2x});
    background-size: cover, cover, contain;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left bottom 152px,
      right bottom,
      right bottom;
  }

  @media (min-width: 1279.98px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.35) 78.98%,
      rgba(0, 0, 0, 0) 100%,
      url(${bg3desktop_1x})
    );
    background-image: url(${bg1desktop_1x}), url(${bg2desktop_1x}),
      url(${bg3desktop_1x});
    background-size: contain, contain, contain;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left bottom,
      right bottom,
      right bottom;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.35) 78.98%,
      rgba(0, 0, 0, 0) 100%,
      url(${bg3desktop_2x})
    );
    background-image: url(${bg1desktop_2x}), url(${bg2desktop_2x}),
      url(${bg3desktop_2x});
    background-size: contain, contain, contain;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left bottom,
      right bottom,
      right bottom;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 28px;
  text-align: left;

  color: #f3f3f3;
  font-feature-settings: 'liga' off;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;
export const FormWrapper = styled.div`
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const RouteLink = styled(Link)`
  color: #f3f3f3;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33; /* 133.333% */
  text-decoration-line: underline;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
