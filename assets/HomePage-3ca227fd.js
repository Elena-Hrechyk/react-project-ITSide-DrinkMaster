import{s as t,N as c,p as e,m as s,j as i,u as x,n as m,r as g,q as l,t as f}from"./index-1e2e3b70.js";import{s as w,a as b,b as y}from"./drinksSelectors-566d8060.js";import{C as k,M as u}from"./hero-drink-master-4b93133e.js";const j=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],D=t.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
  }
`,z=t.div`
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`,L=t.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`,C=t.h1`
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
`,S=t.p`
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
`,v=t(c)`
  display: inline-block;
  width: auto;
  margin-right: auto;
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 47px;
  color: #161f37;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`,H=t.img`
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
`,I=t.ul`
  margin-bottom: 40;
`,M=t.li`
  margin-bottom: 40px;

  &:nth-child(n + 5) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,P=t.h3`
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
`,A=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 20px;
  }
`,E=t(c)`
  display: block;
  width: 163px;
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

  @media screen and (min-width: 768px) {
    width: 183px;
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`;e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  margin-top: 40px;
  gap: 40px 0px;

  @media screen and (min-width: 768px) {
    gap: 80px 20px;
  }
`;const O=e.li`
  width: 335px;

  &:not(:first-child) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 342px;

    &:not(:first-child) {
      display: block;
    }

    &:nth-child(n + 3) {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 400px;

    &:nth-child(n + 3) {
      display: block;
    }

    &:nth-child(n + 4) {
      display: none;
    }
  }
`,T=e.img`
  width: auto;
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
`,F=e.div`
  display: flex;
  justify-content: space-between;
`,q=e.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13; /* 112.5% */
`,B=e.a`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23;
`,N=({type:o})=>{const r=s(w).data;let a=[];return r&&(a=r.filter(n=>o===n.category)),i.jsx(i.Fragment,{children:a.map(({_id:n,drink:p,drinkThumb:h})=>i.jsxs(O,{children:[i.jsx(T,{src:h,alt:p,width:400}),i.jsxs(F,{children:[i.jsx(q,{children:p}),i.jsx(B,{href:"",children:"See more"})]})]},n))})},W=()=>{const o=x(),d=s(b),r=s(m),a=s(y);return g.useEffect(()=>{o(l())},[o]),i.jsx(i.Fragment,{children:r&&i.jsx(D,{children:i.jsxs(k,{children:[i.jsxs(z,{children:[i.jsxs(L,{children:[i.jsx(C,{children:"Craft Your Perfect Drink with Drink Master"}),i.jsx(S,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the words finest beverages."}),i.jsx(v,{to:"/addDrink",children:"Add drink"})]}),i.jsx(H,{src:u,alt:"Coctail"})]}),d&&!a?i.jsx(f,{}):i.jsxs(i.Fragment,{children:[i.jsx(I,{children:j.map(n=>i.jsxs(M,{children:[i.jsx(P,{children:n.category}),i.jsx(A,{children:i.jsx(N,{type:n.category})})]},n.id))}),i.jsx(E,{to:"/drinks",children:"Other drinks"})]})]})})})};export{W as default};
