import{n as o,G as g,j as t,u as m,r as c}from"./index-fc177097.js";import{s as f}from"./drinksSelectors-42b0ca3e.js";import{P as j,D as b}from"./Drinks_List-5a88a9ea.js";const w=o.main`
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
`,k=o.div`
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
        margin-top: 80px;
  };

`,l=o.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    color: rgba(243, 243, 243, 0.3);
    border: none;

    /* :hover {
        color: #161F37;
        background-color: #F3F3F3;
  } */
`,F=o.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,y=o.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    border: none;
    background-color: inherit;
    color: #F3F3F3;

    :hover {
        background-color: #161F37;
    }
`;function v(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(e)}function P(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const M=({drinksPerPage:e,totalItems:s,paginate:a,nextPage:r,prevPage:d})=>{const p=[];for(let n=1;n<=Math.ceil(s/e);n++)p.push(n);return t.jsxs(k,{children:[t.jsx(l,{type:"button",onClick:d,children:t.jsx(v,{})}),t.jsx(F,{children:p.map(n=>t.jsx("li",{children:t.jsx(y,{type:"button",onClick:()=>a(n),children:n})},n))}),t.jsx(l,{type:"button",onClick:r,children:t.jsx(P,{})})]})},D=()=>{const{data:e}=m(f),[s,a]=c.useState(1),[r]=c.useState(9),d=s*r,p=d-r,n=e.slice(p,d),x=i=>a(i),u=()=>a(i=>i+1),h=()=>a(i=>i-1);return t.jsxs(w,{children:[t.jsx(j,{title:"Favorites"}),t.jsx(b,{items:n}),t.jsx(M,{currentPage:s,paginate:x,drinksPerPage:r,totalItems:e.length,nextPage:u,prevPage:h})]})};export{D as FavoritesPage,D as default};
