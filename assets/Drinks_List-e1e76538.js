import{n,j as i,G as d}from"./index-8252574a.js";const a=n.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.188;
  color:  #F3F3F3;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.071
  };

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.063;
  }
`,H=({title:e})=>i.jsx(i.Fragment,{children:i.jsx(a,{children:e})});function x(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const s=n.div`
  max-width: 440px;
  
  @media screen and (min-width: 768px) {
    max-width: 342px;  
  };

  @media screen and (min-width: 1280px) {
    max-width: 400px;
  }
`,c=n.div`

`,h=n.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
  border-radius: 8px;
`,g=n.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.286;
  padding: 0px;
  margin: 0px;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.333;
    margin-top: 24px;
  };
  
`,l=n.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  color: rgba(243, 243, 243, 0.5);
  padding: 0px;
  margin: 0px;
  margin-top: 4px;
  
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  };

`,m=n.p`
  max-height: 93px;
  overflow: scroll;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  padding: 0px;
  margin: 0px;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
    margin-top: 24px;
  };
`,f=n.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  };
  
`,w=n.button`
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
  background-color: #161F37;
  color: #F3F3F3;

  :hover {
    color: #161F37;
    background-color: #F3F3F3;
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
    
  };
`,u=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 11px;
  border: none;
  border-radius: 42px;
  color: #F3F3F3;
  background-color: #161F37;

  :hover {
    color: #161F37;
    background-color: #F3F3F3;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  };  
`,j=({item:e})=>{const{drinkThumb:t,drink:o,alcoholic:r,description:p}=e;return i.jsxs(s,{children:[i.jsx(c,{children:i.jsx(h,{src:t,alt:"image"})}),i.jsx(g,{children:o}),i.jsx(l,{children:r}),i.jsx(m,{children:p}),i.jsxs(f,{children:[i.jsx(w,{children:"See more"}),i.jsx(u,{children:i.jsx(x,{})})]})]})},F=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  margin-top: 40px;
  gap: 40px 0px;

  @media screen and (min-width: 768px) {
    gap: 80px 20px;
  };
`,V=({items:e})=>i.jsx(F,{children:e&&e.map(t=>i.jsx("li",{children:i.jsx(j,{item:t})},t._id))});export{V as D,H as P};
