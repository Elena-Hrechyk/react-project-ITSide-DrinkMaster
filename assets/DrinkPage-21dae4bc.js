import{s as e,j as i,a as x,r as c,V as h,u as g,W as m,X as l,C as b}from"./index-54e11e06.js";import{a as u}from"./selectors-a7d85374.js";import{D as k,a as w,b as f,c as _,d as j,e as D,f as v,g as z,h as I,i as $,n as T}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{D as y,a as B}from"./Drinks_bg3_mob@2x-5e9320da.js";const R=e.h2`
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: calc(60 / 56);
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: calc(68 / 64);
  }
`,A=({title:r})=>i.jsx(R,{children:r}),E=e.h4`
  color: rgba(243, 243, 243, 0.5);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,P=e.ul`
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
`,C=e.li`
  width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,S=e.img`
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
`,F=e.div`
  display: flex;
  justify-content: space-between;
`,M=e.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33; /* 133.333% */
  }
`,W=e.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25; /* 133.333% */
  }
`,L=({data:r})=>{const t=[],n=x();c.useEffect(()=>{n(h())},[n]);const d=g(u);return r.map(({ingredientId:s,measure:o})=>(d.find(a=>{if(s===a._id){let p={measure:o};t.push({...a,...p})}}),t)),i.jsxs(i.Fragment,{children:[i.jsx(E,{children:"Ingredients"}),i.jsx(P,{children:i.jsx(i.Fragment,{children:t.map(({_id:s,title:o,measure:a,ingredientThumb:p})=>i.jsxs(C,{children:[i.jsx(S,{src:p,alt:o}),i.jsxs(F,{children:[i.jsx(M,{children:o}),i.jsx(W,{children:a})]})]},s))})})]})},V=e.section`
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
  background-image: url(${k}), url(${y});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${w}), url(${B});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${f}), url(${_});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${j}), url(${D});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${v}), url(${z});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${I}), url(${$});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,X=e.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
  }
`,q=e.div`
  @media screen and (min-width: 1280px) {
    width: 593px;
  }
`,G=e.p`
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
`,H=e.p`
  line-height: 1.23; /* 128.571% */
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,J=e.button`
  padding: 14px 40px;
  text-align: center;
  color: #161f37;
  font-weight: 600;
  line-height: 1.23; /* 128.571% */
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 198px;
  }
`,K=e.img`
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
`,N=e.h4`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; /* 110% */
  }
`,O=e.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38; /* 137.5% */
  }
`,Q=e.img`
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
`,U=e.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    grid-gap: 60px;
  }
`,Y="/react-project-ITSide-DrinkMaster/assets/recipe-preparation-94babfdc.jpg",ti=()=>{const r=x(),{drinkId:t}=m(),n=g(d=>T(d,t));return console.log(n),c.useEffect(()=>{r(l(t))},[r,t]),i.jsx(V,{children:i.jsxs(b,{children:[i.jsxs(X,{children:[i.jsxs(q,{children:[i.jsx(A,{title:n.drink}),i.jsxs(G,{children:[n.glass," / ",n.alcoholic]}),i.jsx(H,{children:n.description}),i.jsx(J,{type:"button",children:"Add to favorite drinks"})]}),i.jsx(K,{src:n.drinkThumb,alt:n.drink,title:n.drink})]}),i.jsx(L,{data:n.ingredients}),i.jsx(N,{children:"Recipe Preparation"}),i.jsxs(U,{children:[i.jsx(O,{children:n.instructions}),i.jsx(Q,{src:Y,alt:"Cocktails"})]})]})})};export{ti as default};
