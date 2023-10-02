import{n,j as i,G as r,T as x}from"./index-d8473b02.js";const s=n.h1`
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
`,v=({title:e})=>i.jsx(i.Fragment,{children:i.jsx(s,{children:e})});function h(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const g=n.div`
  max-width: 440px;
  
  @media screen and (min-width: 768px) {
    max-width: 342px;  
  };

  @media screen and (min-width: 1280px) {
    max-width: 400px;
  }
`,c=n.div`

`,m=n.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
  border-radius: 8px;
`,l=n.h3`
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
  
`,f=n.p`
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

`,w=n.p`
  max-height: 93px;
  overflow: clip;
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
`,u=n.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  };
  
`,j=n.button`
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
`,b=n.button`
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
`,F=({item:e})=>{const{drinkThumb:t,drink:p,alcoholic:d,description:o}=e;return i.jsxs(g,{children:[i.jsx(c,{children:i.jsx(m,{src:t,alt:"image"})}),i.jsx(l,{children:p}),i.jsx(f,{children:d}),i.jsx(w,{children:o}),i.jsxs(u,{children:[i.jsx(j,{children:"See more"}),i.jsx(b,{children:i.jsx(h,{})})]})]})},z=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  margin-top: 40px;
  gap: 40px 0px;

  @media screen and (min-width: 768px) {
    gap: 80px 20px;
  };
`,y=({items:e})=>i.jsx(z,{children:e&&e.map(t=>i.jsx("li",{children:i.jsx(F,{item:t})},t._id))}),H=n.section`
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
`,V=n.img`
  max-width: 198px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 261px;
  }
`,a=n.p`
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
`,M=({error:e,message:t})=>i.jsxs(H,{children:[i.jsx(V,{src:x}),e?i.jsx(a,{children:e}):i.jsx(a,{children:t})]});export{y as D,M as N,v as P};
