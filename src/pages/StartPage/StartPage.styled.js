import styled from 'styled-components';
import bgImgMob1x from '../../img/start-page/BGStartPageMob@1x.png';
import bgImgMob2x from '../../img/start-page/BGStartPageMob@2x.png';
import bgImgTablet1x from '../../img/start-page/BGStartPageMob@1x.png';
import bgImgTablet2x from '../../img/start-page/BGStartPageMob@2x.png';
import bgImgDesctop1x from '../../img/start-page/BGStartPageDesctop@1x.png';
import bgImgDesctop2x from '../../img/start-page/BGStartPageDesctop@2x.png';

export const importImgBg= {bgImgMob1x,bgImgMob2x,bgImgTablet1x,bgImgTablet2x,bgImgDesctop1x,bgImgDesctop2x}
export const StartSection = styled.section`
  /* position: relative; */
  padding-top: 304px;
  padding-bottom: 304px;
  padding-right: 28px;
  padding-left: 28px;
  /* overflow: hidden; */
/* z-index:100; */
  /* padding: 304px 28px 304px 28px */

  /* background-image: url(${bgImgMob1x});
  background-size: cover;
  background-repeat: no-repeat;
  @media (-webkit-min-device-pixel-ratio: 1) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) { */
  background:
    linear-gradient(0deg, rgba(10, 10, 17, 0.2) 0%, rgba(10, 10, 17, 0.2) 100%),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
    url(${bgImgMob1x}),
    lightgray -3px -13.319px / 100.511% 101.679% no-repeat;
  /* }

  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${bgImgMob2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1440px */
  @media (min-width: 768px) and (max-width: 1339.98px) {
    background-image: url(${bgImgTablet1x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1339.98px) {
    background-image: url(${bgImgTablet2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для экранов с разрешением 1x и шириной больше 1440px */
  @media (min-width: 1440px) {
    background-image: url(${bgImgDesctop1x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    (min-resolution: 192dpi) and (min-width: 1440px) {
    background-image: url(${bgImgDesctop2x});

    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const H1 = styled.h1`
  color: #fafafa;
  font-feature-settings: 'liga' off;
  
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px; /* 110% */
  letter-spacing: -0.8px;
`;
export const P = styled.p`
  color: #fafafa;
  
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
`;
export const SignUPButton = styled.button`
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  display: inline-flex;
  padding: 18px 44px;
  align-items: flex-start;
  gap: 10px;
`;
export const SignInButton = styled.button`
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  display: inline-flex;
  padding: 18px 44px;
  align-items: flex-start;
  gap: 10px;
`;

export const BGElipse1 = styled.div`
  position: absolute;
  top:84px;
  left: 42px;
  width: 257px;
  height: 247px;
  /* flex-shrink: 0;   */
  border-radius: 257px;
  /* background-color:yellow; */
  
    background-color: rgba(188, 230, 210, 0.4);
    filter: blur(104px);
`;
export const BGElipse2 = styled.div`
  position: absolute;
  top: 20px;
  left: -399px;
  width: 520px;
  height: 550px;
  /* flex-shrink: 0;   */
  border-radius: 550px;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;
export const BGElipse3 = styled.div`
  position: absolute;
  top: 498px;
  left: 331px;
  width: 549px;
  height: 543px;
  /* flex-shrink: 0;   */
  border-radius: 549px;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;



