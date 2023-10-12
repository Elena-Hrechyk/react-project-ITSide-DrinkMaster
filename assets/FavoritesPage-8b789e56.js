import{n as k,r as d,u as c,m as l,a as _,o as h,j as t,C as f,p as D}from"./index-881cfd01.js";import{u as v,P as w}from"./useResize-a0133822.js";import{D as $,a as P,b as j,c as z,d as C,e as F,f as E,g as N,h as I,i as S,k as R}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{P as y,D as L,N as T}from"./NotFoundComponent-36b04c3b.js";import{D as V,a as W}from"./Drinks_bg3_mob@2x-5e9320da.js";const q=k.main`
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
  background-image: url(${$}), url(${V});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${P}), url(${W});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${j}), url(${z});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${C}), url(${F});
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
    background-image: url(${I}), url(${S});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,M=()=>{const[o,g]=d.useState(1),{width:i}=v(),a=i<1280?10:9,x=i<768?5:8,u=c(R),e=c(l),n=_();d.useEffect(()=>{n(h())},[n]);const m=r=>{if(r){const s=o*a,p=s-a;if(p>0)return r.data.slice(p,s)}},b=r=>{g(r)};return t.jsx(q,{children:t.jsxs(f,{children:[t.jsx(y,{title:"Favorites"}),e&&e.length!==0?t.jsx(L,{deleteCard:D,items:m(e)}):t.jsx(T,{error:u,message:"No favorite cocktails"}),e&&e.length!==0&&t.jsx(w,{currentPage:o,paginate:x,drinksPerPage:a,totalItems:e.length,nextPage:b})]})})};export{M as default};
