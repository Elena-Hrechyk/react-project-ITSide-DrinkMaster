import{n as l,r as d,o as _,u as a,p as h,q as v,v as D,a as f,w,j as e,C as $,c as P,x as j}from"./index-8d944318.js";import{D as z,a as F,b as C,c as I,d as E,e as L,f as N,g as S,h as R,i as q}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as y,a as T}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as V}from"./Paginator-289938da.js";import{P as W,D as A,N as B}from"./NotFoundComponent-2121c2df.js";const G=l.main`
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
  background-image: url(${z}), url(${y});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${F}), url(${T});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${C}), url(${I});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${E}), url(${L});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${N}), url(${S});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${R}), url(${q});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Q=()=>{const[o,c]=d.useState(1),{width:i}=_(),g=a(h),x=a(v),t=a(D),n=f();d.useEffect(()=>{n(w())},[n]);const r=i<1280?10:9,m=i<768?5:8,s=o*r,u=s-r,p=t.slice(u,s),b=k=>{c(k)};return e.jsx(G,{children:e.jsxs($,{children:[e.jsx(W,{title:"Favorites"}),g?e.jsx(P,{}):e.jsxs(e.Fragment,{children:[p.length!==0?e.jsx(A,{items:t,deleteDrink:j}):e.jsx(B,{error:x,message:"No favorite cocktails"}),p.length!==0&&e.jsx(V,{currentPage:o,paginate:m,drinksPerPage:r,totalItems:t.length,nextPage:b})]})]})})};export{Q as default};
