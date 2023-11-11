import{s as k,r as p,n as _,u as o,o as h,p as v,q as D,a as f,v as $,j as a,C as w,c as A,w as P}from"./index-10c3187c.js";import{D as j,a as z,b as F,c as y,d as B,e as C,f as I,g as E,h as L,i as N}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as R,a as S}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as q}from"./Paginator-078fef16.js";import{P as T,D as V,N as W}from"./NotFoundComponent-1e8e4645.js";const G=k.main`
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
  background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${j}), url(${R})`:null};
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${z}), url(${S})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${F}), url(${y})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${B}), url(${C})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${I}), url(${E})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${L}),
      url(${N})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Q=()=>{const[e,c]=p.useState(1),{width:n}=_(),g=o(h),x=o(v),r=o(D),i=f();p.useEffect(()=>{i($())},[i]);const t=n<1280?10:9,u=n<768?5:8,s=e*t,b=s-t,d=r.slice(b,s),m=l=>{c(l)};return a.jsx(G,{children:a.jsxs(w,{children:[a.jsx(T,{title:"Favorites"}),g?a.jsx(A,{}):a.jsxs(a.Fragment,{children:[d.length!==0?a.jsx(V,{items:r,deleteDrink:P}):a.jsx(W,{error:x,message:"No favorite cocktails"}),d.length!==0&&a.jsx(q,{currentPage:e,paginate:u,drinksPerPage:t,totalItems:r.length,nextPage:m})]})]})})};export{Q as default};
