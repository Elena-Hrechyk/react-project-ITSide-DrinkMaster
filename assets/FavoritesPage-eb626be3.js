import{s as k,r as p,n as _,u as o,o as h,p as D,q as v,a as f,v as $,j as r,C as w,c as A,w as P}from"./index-c80193a8.js";import{D as j,a as z,b as F,c as y,d as B}from"./Drinks_bg1_desk@2x-d1d7b4f3.js";import{D as C,a as I}from"./Drinks_bg3_mob@2x-5e9320da.js";import{D as E,a as L,b as N,c as R,d as S}from"./Drinks_bg3_desk@2x-616f94f7.js";import{P as q}from"./Paginator-9d6dbec8.js";import{P as T,D as V,N as W}from"./NotFoundComponent-56473132.js";const G=k.main`
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
  background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${j}), url(${C})`:null};
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${z}), url(${I})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${E}), url(${F})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${L}), url(${N})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${y}), url(${R})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${B}),
      url(${S})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,U=()=>{const[e,c]=p.useState(1),{width:n}=_(),g=o(h),x=o(D),a=o(v),i=f();p.useEffect(()=>{i($())},[i]);const t=n<1280?10:9,u=n<768?5:8,s=e*t,b=s-t,d=a.slice(b,s),m=l=>{c(l)};return r.jsx(G,{children:r.jsxs(w,{children:[r.jsx(T,{title:"Favorites"}),g?r.jsx(A,{}):r.jsxs(r.Fragment,{children:[d.length!==0?r.jsx(V,{items:a,deleteDrink:P}):r.jsx(W,{error:x,message:"No favorite cocktails"}),d.length!==0&&r.jsx(q,{currentPage:e,paginate:u,drinksPerPage:t,totalItems:a.length,nextPage:m})]})]})})};export{U as default};
