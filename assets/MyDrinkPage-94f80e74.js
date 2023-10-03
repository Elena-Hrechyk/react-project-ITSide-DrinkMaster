import{n as k,r as s,u as p,a as l,m as _,j as t,C as h}from"./index-7e73ab98.js";import{u as D,P as f}from"./useResize-a390bbe0.js";import{D as w,a as v,b as $,c as P,d as j,e as z,f as C,g as E,h as N,i as y,l as I,k as S}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{D as M,a as O}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as R,D as F,N as L}from"./NotFoundComponent-056dca88.js";const T=k.main`
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
  background-image: url(${w}), url(${M});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${v}), url(${O});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${$}), url(${P});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${j}), url(${z});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${C}), url(${E});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${N}), url(${y});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,G=()=>{const[a,d]=s.useState(1),{width:n}=D(),e=p(I),g=p(S),o=l();s.useEffect(()=>{o(_())},[o]);const r=n<1280?10:9,c=n<768?5:8,i=a*r,x=i-r,m=e.slice(x,i),u=b=>{d(b)};return t.jsx(T,{children:t.jsxs(h,{children:[t.jsx(R,{title:"My drinks"}),e&&e.length!==0?t.jsx(F,{items:m}):t.jsx(L,{error:g,message:"No own cocktails"}),e&&e.length!==0&&t.jsx(f,{currentPage:a,paginate:c,drinksPerPage:r,totalItems:e.length,nextPage:u})]})})};export{G as MyDrinksPage,G as default};
