import{s as n,N as p,L as g,u as a,j as t,a as x,b as m,r as l,g as h,C as b,T as u,c as k}from"./index-235d1527.js";import{s as f,a as w,b as y}from"./drinksSelectors-29c49a96.js";import{D as v,a as D,b as _,c as j,d as $,e as z,f as L,g as H,h as C,i as T}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as S,a as B}from"./Drinks_bg3_mob@2x-5e9320da.js";const I=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],P=n.section`
  font-family: var(--font-main);
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${v}), url(${S});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${D}), url(${B});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${_}), url(${j});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${$}), url(${z});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${L}), url(${H});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${C}), url(${T});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,A=n.div`
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`,E=n.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`,O=n.h1`
  margin-bottom: 16px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.19;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1280) {
    margin-bottom: 28px;
    font-size: 64px;
    line-height: 1.06;
  }
`,F=n.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`,M=n(p)`
  display: inline-block;
  width: 165px;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 42px;
  background-color: ${({theme:i})=>i.button.buttonBgc};
  margin-bottom: 47px;
  color: ${({theme:i})=>i.button.battonText};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.23;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: ${({theme:i})=>i.button.buttonBgcHover};
    color: ${({theme:i})=>i.button.buttonTextHover};
    outline: 2px solid ${({theme:i})=>i.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`,N=n.img`
  display: block;
  width: 252px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 359px;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -57px;
    right: 36px;
  }
`,U=n.ul`
  margin-bottom: 40;
`,q=n.li`
  margin-bottom: 40px;

  &:nth-child(n + 5) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,R=n.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
  }
`,W=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 20px;
  }
`,Y=n(p)`
  display: block;
  width: 165px;
  padding: 14px 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 42px;
  background-color: ${({theme:i})=>i.button.buttonBgc};
  margin-bottom: 47px;
  color: ${({theme:i})=>i.button.battonText};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.23;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: ${({theme:i})=>i.button.buttonBgcHover};
    color: ${({theme:i})=>i.button.buttonTextHover};
    outline: 2px solid ${({theme:i})=>i.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`,G=n.li`
  font-family: var(--font-main);
  max-width: 335px;

  &:not(:first-child) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    min-width: 342px;

    &:not(:first-child) {
      display: block;
    }

    &:nth-child(n + 3) {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    min-width: 400px;

    &:nth-child(n + 3) {
      display: block;
    }

    &:nth-child(n + 4) {
      display: none;
    }
  }
`,J=n.img`
  width: 335px;
  height: 360px;
  object-fit: contain;
  margin-bottom: 14px;
  border-radius: 8px;
  object-fit: cover;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`,K=n.div`
  display: flex;
  justify-content: space-between;
`,Q=n.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
`,V=n(g)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: right;
  color: ${({theme:i})=>i.linkSeeMore};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,X=({type:i})=>{const o=a(f).data;let r=[];return o&&(r=o.filter(e=>i===e.category)),t.jsx(t.Fragment,{children:r.map(({_id:e,drink:s,drinkThumb:c})=>t.jsxs(G,{children:[t.jsx(J,{src:c,alt:s,loading:"lazy"}),t.jsxs(K,{children:[t.jsx(Q,{children:s}),t.jsx(V,{to:`/drinks/${e}`,children:"See more"})]})]},e))})},ei=()=>{const i=x(),d=a(w),o=a(m),r=a(y);return l.useEffect(()=>{i(h())},[i]),t.jsx(t.Fragment,{children:o&&t.jsx(P,{children:t.jsxs(b,{children:[t.jsxs(A,{children:[t.jsxs(E,{children:[t.jsx(O,{children:"Craft Your Perfect Drink with Drink Master"}),t.jsx(F,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the words finest beverages."}),t.jsx(M,{to:"/addDrink",children:"Add drink"})]}),t.jsx(N,{src:u,alt:"Coctail",loading:"lazy"})]}),d&&!r?t.jsx(k,{}):t.jsxs(t.Fragment,{children:[t.jsx(U,{children:I.map(e=>t.jsxs(q,{children:[t.jsx(R,{children:e.category}),t.jsx(W,{children:t.jsx(X,{type:e.category})})]},e.id))}),t.jsx(Y,{to:"/drinks",children:"Other drinks"})]})]})})})};export{ei as default};
