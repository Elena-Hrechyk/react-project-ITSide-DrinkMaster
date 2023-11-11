import{s as k,r as p,n as _,u as t,a as h,x as D,j as n,C as f,c as w,y as $}from"./index-10c3187c.js";import{c as v,b as A,a as P}from"./drinksSelectors-29c49a96.js";import{D as j,a as y,b as z,c as B,d as C,e as E,f as I,g as L,h as N,i as O}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as F,a as M}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as R,D as S,N as T}from"./NotFoundComponent-1e8e4645.js";import{P as V}from"./Paginator-078fef16.js";const W=k.main`
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
  background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${j}), url(${F})`:null};
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${y}), url(${M})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${z}), url(${B})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${C}), url(${E})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${I}), url(${L})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${N}),
      url(${O})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,U=()=>{const[e,c]=p.useState(1),{width:o}=_(),i=t(v),g=t(A),x=t(P),s=h();p.useEffect(()=>{s(D())},[s]);const r=o<1280?10:9,u=o<768?5:8,d=e*r,b=d-r,a=i.slice(b,d),m=l=>{c(l)};return n.jsx(W,{children:n.jsxs(f,{children:[n.jsx(R,{title:"My drinks"}),x?n.jsx(w,{}):n.jsxs(n.Fragment,{children:[a.length!==0?n.jsx(S,{deleteDrink:$,items:a}):n.jsx(T,{error:g,message:"No own cocktails"}),a.length!==0&&n.jsx(V,{currentPage:e,paginate:u,drinksPerPage:r,totalItems:i.length,nextPage:m})]})]})})};export{U as default};
