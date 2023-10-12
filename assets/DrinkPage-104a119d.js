import{s as i,r as p,a as h,u as m,m as k,j as e,a1 as w,a2 as j,a3 as g,a4 as v,a5 as _,a6 as D,C as z}from"./index-d974c845.js";import{a as F}from"./selectors-a7d85374.js";import{D as y,a as I,b as $,c as T,d as R,e as S,f as B,g as A,h as C,i as E,n as P}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{D as L,a as M}from"./Drinks_bg3_mob@2x-5e9320da.js";const l=i.button`
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
`,G=({id:n,title:o})=>{const[t,a]=p.useState(!1),r=h(),s=m(k),d={id:n},c=()=>g.success(`Great! ${o} is your favorite drink!`,{duration:4e3,position:"top-center",icon:"👏",style:{fontSize:"18px",border:"1px solid #F3F3F3",borderRadius:"10px",background:"#1f263f",color:"#F3F3F3"}}),f=()=>g.success(`${o} is not your favorite drink anymore!`,{duration:4e3,position:"top-center",style:{fontSize:"18px",border:"1px solid #F3F3F3",borderRadius:"10px",background:"#1f263f",color:"#F3F3F3"},iconTheme:{primary:"#7a2371",secondary:"#F3F3F3"}});return p.useEffect(()=>{s.length&&s.find(x=>x===n?(console.log(x===n),a(x===n)):a(!1))},[s,t,n]),e.jsx(e.Fragment,{children:t?e.jsx(e.Fragment,{children:e.jsx(l,{type:"button",onClick:()=>r(j(n)).then(()=>f()),children:"Remove from favorite drinks"})}):e.jsx(e.Fragment,{children:e.jsx(l,{type:"button",onClick:()=>r(w(d)).then(()=>c()),children:"Add to favorite drinks"})})})},N=i.h2`
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
`,W=({title:n})=>e.jsx(N,{children:n}),q=i.h4`
  color: rgba(243, 243, 243, 0.5);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,H=i.ul`
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
`,J=i.li`
  width: 157px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`,K=i.img`
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
`,O=i.div`
  display: flex;
  justify-content: space-between;
`,Q=i.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33; /* 133.333% */
  }
`,U=i.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25; /* 133.333% */
  }
`,V=i.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,X=({data:n})=>{const o=[],t=h();p.useEffect(()=>{t(v())},[t]);const a=m(F);return n.length&&n.map(({ingredientId:r,measure:s})=>(a.find(d=>{if(r===d._id){let c={measure:s};o.push({...d,...c})}}),o)),e.jsxs(e.Fragment,{children:[e.jsx(q,{children:"Ingredients"}),o.length?e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsx(e.Fragment,{children:o.map(r=>e.jsxs(J,{children:[e.jsx(K,{srcSet:`${r["thumb-small"]} 767w, ${r["thumb-medium"]} 1279w, ${r.ingredientThumb} 1680w`,src:r.ingredientThumb,alt:r.title,loading:"lazy"}),e.jsxs(O,{children:[e.jsx(Q,{children:r.title}),e.jsx(U,{children:r.measure})]})]},r._id))})})}):e.jsx(V,{children:"No information on ingredients"})]})},Y=i.section`
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
  background-image: url(${y}), url(${L});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${I}), url(${M});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${$}), url(${T});
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
    background-image: url(${B}), url(${A});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${C}), url(${E});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Z=i.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
  }
`,ee=i.div`
  @media screen and (min-width: 1280px) {
    width: 593px;
  }
`,ie=i.p`
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
`,u=i.p`
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
`;const te=i.img`
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
`,ne=i.h4`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; /* 110% */
  }
`,b=i.p`
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
`,re=i.img`
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
`,oe=i.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    grid-gap: 60px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ae="/react-project-ITSide-DrinkMaster/assets/recipe-preparation-94babfdc.jpg",xe=()=>{const n=h(),{drinkId:o}=_(),t=m(a=>P(a,o));return p.useEffect(()=>{n(D(o))},[n,o]),e.jsx(Y,{children:e.jsxs(z,{children:[e.jsxs(Z,{children:[e.jsxs(ee,{children:[e.jsx(W,{title:t.drink}),e.jsxs(ie,{children:[t.glass," / ",t.alcoholic]}),t.description&&t.description.length?e.jsx(u,{children:t.description}):e.jsx(u,{children:"There is no information about the description of this cocktail!"}),e.jsx(G,{id:o,title:t.drink})]}),e.jsx(te,{src:t.drinkThumb,alt:t.drink,title:t.drink})]}),e.jsx(X,{data:t.ingredients}),e.jsx(ne,{children:"Recipe Preparation"}),e.jsxs(oe,{children:[t.instructions&&t.instructions.length?e.jsx(b,{children:t.instructions}):e.jsx(b,{children:"There is no information about the preparation of this cocktail!"}),e.jsx(re,{src:ae,alt:"Cocktails"})]})]})})};export{xe as default};
