import{n as k,r as p,u as d,a as l,g as _,j as e,C as h}from"./index-a37bf858.js";import{u as D,P as f}from"./useResize-aae60e47.js";import{D as v,a as w,b as $,c as P,d as j,e as z,f as C,g as E,h as N,i as F,k as I,s as S}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{P as y,D as R,N as q}from"./NotFoundComponent-c13162f5.js";import{D as A,a as L}from"./Drinks_bg3_mob@2x-5e9320da.js";const T=k.main`
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
  background-image: url(${v}), url(${A});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${w}), url(${L});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${$}), url(${P});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${j}), url(${z});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${C}), url(${E});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${N}), url(${F});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,K=()=>{const[o,g]=p.useState(1),{width:n}=D(),a=n<1280?10:9,c=n<768?5:8,x=d(I),t=d(S),i=l();console.log(t),p.useEffect(()=>{i(_())},[i]);const u=r=>{if(r){const s=o*a,b=s-a;return r.data.slice(b,s)}},m=r=>{g(r)};return e.jsx(T,{children:e.jsxs(h,{children:[e.jsx(y,{title:"Favorites"}),t&&t.length!==0?e.jsx(R,{items:u(t)}):e.jsx(q,{error:x,message:"No favorite cocktails"}),e.jsx(f,{currentPage:o,paginate:c,drinksPerPage:a,totalItems:t.quantity,nextPage:m})]})})};export{K as default};
