import{n as a,u as n,j as t}from"./index-19c16160.js";import{s as d}from"./drinksSelectors-566d8060.js";import{P as p,D as r}from"./Drinks_List-70527856.js";const e=a.main`
  font-family: 'Manrope',Arial,sans-serif;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  color: #F3F3F3;
  background-color: #0A0A11;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 140px;
    padding-bottom: 140px;
    margin-left: auto;
    margin-right: auto;
  };

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 158px;
  }
`,g=()=>{const{data:i}=n(d);return t.jsxs(e,{children:[t.jsx(p,{title:"My drinks"}),t.jsx(r,{items:i})]})};export{g as MyDrinksPage,g as default};
