import{s,G as m,r as l,D as e,k as x,j as r}from"./index-235d1527.js";const B=s.div`
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
  }
`,f=s.button`
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
`,C=s.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,F=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: none;
  background-color: ${t=>t.isSelected?t.focusColor:"inherit"};
  transition: all var(--transition-dur-and-func);

  color: ${t=>t.isSelected?t.focusText:"inherit"};

  &:hover,
  &:focus {
    background-color: ${({focusColor:t})=>t};
    color: #f3f3f3;
  }
`;function M(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(t)}function A(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(t)}const S=({totalPages:t,paginate:d,nextPage:b,currentPage:n,theme:i})=>{const[g,u]=l.useState(e.paginatorArrowColor),[w,p]=l.useState(e.paginatorFocusBgc),j=e.colorText,c=o=>{b(o)},a=[];for(let o=1;o<=t;o++)a.push(o);const k=()=>{const o=Math.floor(d/2),y=a.indexOf(n),h=Math.max(0,y-o),v=Math.min(a.length-1,h+d-1);return a.slice(h,v+1)};return l.useEffect(()=>{u(i==="dark"?e.paginatorArrowColor:x.paginatorArrowColor),p(i==="dark"?e.paginatorFocusBgc:x.paginatorFocusBgc)},[i]),r.jsxs(B,{children:[r.jsx(f,{type:"button",onClick:()=>c(n-1),disabled:n===1,children:r.jsx(M,{color:g})}),r.jsx(C,{children:k().map(o=>r.jsx("li",{children:r.jsx(F,{type:"button",onClick:()=>c(o),isSelected:o===n,focusColor:w,focusText:j,children:o})},o))}),r.jsx(f,{type:"button",onClick:()=>c(n+1),disabled:n===t,children:r.jsx(A,{color:g})})]})};export{S as P};
