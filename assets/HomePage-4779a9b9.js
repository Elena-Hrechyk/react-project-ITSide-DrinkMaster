import{s as n,N as c,n as o,L as x,u as d,j as t,a as m,b as l,r as h,g as b,C as u,T as k,c as f}from"./index-8d944318.js";import{s as w,a as y,b as v}from"./drinksSelectors-29c49a96.js";import{D,a as _,b as j,c as $,d as z,e as L,f as H,g as C,h as S,i as T}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as B,a as I}from"./Drinks_bg3_mob@2x-5e9320da.js";const P=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],A=n.section`
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
  background-image: url(${D}), url(${B});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${_}), url(${I});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${j}), url(${$});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${z}), url(${L});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${H}), url(${C});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${S}), url(${T});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,E=n.div`
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`,O=n.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`,F=n.h1`
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
`,M=n.p`
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
`,N=n(c)`
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
`,U=n.img`
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
`,q=n.ul`
  margin-bottom: 40;
`,R=n.li`
  margin-bottom: 40px;

  &:nth-child(n + 5) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,W=n.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
  }
`,Y=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 20px;
  }
`,G=n(c)`
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
`,J=o.li`
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
`,K=o.img`
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
`,Q=o.div`
  display: flex;
  justify-content: space-between;
`,V=o.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
`,X=o(x)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: right;
  color: ${({theme:i})=>i.linkSeeMore};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,Z=({type:i})=>{const r=d(w).data;let a=[];return r&&(a=r.filter(e=>i===e.category)),t.jsx(t.Fragment,{children:a.map(({_id:e,drink:p,drinkThumb:g})=>t.jsxs(J,{children:[t.jsx(K,{src:g,alt:p,loading:"lazy"}),t.jsxs(Q,{children:[t.jsx(V,{children:p}),t.jsx(X,{to:`/drinks/${e}`,children:"See more"})]})]},e))})},oi=()=>{const i=m(),s=d(y),r=d(l),a=d(v);return h.useEffect(()=>{i(b())},[i]),t.jsx(t.Fragment,{children:r&&t.jsx(A,{children:t.jsxs(u,{children:[t.jsxs(E,{children:[t.jsxs(O,{children:[t.jsx(F,{children:"Craft Your Perfect Drink with Drink Master"}),t.jsx(M,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the words finest beverages."}),t.jsx(N,{to:"/addDrink",children:"Add drink"})]}),t.jsx(U,{src:k,alt:"Coctail",loading:"lazy"})]}),s&&!a?t.jsx(f,{}):t.jsxs(t.Fragment,{children:[t.jsx(q,{children:P.map(e=>t.jsxs(R,{children:[t.jsx(W,{children:e.category}),t.jsx(Y,{children:t.jsx(Z,{type:e.category})})]},e.id))}),t.jsx(G,{to:"/drinks",children:"Other drinks"})]})]})})})};export{oi as default};
