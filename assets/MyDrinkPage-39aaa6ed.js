import{s as A,r as i,a as P,n as $,u as o,x as y,j as n,C as j,c as v,y as z}from"./index-c80193a8.js";import{c as B,b as C,a as E}from"./drinksSelectors-29c49a96.js";import{D as L,a as N,b as m,c as I,d as M}from"./Drinks_bg1_desk@2x-d1d7b4f3.js";import{P as O,D as S,N as F}from"./NotFoundComponent-56473132.js";import{P as R}from"./Paginator-9d6dbec8.js";const T=A.section`
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
  background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${L})`:null};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${N})`:null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?` url(${m})`:null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?` url(${m})`:null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${I})`:null};
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${M})`:null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
  }
`,H=({theme:e})=>{const[r,s]=i.useState(1),[d,b]=i.useState(0),c=P(),{width:p}=$(),g=o(B),l=o(C),k=o(E),a=g.length;i.useEffect(()=>{c(y()),a!==d&&(s(1),b(a))},[c,a,d]);const t=p<1280?10:9,h=p<768?5:8,u=Math.ceil(a/t),x=r*t,w=x-t,D=g.slice(w,x),f=_=>{s(_)};return n.jsx(T,{children:n.jsxs(j,{children:[n.jsx(O,{title:"My drinks"}),k?n.jsx(v,{}):n.jsxs(n.Fragment,{children:[a>0?n.jsx(S,{deleteDrink:z,items:D}):n.jsx(F,{error:l,message:"You haven't added any own cocktails yet"}),u>1&&n.jsx(R,{currentPage:r,totalPages:u,nextPage:f,paginate:h,theme:e})]})]})})};export{H as default};
