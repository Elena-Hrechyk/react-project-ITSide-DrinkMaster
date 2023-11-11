import{s as l,r as d,o as _,u as a,a as h,y as D,j as e,C as f,c as w,z as v}from"./index-235d1527.js";import{c as $,b as P,a as j}from"./drinksSelectors-29c49a96.js";import{D as z,a as C,b as E,c as I,d as L,e as N,f as y,g as O,h as F,i as M}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as R,a as S}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as T,D as V,N as W}from"./NotFoundComponent-a2ce37d6.js";import{P as q}from"./Paginator-82f575a5.js";const A=l.main`
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
  background-image: url(${z}), url(${R});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${C}), url(${S});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${E}), url(${I});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${L}), url(${N});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${y}), url(${O});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${F}), url(${M});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,U=()=>{const[n,c]=d.useState(1),{width:o}=_(),i=a($),g=a(P),x=a(j),s=h();d.useEffect(()=>{s(D())},[s]);const t=o<1280?10:9,m=o<768?5:8,p=n*t,u=p-t,r=i.slice(u,p),b=k=>{c(k)};return e.jsx(A,{children:e.jsxs(f,{children:[e.jsx(T,{title:"My drinks"}),x?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[r.length!==0?e.jsx(V,{deleteDrink:v,items:r}):e.jsx(W,{error:g,message:"No own cocktails"}),r.length!==0&&e.jsx(q,{currentPage:n,paginate:m,drinksPerPage:t,totalItems:i.length,nextPage:b})]})]})})};export{U as default};
