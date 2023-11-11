import{s as n,r as p,a as x,u as h,v as k,j as e,a8 as w,x as j,_ as g,a9 as v,aa as _,ab as D,C as z}from"./index-235d1527.js";import{a as $}from"./selectors-a7d85374.js";import{e as F}from"./drinksSelectors-29c49a96.js";import{D as y,a as I,b as T,c as B,d as R,e as S,f as A,g as C,h as E,i as M}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as P,a as H}from"./Drinks_bg3_mob@2x-5e9320da.js";const l=n.button`
  padding: 14px 40px;
  text-align: center;
  color: ${({theme:i})=>i.button.battonText};
  font-weight: 600;
  line-height: 1.29; /* 128.571% */
  border-radius: 42px;
  background-color: ${({theme:i})=>i.button.buttonBgc};
  margin-bottom: 80px;
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  text-align: justify;
  transition: all var(--transition-dur-and-func);

  &:focus,
  &:hover {
    background-color: ${({theme:i})=>i.button.buttonBgcHover};
    color: ${({theme:i})=>i.button.buttonTextHover};
    outline: 2px solid ${({theme:i})=>i.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 198px;
  }
`,L=({id:i,title:r})=>{const[t,a]=p.useState(!1),o=x(),s=h(k),d={id:i};console.log(s);const c=()=>g.success(`Great! ${r} is your favorite drink!`,{duration:4e3,position:"top-center",icon:"👏",style:{fontSize:"18px",border:"1px solid #F3F3F3",borderRadius:"10px",background:"#1f263f",color:"#F3F3F3"}}),f=()=>g.success(`${r} is not your favorite drink anymore!`,{duration:4e3,position:"top-center",style:{fontSize:"18px",border:"1px solid #F3F3F3",borderRadius:"10px",background:"#1f263f",color:"#F3F3F3"},iconTheme:{primary:"#7a2371",secondary:"#F3F3F3"}});return p.useEffect(()=>{s.length&&s.find(m=>a(m===i?m===i:!1))},[s,t,i]),e.jsx(e.Fragment,{children:t?e.jsx(e.Fragment,{children:e.jsx(l,{type:"button",onClick:()=>o(j(i)).then(()=>f()),children:"Remove from favorite drinks"})}):e.jsx(e.Fragment,{children:e.jsx(l,{type:"button",onClick:()=>o(w(d)).then(()=>c()),children:"Add to favorite drinks"})})})},G=n.h2`
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
`,N=({title:i})=>e.jsx(G,{children:i}),W=n.h4`
  color: ${({theme:i})=>i.linkSeeMore};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,q=n.ul`
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
  background-color: ${({theme:i})=>i.addDrinkImgBgc};
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
  color: ${({theme:i})=>i.linkSeeMore};
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
`,X=({data:i})=>{const r=[],t=x();p.useEffect(()=>{t(v())},[t]);const a=h($);return i.length&&i.map(({ingredientId:o,measure:s})=>(a.find(d=>{if(o===d._id){let c={measure:s};r.push({...d,...c})}}),r)),e.jsxs(e.Fragment,{children:[e.jsx(W,{children:"Ingredients"}),r.length?e.jsx(e.Fragment,{children:e.jsx(q,{children:e.jsx(e.Fragment,{children:r.map(o=>e.jsxs(J,{children:[e.jsx(K,{srcSet:`${o["thumb-small"]} 767w, ${o["thumb-medium"]} 1279w, ${o.ingredientThumb} 1680w`,src:o.ingredientThumb,alt:o.title,loading:"lazy"}),e.jsxs(O,{children:[e.jsx(Q,{children:o.title}),e.jsx(U,{children:o.measure})]})]},o._id))})})}):e.jsx(V,{children:"No information on ingredients"})]})},Y=n.section`
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
  background-image: url(${y}), url(${P});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${I}), url(${H});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${T}), url(${B});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${R}), url(${S});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${A}), url(${C});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${E}), url(${M});
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
`,ae="/react-project-ITSide-DrinkMaster/assets/recipe-preparation-94babfdc.jpg",he=()=>{const i=x(),{drinkId:r}=_(),t=h(a=>F(a,r));return p.useEffect(()=>{i(D(r))},[i,r]),e.jsx(Y,{children:e.jsxs(z,{children:[e.jsxs(Z,{children:[e.jsxs(ee,{children:[e.jsx(N,{title:t.drink}),e.jsxs(ie,{children:[t.glass," / ",t.alcoholic]}),t.description&&t.description.length?e.jsx(u,{children:t.description}):e.jsx(u,{children:"There is no information about the description of this cocktail!"}),e.jsx(L,{id:r,title:t.drink})]}),e.jsx(te,{src:t.drinkThumb,alt:t.drink,title:t.drink})]}),e.jsx(X,{data:t.ingredients}),e.jsx(ne,{children:"Recipe Preparation"}),e.jsxs(re,{children:[t.instructions&&t.instructions.length?e.jsx(b,{children:t.instructions}):e.jsx(b,{children:"There is no information about the preparation of this cocktail!"}),e.jsx(oe,{src:ae,alt:"Cocktails"})]})]})})};export{he as default};
