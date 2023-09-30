import styled from '@emotion/styled';
import { importImgBg } from './pages/StartPage/StartPage.styled.js';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${(p) => p.theme.colors.backgroundColorDark};
  color: ${(p) => p.theme.colors.primaryTextColor};
  margin: ${(p) => p.theme.space[0]}px;
  font-size: ${(p) => p.theme.fontSizes[3]}px;
  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${importImgBg.bg1mob_1x}), url(${importImgBg.bg2mob_1x}),
    url(${importImgBg.bg3mob_1x});
  background-size: cover, cover, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    left top 50%,
    right top 50%,
    left 80px top 50%;
  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${importImgBg.bg1mob_2x}),
      url(${importImgBg.bg2mob_2x}), url(${importImgBg.bg3mob_2x});
    background-size: cover, cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 50%,
      right top 50%,
      left 80px center 50%;
  }
  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) and (max-width: 1279.98px) {
    background-image: url(${importImgBg.bg1Tab_1x}),
      url(${importImgBg.bg2Tab_1x}), url(${importImgBg.bg3Tab_1x});
    background-size: cover, cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top -51px,
      right center 50%,
      left center 50%;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1279.98px) {
    background-image: url(${importImgBg.bg1Tab_2x}),
      url(${importImgBg.bg2Tab_2x}), url(${importImgBg.bg3Tab_2x});
    background-size: cover, cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top,
      right bottom,
      left 80px center 50%;
  }
  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.35) 78.98%,
      rgba(0, 0, 0, 0) 100%,
      url(${importImgBg.bg3desktop_1x})
    );
    background-image: url(${importImgBg.bg1desktop_1x}),
      url(${importImgBg.bg2desktop_1x}), url(${importImgBg.bg3desktop_1x});
    background-size: cover, cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left bottom 152px,
      right bottom,
      left 302px bottom 50%;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.35) 78.98%,
      rgba(0, 0, 0, 0) 100%,
      url(${importImgBg.bg3desktop_2x})
    );
    background-image: url(${importImgBg.bg1desktop_2x}),
      url(${importImgBg.bg2desktop_2x}), url(${importImgBg.bg3desktop_2x});
    background-size: cover, cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left center 50%,
      right center 50%,
      left 302px center 50%;
  }
`;
