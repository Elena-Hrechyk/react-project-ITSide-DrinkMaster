import{n,G as o,j as t}from"./index-dca34c9e.js";import{P as d,D as s}from"./Drinks_List-2b11f549.js";const p=n.main`
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
`,x=n.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 295px;
    padding: 0;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        max-width: 436px;
  };

`,e=n.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    color: rgba(243, 243, 243, 0.3);
    border: none;

    :hover {
        color: #161F37;
        background-color: #F3F3F3;
  }
`,c=n.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,r=n.li`
    
`,i=n.button`
    border-radius: 50%;
    border: none;
    background-color: inherit;
    color: #F3F3F3;
    padding: 10px;

    :hover {
    background-color: #161F37;
    }
`;function l(a){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(a)}function g(a){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(a)}const h=()=>t.jsxs(x,{children:[t.jsx(e,{type:"button",children:t.jsx(l,{})}),t.jsxs(c,{children:[t.jsx(r,{children:t.jsx(i,{children:"12"})}),t.jsx(r,{children:t.jsx(i,{children:"13"})}),t.jsx(r,{children:t.jsx(i,{children:"14"})}),t.jsx(r,{children:t.jsx(i,{children:"15"})}),t.jsx(r,{children:t.jsx(i,{children:"16"})})]}),t.jsx(e,{type:"button",children:t.jsx(g,{})})]}),j=()=>t.jsxs(p,{children:[t.jsx(d,{title:"Favorites"}),t.jsx(s,{}),t.jsx(h,{})]});export{j as FavoritesPage,j as default};
