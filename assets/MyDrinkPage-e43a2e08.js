import{n as l,r as d,u as a,a as _,v as h,j as e,C as D,L as w,w as f}from"./index-14f86d25.js";import{u as v,P as $}from"./useResize-b63a47c1.js";import{c as P,b as j,a as z}from"./drinksSelectors-29c49a96.js";import{D as C,a as L,b as E,c as I,d as N,e as y,f as O,g as S,h as F,i as M}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as R,a as T}from"./Drinks_bg3_mob@2x-5e9320da.js";import{P as V,D as W,N as q}from"./NotFoundComponent-7cba3655.js";const A=l.main`
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
  background-image: url(${C}), url(${R});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${L}), url(${T});
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
    background-image: url(${N}), url(${y});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${O}), url(${S});
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
`,U=()=>{const[n,c]=d.useState(1),{width:o}=v(),i=a(P),g=a(j),x=a(z),s=_();d.useEffect(()=>{s(h())},[s]);const t=o<1280?10:9,m=o<768?5:8,p=n*t,u=p-t,r=i.slice(u,p),b=k=>{c(k)};return e.jsx(A,{children:e.jsxs(D,{children:[e.jsx(V,{title:"My drinks"}),x?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[r.length!==0?e.jsx(W,{deleteDrink:f,items:r}):e.jsx(q,{error:g,message:"No own cocktails"}),r.length!==0&&e.jsx($,{currentPage:n,paginate:m,drinksPerPage:t,totalItems:i.length,nextPage:b})]})]})})};export{U as default};
