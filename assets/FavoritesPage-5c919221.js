import{n as k,r as p,u as d,a as l,g as _,j as e,C as h}from"./index-0eb3fd9f.js";import{u as D,P as f}from"./useResize-a6416500.js";import{b as v,s as w}from"./drinksSelectors-29c49a96.js";import{P as $,D as P,N as j}from"./NotFoundComponent-d0c2ae07.js";import{D as z,a as C,b as E,c as N,d as F,e as I,f as S,g as y,h as R,i as q}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as A,a as L}from"./Drinks_bg3_mob@2x-5e9320da.js";const T=k.main`
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
  background-image: url(${z}), url(${A});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${C}), url(${L});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${E}), url(${N});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${F}), url(${I});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${S}), url(${y});
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
`,M=()=>{const[o,g]=p.useState(1),{width:i}=D(),a=i<1280?10:9,c=i<768?5:8,x=d(v),t=d(w),n=l();console.log(t),p.useEffect(()=>{n(_())},[n]);const u=r=>{if(r){const s=o*a,b=s-a;return r.data.slice(b,s)}},m=r=>{g(r)};return e.jsx(T,{children:e.jsxs(h,{children:[e.jsx($,{title:"Favorites"}),t&&t.length!==0?e.jsx(P,{items:u(t)}):e.jsx(j,{error:x,message:"No favorite cocktails"}),e.jsx(f,{currentPage:o,paginate:c,drinksPerPage:a,totalItems:t.quantity,nextPage:m})]})})};export{M as default};
