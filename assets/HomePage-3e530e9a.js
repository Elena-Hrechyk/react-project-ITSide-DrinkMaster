import{s as n,N as s,n as e,u as d,j as i,a as m,b as g,r as h,g as x,C as f,H as b,L as y}from"./index-e6513676.js";import{s as u,a as k,b as w}from"./drinksSelectors-566d8060.js";const j=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],D=n.section`
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
`,v=n.div`
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`,z=n.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`,L=n.h1`
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
`,C=n.p`
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
`,S=n(s)`
  display: inline-block;
  width: 165px;
  margin-right: auto;
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 47px;
  color: #161f37;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.23;
  transition: outline var(--transition-dur-and-func);

  &:hover,
  &:focus {
    outline: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`,H=n.img`
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
`,I=n.ul`
  font-family: var(--font-main);
  margin-bottom: 40;
`,P=n.li`
  font-family: var(--font-main);
  margin-bottom: 40px;

  &:nth-child(n + 5) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,A=n.h3`
  margin-bottom: 24px;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
  }
`,E=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 20px;
  }
`,O=n(s)`
  display: block;
  width: 165px;
  padding: 14px 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 47px;
  color: #161f37;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.23;
  transition: outline var(--transition-dur-and-func);

  &:hover,
  &:focus {
    outline: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`,T=e.li`
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
`,F=e.img`
  width: 100%;
  object-fit: contain;
  margin-bottom: 14px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`,M=e.div`
  display: flex;
  justify-content: space-between;
`,B=e.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
`,N=e(s)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23;
`,U=({type:o})=>{const r=d(u).data;let a=[];return r&&(a=r.filter(t=>o===t.category)),i.jsx(i.Fragment,{children:a.map(({_id:t,drink:p,drinkThumb:l})=>i.jsxs(T,{children:[i.jsx(F,{src:l,alt:p,loading:"lazy"}),i.jsxs(M,{children:[i.jsx(B,{children:p}),i.jsx(N,{to:"/drinks",children:"See more"})]})]},t))})},W=()=>{const o=m(),c=d(k),r=d(g),a=d(w);return h.useEffect(()=>{o(x())},[o]),i.jsx(i.Fragment,{children:r&&i.jsx(D,{children:i.jsxs(f,{children:[i.jsxs(v,{children:[i.jsxs(z,{children:[i.jsx(L,{children:"Craft Your Perfect Drink with Drink Master"}),i.jsx(C,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the words finest beverages."}),i.jsx(S,{to:"/addDrink",children:"Add drink"})]}),i.jsx(H,{src:b,alt:"Coctail",loading:"lazy"})]}),c&&!a?i.jsx(y,{}):i.jsxs(i.Fragment,{children:[i.jsx(I,{children:j.map(t=>i.jsxs(P,{children:[i.jsx(A,{children:t.category}),i.jsx(E,{children:i.jsx(U,{type:t.category})})]},t.id))}),i.jsx(O,{to:"/drinks",children:"Other drinks"})]})]})})})};export{W as default};
