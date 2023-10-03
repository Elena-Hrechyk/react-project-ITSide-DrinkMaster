import{s as i,r as c,a as x,u as g,j as e,a1 as m,a2 as l,a3 as b,a4 as u,a5 as f,C as k}from"./index-f33ea64b.js";import{n as w,D as j,a as _,b as v,c as D,d as z,e as I,f as y,g as $,h as T,i as F,o as R}from"./Drinks_bg3_desk@2x-86194370.js";import{a as B}from"./selectors-a7d85374.js";import{D as A,a as C}from"./Drinks_bg3_mob@2x-5e9320da.js";const h=i.button`
  padding: 14px 40px;
  text-align: center;
  color: #161f37;
  font-weight: 600;
  line-height: 1.23; /* 128.571% */
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 80px;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: justify;

  &:focus,
  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 198px;
  }
`,S=({id:n})=>{const[r,t]=c.useState(!1),o=x(),a=g(w),d={_id:n};return a.length?(a.find(s=>{if(s===n)return t(!1)}),t(!0)):e.jsx(e.Fragment,{children:r?e.jsx(e.Fragment,{children:e.jsx(h,{type:"button",onClick:()=>o(l(n)),children:"Remove from favorite drinks"})}):e.jsx(e.Fragment,{children:e.jsx(h,{type:"button",onClick:()=>o(m(d)),children:"Add to favorite drinks"})})})},E=i.h2`
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
`,P=({title:n})=>e.jsx(E,{children:n}),L=i.h4`
  color: rgba(243, 243, 243, 0.5);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,M=i.ul`
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
`,W=i.li`
  width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,q=i.img`
  width: 157px;
  height: 157px;
  padding: 25px;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
  margin-bottom: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,G=i.div`
  display: flex;
  justify-content: space-between;
`,H=i.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33; /* 133.333% */
  }
`,J=i.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25; /* 133.333% */
  }
`,K=({data:n})=>{const r=[],t=x();c.useEffect(()=>{t(b())},[t]);const o=g(B);return n.map(({ingredientId:a,measure:d})=>(o.find(s=>{if(a===s._id){let p={measure:d};r.push({...s,...p})}}),r)),e.jsxs(e.Fragment,{children:[e.jsx(L,{children:"Ingredients"}),e.jsx(M,{children:e.jsx(e.Fragment,{children:r.map(({_id:a,title:d,measure:s,ingredientThumb:p})=>e.jsxs(W,{children:[e.jsx(q,{src:p,alt:d}),e.jsxs(G,{children:[e.jsx(H,{children:d}),e.jsx(J,{children:s})]})]},a))})})]})},N=i.section`
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
  background-image: url(${j}), url(${A});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${_}), url(${C});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${v}), url(${D});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${z}), url(${I});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${y}), url(${$});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${T}), url(${F});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,O=i.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
  }
`,Q=i.div`
  @media screen and (min-width: 1280px) {
    width: 593px;
  }
`,U=i.p`
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
`,V=i.p`
  line-height: 1.23; /* 128.571% */
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;i.button`
  padding: 14px 40px;
  text-align: center;
  color: #161f37;
  font-weight: 600;
  line-height: 1.23; /* 128.571% */
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 80px;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: justify;

  &:focus,
  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 198px;
  }
`;const X=i.img`
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
`,Y=i.h4`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; /* 110% */
  }
`,Z=i.p`
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
`,ee=i.img`
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
`,ie=i.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    grid-gap: 60px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,te="/react-project-ITSide-DrinkMaster/assets/recipe-preparation-94babfdc.jpg",de=()=>{const n=x(),{drinkId:r}=u(),t=g(o=>R(o,r));return c.useEffect(()=>{n(f(r))},[n,r]),e.jsx(N,{children:e.jsxs(k,{children:[e.jsxs(O,{children:[e.jsxs(Q,{children:[e.jsx(P,{title:t.drink}),e.jsxs(U,{children:[t.glass," / ",t.alcoholic]}),e.jsx(V,{children:t.description}),e.jsx(S,{id:r})]}),e.jsx(X,{src:t.drinkThumb,alt:t.drink,title:t.drink})]}),e.jsx(K,{data:t.ingredients}),e.jsx(Y,{children:"Recipe Preparation"}),e.jsxs(ie,{children:[e.jsx(Z,{children:t.instructions}),e.jsx(ee,{src:te,alt:"Cocktails"})]})]})})};export{de as default};
