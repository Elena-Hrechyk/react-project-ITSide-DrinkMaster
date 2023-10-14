import{n as l,r as d,u as a,m as _,o as h,p as D,a as v,q as f,j as e,C as w,L as $,t as P}from"./index-14f86d25.js";import{u as j,P as z}from"./useResize-b63a47c1.js";import{D as F,a as C,b as I,c as L,d as E,e as N,f as S,g as R,h as q,i as y}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as T,a as V}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as W,D as A,N as B}from"./NotFoundComponent-7cba3655.js";const G=l.main`
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
  background-image: url(${F}), url(${T});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${C}), url(${V});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${I}), url(${L});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${E}), url(${N});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${S}), url(${R});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${q}), url(${y});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Q=()=>{const[o,g]=d.useState(1),{width:i}=j(),c=a(_),x=a(h),t=a(D),n=v();d.useEffect(()=>{n(f())},[n]);const r=i<1280?10:9,m=i<768?5:8,s=o*r,u=s-r,p=t.slice(u,s),b=k=>{g(k)};return e.jsx(G,{children:e.jsxs(w,{children:[e.jsx(W,{title:"Favorites"}),c?e.jsx($,{}):e.jsxs(e.Fragment,{children:[p.length!==0?e.jsx(A,{items:t,deleteDrink:P}):e.jsx(B,{error:x,message:"No favorite cocktails"}),p.length!==0&&e.jsx(z,{currentPage:o,paginate:m,drinksPerPage:r,totalItems:t.length,nextPage:b})]})]})})};export{Q as default};
