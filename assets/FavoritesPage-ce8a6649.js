import{n as f,r as p,u as d,a as h,g as P,j as a}from"./index-d8473b02.js";import{u as k,P as j}from"./useResize-65056f28.js";import{b as w,s as D}from"./drinksSelectors-29c49a96.js";import{P as b,D as F,N as A}from"./NotFoundComponent-6da33558.js";const E=f.main`
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
`,v=()=>{const[n,g]=p.useState(1),{width:r}=k(),s=r<1280?10:9,c=r<768?5:8,x=d(w),t=d(D),i=h();console.log(t),p.useEffect(()=>{i(P())},[i]);const m=e=>{if(e){const o=n*s,u=o-s;return e.data.slice(u,o)}},l=e=>{g(e)};return a.jsxs(E,{children:[a.jsx(b,{title:"Favorites"}),t&&t.length!==0?a.jsx(F,{items:m(t)}):a.jsx(A,{error:x,message:"No favorite cocktails"}),a.jsx(j,{currentPage:n,paginate:c,drinksPerPage:s,totalItems:t.quantity,nextPage:l})]})};export{v as FavoritesPage,v as default};
