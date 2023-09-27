import{s as n,j as i,L as r}from"./index-ff152b2f.js";import{G as a}from"./iconBase-bbe2995c.js";import{i as t}from"./StartPage.styled-85e2d935.js";const o=n.svg`
  position: absolute;
  top: 16px;
  right: 16px;
`,d=e=>i.jsx(o,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:i.jsx("path",{fill:"#3CBC81",d:"m10.6 13.8-2.175-2.175a.89.89 0 0 0-.687-.262.976.976 0 0 0-.688.287.948.948 0 0 0-.275.7c0 .283.092.517.275.7L9.9 15.9a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275l5.675-5.675a.894.894 0 0 0 .263-.688.979.979 0 0 0-.288-.687.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.8ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20Z"})}),g=e=>i.jsx(o,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:i.jsx("path",{fill:"#DA1414",d:"M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z"})}),s={SvgDone:d,SvgError:g};function l(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function m(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}const u=n.section`
  /* padding-top: 191px;
  padding-bottom: 191px; */
  /* padding-right: 20px;
  padding-left: 20px; */
  /* display: flex;
  flex-direction: column    ; */
  text-align: center;
  padding: 191px 20px 191px 20px;
  background-image: url(${t.bgImgMob1x});
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
      url(${t.bgImgMob1x}),
      lightgray -3px -13.319px / 100.511% 101.679% no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${t.bgImgMob2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1440px */
  @media (min-width: 768px) and (max-width: 1339.98px) {
    background-image: url(${t.bgImgTablet1x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1339.98px) {
    background-image: url(${t.bgImgTablet2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для экранов с разрешением 1x и шириной больше 1440px */
  @media (min-width: 1440px) {
    background-image: url(${t.bgImgDesctop1x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    (min-resolution: 192dpi) and (min-width: 1440px) {
    background-image: url(${t.bgImgDesctop2x});

    background-size: cover;
    background-repeat: no-repeat;
  }
`,h=n.h2`
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
`,b=n(r)`

  color: #f3f3f3;
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
`;export{l as F,h as H,s as I,b as R,u as S,m as a};
