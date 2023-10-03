import{n as k,r as s,u as p,a as l,m as _,j as t,C as h}from"./index-0eb3fd9f.js";import{u as D,P as f}from"./useResize-a6416500.js";import{c as w,b as v}from"./drinksSelectors-29c49a96.js";import{D as $,a as P,b as j,c as z,d as C,e as E,f as N,g as y,h as I,i as S}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as M,a as O}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as R,D as F,N as L}from"./NotFoundComponent-d0c2ae07.js";const T=k.main`
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
  background-image: url(${$}), url(${M});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${P}), url(${O});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${j}), url(${z});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${C}), url(${E});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${N}), url(${y});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${I}), url(${S});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,H=()=>{const[a,d]=s.useState(1),{width:n}=D(),e=p(w),c=p(v),o=l();s.useEffect(()=>{o(_())},[o]);const r=n<1280?10:9,g=n<768?5:8,i=a*r,x=i-r,m=e.slice(x,i),u=b=>{d(b)};return t.jsx(T,{children:t.jsxs(h,{children:[t.jsx(R,{title:"My drinks"}),e&&e.length!==0?t.jsx(F,{items:m}):t.jsx(L,{error:c,message:"No own cocktails"}),e&&e.length!==0&&t.jsx(f,{currentPage:a,paginate:g,drinksPerPage:r,totalItems:e.length,nextPage:u})]})})};export{H as MyDrinksPage,H as default};
