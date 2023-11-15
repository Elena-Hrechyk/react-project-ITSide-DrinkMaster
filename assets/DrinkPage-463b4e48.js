import{s as n,r as c,a as x,u as h,q as k,j as i,a5 as w,w as j,_ as l,a6 as v,a7 as _,a8 as D,C as $}from"./index-c80193a8.js";import{a as y}from"./selectors-a7d85374.js";import{e as z}from"./drinksSelectors-29c49a96.js";import{D as F,a as I,b as A,c as T,d as B}from"./Drinks_bg1_desk@2x-d1d7b4f3.js";import{D as R,a as S}from"./Drinks_bg3_mob@2x-5e9320da.js";import{D as C,a as E,b as M,c as P,d as H}from"./Drinks_bg3_desk@2x-616f94f7.js";const g=n.button`
  padding: 14px 40px;
  text-align: center;
  color: ${({theme:e})=>e.button.battonText};
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
  border-radius: 42px;
  background-color: ${({theme:e})=>e.button.buttonBgc};
  margin-bottom: 80px;
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  text-align: justify;
  transition: all var(--transition-dur-and-func);

  &:focus,
  &:hover {
    background-color: ${({theme:e})=>e.button.buttonBgcHover};
    color: ${({theme:e})=>e.button.buttonTextHover};
    outline: 2px solid ${({theme:e})=>e.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 198px;
  }
`,L=({id:e,title:r})=>{const[t,a]=c.useState(!1),o=x(),s=h(k),d={id:e},p=()=>l.success(`Great! ${r} is your favorite drink!`,{duration:4e3,position:"top-center",icon:"👏",style:{fontSize:"18px",border:"1px solid #F3F3F3",borderRadius:"10px",background:"#1f263f",color:"#F3F3F3"}}),f=()=>l.success(`${r} is not your favorite drink anymore!`,{duration:4e3,position:"top-center",style:{fontSize:"18px",border:"1px solid #F3F3F3",borderRadius:"10px",background:"#1f263f",color:"#F3F3F3"},iconTheme:{primary:"#7a2371",secondary:"#F3F3F3"}});return c.useEffect(()=>{s.length&&s.find(m=>a(m===e?m===e:!1))},[s,t,e]),i.jsx(i.Fragment,{children:t?i.jsx(i.Fragment,{children:i.jsx(g,{type:"button",onClick:()=>o(j(e)).then(()=>f()),children:"Remove from favorite drinks"})}):i.jsx(i.Fragment,{children:i.jsx(g,{type:"button",onClick:()=>o(w(d)).then(()=>p()),children:"Add to favorite drinks"})})})},q=n.h2`
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: calc(60 / 56);
  }

  @media screen and (min-width: 1280px) {
    font-size: 62px;
    line-height: calc(68 / 64);
  }
`,G=({title:e})=>i.jsx(q,{children:e}),N=n.h4`
  color: ${({theme:e})=>e.linkSeeMore};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,W=n.ul`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    grid-gap: 35px;
    width: 100%;
  }
`,J=n.li`
  width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,K=n.img`
  width: 157px;
  height: 157px;
  padding: 25px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.addDrinkImgBgc};
  margin-bottom: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,O=n.div`
  display: flex;
  justify-content: space-between;
`,Q=n.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33; /* 133.333% */
  }
`,U=n.p`
  color: ${({theme:e})=>e.linkSeeMore};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25; /* 133.333% */
  }
`,V=n.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,X=({data:e})=>{const r=[],t=x();c.useEffect(()=>{t(v())},[t]);const a=h(y);return e.length&&e.map(({ingredientId:o,measure:s})=>(a.find(d=>{if(o===d._id){let p={measure:s};r.push({...d,...p})}}),r)),i.jsxs(i.Fragment,{children:[i.jsx(N,{children:"Ingredients"}),r.length?i.jsx(i.Fragment,{children:i.jsx(W,{children:i.jsx(i.Fragment,{children:r.map(o=>i.jsxs(J,{children:[i.jsx(K,{srcSet:`${o["thumb-small"]} 767w, ${o["thumb-medium"]} 1279w, ${o.ingredientThumb} 1680w`,src:o.ingredientThumb,alt:o.title,loading:"lazy"}),i.jsxs(O,{children:[i.jsx(Q,{children:o.title}),i.jsx(U,{children:o.measure})]})]},o._id))})})}):i.jsx(V,{children:"No information on ingredients"})]})},Y=n.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 158px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${F}), url(${R})`:null};
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${I}), url(${S})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${C}), url(${A})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${E}), url(${M})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${T}), url(${P})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${B}),
      url(${H})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Z=n.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
  }
`,ee=n.div`
  @media screen and (min-width: 1280px) {
    width: 593px;
  }
`,ie=n.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  line-height: 1.17; /* 116.667% */
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.25; /* 125% */
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`,u=n.p`
  line-height: 1.23; /* 128.571% */
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,te=n.img`
  width: 335px;
  height: 400px;
  margin-bottom: 18px;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    margin-bottom: 0;
  }
`,ne=n.h4`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; /* 110% */
  }
`,b=n.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38; /* 137.5% */
  }

  @media screen and (min-width: 1280px) {
    width: 549px; /* 137.5% */
  }
`,oe=n.img`
  width: 335px;
  height: 430px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 430px;
  }

  @media screen and (min-width: 1280px) {
    width: 631px;
    height: 480px;
  }
`,re=n.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    grid-gap: 60px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ae="/react-project-ITSide-DrinkMaster/assets/recipe-preparation-94babfdc.jpg",me=()=>{const e=x(),{drinkId:r}=_(),t=h(a=>z(a,r));return c.useEffect(()=>{e(D(r))},[e,r]),i.jsx(Y,{children:i.jsxs($,{children:[i.jsxs(Z,{children:[i.jsxs(ee,{children:[i.jsx(G,{title:t.drink}),i.jsxs(ie,{children:[t.glass," / ",t.alcoholic]}),t.description&&t.description.length?i.jsx(u,{children:t.description}):i.jsx(u,{children:"There is no information about the description of this cocktail!"}),i.jsx(L,{id:r,title:t.drink})]}),i.jsx(te,{src:t.drinkThumb,alt:t.drink,title:t.drink})]}),i.jsx(X,{data:t.ingredients}),i.jsx(ne,{children:"Recipe Preparation"}),i.jsxs(re,{children:[t.instructions&&t.instructions.length?i.jsx(b,{children:t.instructions}):i.jsx(b,{children:"There is no information about the preparation of this cocktail!"}),i.jsx(oe,{src:ae,alt:"Cocktails"})]})]})})};export{me as default};
