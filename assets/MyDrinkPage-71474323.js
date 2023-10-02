import{n as h,r as o,u as p,a as f,o as P,j as a}from"./index-d87c862d.js";import{u as k,P as w}from"./useResize-8e467873.js";import{c as D,b as j}from"./drinksSelectors-29c49a96.js";import{P as b,D as y,N as E}from"./NotFoundComponent-7758c837.js";const F=h.main`
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
`,M=()=>{const[e,d]=o.useState(1),{width:s}=k(),t=p(D),g=p(j),i=f();o.useEffect(()=>{i(P())},[i]);const n=s<1280?10:9,c=s<768?5:8,r=e*n,x=r-n,m=t.slice(x,r),l=u=>{d(u)};return a.jsxs(F,{children:[a.jsx(b,{title:"My drinks"}),t&&t.length!==0?a.jsx(y,{items:m}):a.jsx(E,{error:g,message:"No own cocktails"}),t&&t.length!==0&&a.jsx(w,{currentPage:e,paginate:c,drinksPerPage:n,totalItems:t.length,nextPage:l})]})};export{M as MyDrinksPage,M as default};
