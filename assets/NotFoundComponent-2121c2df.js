import{n,j as i,G as c,a as m,A as g,T as l}from"./index-8d944318.js";const f=n.h1`
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
`,I=({title:t})=>i.jsx(i.Fragment,{children:i.jsx(f,{children:t})});function w(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(t)}n.div`
  width: 440px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;const u=n.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,b=n.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.286;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,j=n.p`
  line-height: 1.286;
  color: ${({theme:t})=>t.linkSeeMore};
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
    margin-bottom: 24px;
  }
`,k=n.p`
  height: 75px;
  overflow: clip;
  line-height: 1.286;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    height: 96px;
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
  }
`,H=n.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`,V=n.button`
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
`,z=n.button`
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
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`,v=({item:t,deleteDrink:e})=>{const{_id:o,drinkThumb:r,drink:a,alcoholic:p,description:s}=t,x=m(),h=g();return i.jsxs(i.Fragment,{children:[i.jsx(u,{src:r,alt:a}),i.jsx(b,{children:a}),i.jsx(j,{children:p}),i.jsx(k,{children:s}),i.jsxs(H,{children:[i.jsx(V,{onClick:()=>h(`/drinks/${o}`,{replace:!0}),children:"See more"}),i.jsx(z,{onClick:()=>x(e(o)),children:i.jsx(w,{})})]})]})},C=n.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 80px 20px;
  }
`,y=n.li`
  width: 440px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,Z=({items:t,deleteDrink:e})=>i.jsx(C,{children:t&&t.map(o=>i.jsx(y,{children:i.jsx(v,{item:o,deleteDrink:e})},o._id))}),M=n.section`
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
`,D=n.img`
  max-width: 198px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 261px;
  }
`,d=n.p`
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
`,B=({error:t,message:e})=>i.jsxs(M,{children:[i.jsx(D,{src:l}),t?i.jsx(d,{children:t}):i.jsx(d,{children:e})]});export{Z as D,B as N,I as P};
