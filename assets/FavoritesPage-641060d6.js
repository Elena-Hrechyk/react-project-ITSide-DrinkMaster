import{n as m,r as c,u as l,j as t}from"./index-3127a999.js";import{u,P as f}from"./useResize-950fda9b.js";import{s as h}from"./drinksSelectors-b215b829.js";import{P,D as w}from"./Drinks_List-223bec43.js";const j=m.main`
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
`,A=()=>{const[e,r]=c.useState(1),{width:i}=u(),a=i<1280?10:9,o=i<768?5:8,{data:n}=l(h),s=e*a,p=s-a,d=n.slice(p,s),g=x=>{r(x)};return t.jsxs(j,{children:[t.jsx(P,{title:"Favorites"}),t.jsx(w,{items:d}),t.jsx(f,{currentPage:e,paginate:o,drinksPerPage:a,totalItems:n.length,nextPage:g})]})};export{A as FavoritesPage,A as default};
