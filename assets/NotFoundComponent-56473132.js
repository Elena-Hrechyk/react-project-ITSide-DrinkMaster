import{s as t,j as i,G as h,L as m,a as c,T as l}from"./index-c80193a8.js";const g=t.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.188;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 56px;
    line-height: 1.071;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.063;
  }
`,D=({title:n})=>i.jsx(i.Fragment,{children:i.jsx(g,{children:n})});function f(n){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(n)}t.div`
  width: 440px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;const w=t.img`
  display: block;
  width: 100%;
  height: 360px;
  object-fit: cover;
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,b=t.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.286;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,u=t.p`
  line-height: 1.286;
  color: ${({theme:n})=>n.linkSeeMore};
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
    margin-bottom: 24px;
  }
`,j=t.p`
  height: 75px;
  overflow: clip;
  line-height: 1.286;
  margin-bottom: 18px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
    -webkit-line-clamp: 5;
  }
  @media screen and (min-width: 1280px) {
    height: 90px;
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
    -webkit-line-clamp: 4;
  }
`,k=t.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`,H=t(m)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 5px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #161f37;
    background-color: #f3f3f3;
    outline: 1px solid
      ${({theme:n})=>n.body==="#F3F3F3"&&n.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.125;
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 18px;
    padding-bottom: 18px;
    margin-right: 8px;
  }
`,v=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 11px;
  border: none;
  border-radius: 42px;
  color: #f3f3f3;
  background-color: #161f37;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #161f37;
    background-color: #f3f3f3;
    outline: 1px solid
      ${({theme:n})=>n.body==="#F3F3F3"&&n.button.buttonBorderHover};
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`,V=({item:n,deleteDrink:e})=>{const{_id:o,drinkThumb:a,drink:d,alcoholic:p,description:s}=n,x=c();return i.jsxs(i.Fragment,{children:[i.jsx(w,{src:a,alt:d}),i.jsx(b,{children:d}),i.jsx(u,{children:p}),i.jsx(j,{children:s}),i.jsxs(k,{children:[i.jsx(H,{to:`/drinks/${o}`,children:"See more"}),i.jsx(v,{onClick:()=>x(e(o)),children:i.jsx(f,{})})]})]})},z=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 80px 20px;
  }
`,y=t.li`
  width: 335px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,B=({items:n,deleteDrink:e})=>i.jsx(z,{children:n&&n.map(o=>i.jsx(y,{children:i.jsx(V,{item:o,deleteDrink:e})},o._id))}),C=t.section`
  max-width: 205px;
  padding-bottom: 0;
  padding-top: 11px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 261px;
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 67px;
  }
`,F=t.img`
  max-width: 198px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 261px;
  }
`,r=t.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.286;
  padding: 0px;
  margin: 0px;
  line-height: 1.286;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }
`,T=({error:n,message:e})=>i.jsxs(C,{children:[i.jsx(F,{src:l}),n?i.jsx(r,{children:n}):i.jsx(r,{children:e})]});export{B as D,T as N,D as P};
