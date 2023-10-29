import{n,j as i,G as g,a as c,x as m,T as l}from"./index-4751c36f.js";const f=n.h1`
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
`,I=({title:e})=>i.jsx(i.Fragment,{children:i.jsx(f,{children:e})});function w(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}const u=n.div`
  max-width: 440px;

  @media screen and (min-width: 768px) {
    max-width: 342px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 400px;
  }
`,j=n.div``,b=n.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
  border-radius: 8px;
`,k=n.h3`
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
  }
`,z=n.p`
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
  }
`,H=n.p`
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
  }
`,V=n.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`,v=n.button`
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

  :hover {
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
`,C=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 11px;
  border: none;
  border-radius: 42px;
  color: #f3f3f3;
  background-color: #161f37;

  :hover {
    color: #161f37;
    background-color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`,y=({item:e,deleteDrink:t})=>{const{_id:a,drinkThumb:o,drink:p,alcoholic:r,description:x}=e,s=c(),h=m();return i.jsxs(u,{children:[i.jsx(j,{children:i.jsx(b,{src:o,alt:"image"})}),i.jsx(k,{children:p}),i.jsx(z,{children:r}),i.jsx(H,{children:x}),i.jsxs(V,{children:[i.jsx(v,{onClick:()=>h(`/drinks/${a}`,{replace:!0}),children:"See more"}),i.jsx(C,{onClick:()=>s(t(a)),children:i.jsx(w,{})})]})]})},M=n.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-top: 40px;
  gap: 40px 0px;

  @media screen and (min-width: 768px) {
    gap: 80px 20px;
  };
`,W=({items:e,deleteDrink:t})=>i.jsx(M,{children:e&&e.map(a=>i.jsx("li",{children:i.jsx(y,{item:a,deleteDrink:t})},a._id))}),D=n.section`
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
`,T=n.img`
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
`,Z=({error:e,message:t})=>i.jsxs(D,{children:[i.jsx(T,{src:l}),e?i.jsx(d,{children:e}):i.jsx(d,{children:t})]});export{W as D,Z as N,I as P};
