import{n as b,r as s,u as p,a as l,q as _,j as t,C as h,t as D}from"./index-f33ea64b.js";import{u as w,P as f}from"./useResize-70f52dbc.js";import{D as v,a as $,b as P,c as j,d as z,e as C,f as E,g as N,h as y,i as I,l as O,k as S}from"./Drinks_bg3_desk@2x-86194370.js";import{D as M,a as R}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as q,D as F,N as L}from"./NotFoundComponent-02d128a6.js";const T=b.main`
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
  background-image: url(${v}), url(${M});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${$}), url(${R});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${P}), url(${j});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${z}), url(${C});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${E}), url(${N});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${y}), url(${I});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,H=()=>{const[a,d]=s.useState(1),{width:n}=w(),e=p(O),g=p(S),o=l();s.useEffect(()=>{o(_())},[o]);const r=n<1280?10:9,c=n<768?5:8,i=a*r,x=i-r,u=e.slice(x,i),m=k=>{d(k)};return t.jsx(T,{children:t.jsxs(h,{children:[t.jsx(q,{title:"My drinks"}),e&&e.length!==0?t.jsx(F,{deleteCard:D,items:u}):t.jsx(L,{error:g,message:"No own cocktails"}),e&&e.length!==0&&t.jsx(f,{currentPage:a,paginate:c,drinksPerPage:r,totalItems:e.length,nextPage:m})]})})};export{H as default};
