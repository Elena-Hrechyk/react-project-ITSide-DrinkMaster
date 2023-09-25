import styled from 'styled-components';
import { Link} from 'react-router-dom';

import { importImgBg } from '../StartPage/StartPage.styled';
export const SignInSection = styled.section`
  /* padding-top: 191px;
  padding-bottom: 191px; */
  /* padding-right: 20px;
  padding-left: 20px; */
  /* display: flex;
  flex-direction: column    ; */
  text-align: center;
  padding: 191px 20px 191px 20px;
  background-image: url(${importImgBg.bgImgMob1x});
  background-size: cover;
  background-repeat: no-repeat;
  @media (-webkit-min-device-pixel-ratio: 1) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background:
      linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
      url(${importImgBg.bgImgMob1x}),
      lightgray -3px -13.319px / 100.511% 101.679% no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${importImgBg.bgImgMob2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1440px */
  @media (min-width: 768px) and (max-width: 1339.98px) {
    background-image: url(${importImgBg.bgImgTablet1x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1339.98px) {
    background-image: url(${importImgBg.bgImgTablet2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для экранов с разрешением 1x и шириной больше 1440px */
  @media (min-width: 1440px) {
    background-image: url(${importImgBg.bgImgDesctop1x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    (min-resolution: 192dpi) and (min-width: 1440px) {
    background-image: url(${importImgBg.bgImgDesctop2x});

    background-size: cover;
    background-repeat: no-repeat;
  }
`;



export const H2 = styled.h2`
  margin-bottom: 28px;
  text-align: left;

  color: #f3f3f3;
  font-feature-settings: 'liga' off;
  /* font-family: Manrope; */
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.286%;
  letter-spacing: -0.56px;
`;

export const RouteLink = styled(Link)`

  color: #f3f3f3;
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
`;