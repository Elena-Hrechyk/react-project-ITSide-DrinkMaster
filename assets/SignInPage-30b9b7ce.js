import{s,F as S,a as k,E as F,u as v,m as E,n as I,r as a,h as z,i as p,j as o,k as C,o as M}from"./index-1e2e3b70.js";import{I as l,F as R,a as L,S as T,H as $,R as D}from"./SignUpPage.styled-e38acfdc.js";import"./iconBase-f536ddf7.js";import"./StartPage.styled-7b571c9f.js";const O=s(S)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;
  gap: 14px;
  margin-bottom: 14px;
`;s.div`
  /* margin-bottom: 1rem; */
`;const d=s.label`
  /* display: block;

  margin-bottom: 2rem;
  font-weight: bold; */
`;s.input`
  /* display: block;
  width: 97%;
  margin-top: 10px;
  margin-bottom: 32px;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid black;
  outline: transparent;
  border-radius: 4px;
  /* transition: box-shadow 0.3s ease; */
  /* background-color: rgb(99, 99, 255);
  &:hover {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  /* } */
`;const x=s(k)`
  /* position: relative; */
  display: block;
  width: 335px;
  height: 54px;
  padding-left: 18px;
  padding-right: 18px;

  /* max-width: 335px; */
  /* padding: 18px 24px 18px 24px; */
  color: #f3f3f3;
  /* text-align: center; */
  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  /* margin-top: 10px;
  margin-bottom: 32px;
  padding: 0.5rem;
  font-size: 2rem; */
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;
  border-radius: 200px;
  /* transition: box-shadow 0.3s ease; */
  background-color: transparent;
  /* &:valid {
    
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
  } */
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
    /* outline: 5px solid green; */
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }

  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
    /* outline: 5px solid green; */
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }
  &:hover::placeholder {
    color: rgba(243, 243, 243, 1);
  }
`,P=s.button`
  width: 372px;
  height: auto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border-radius: 42px;

  padding: 18px 44px;
  outline: transparent;
  background: #f3f3f3;
  color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);

  &:hover {
    border-radius: 42px;
    background: #161f37;
    color: #f3f3f3;
    /* font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; 112.5% */
  }
  &:active {
    border-radius: 42px;
    border: 2px solid rgba(64, 112, 205, 0.5);
    background: #f3f3f3;
    color: #161f37;
  }
`,c=s(F)`
  width: 268px;
  color: rgba(218, 20, 20, 1);
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;s.h3`
  margin-bottom: 20px;
`;const g=s.span`
  color: #3cbc81;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`,N={email:"",password:""},q=()=>{const m=v(),h=E(I),[b,f]=a.useState(!1),u=()=>f(!0),[r,w]=a.useState(!1),y=(e,{resetForm:t})=>{console.log("values",e);const i=JSON.stringify({email:e.email.trim(),password:e.password.trim()});console.log("reg",i),m(M({email:e.email.toLowerCase().trim(),password:e.password.trim()})),t()};console.log(h);const j=z().shape({email:p().required().min(4),password:p().required().min(4)});return o.jsx(C,{initialValues:N,validationSchema:j,onSubmit:y,displayName:"MyForm",children:({errors:e,touched:t,values:i,handleChange:n})=>o.jsxs(O,{children:[o.jsxs(d,{style:{position:"relative"},children:[o.jsx(x,{name:"email",type:"text",placeholder:"Email",onFocus:u,value:i.email,onChange:n}),b&&i.email.length>2?e.email&&t.email?o.jsx(l.SvgError,{}):o.jsx(l.SvgDone,{}):""]}),!e.email&&i.email.length>2&&o.jsx(g,{children:"This is an CORRECT email"}),o.jsx(c,{name:"email",component:"div"}),o.jsxs(d,{style:{position:"relative"},children:[o.jsx(x,{name:"password",type:r?"text":"password",placeholder:"Password",value:i.password,onChange:n}),o.jsx("div",{type:"button",onClick:()=>w(!r),style:{position:"absolute",right:"24px",top:"50%",transform:"translateY(-50%)",background:"transparent",color:"white",outline:"transparent"},children:r?o.jsx(L,{}):o.jsx(R,{})})]}),!e.password&&t.password&&r&&o.jsx(g,{children:"This is an CORRECT password"}),r&&o.jsx(c,{name:"password",component:"div"}),o.jsx(P,{type:"submit",children:"Sign In"})]})})},V=()=>o.jsxs(T,{children:[o.jsx($,{children:"Sign In"}),o.jsx(q,{}),o.jsx(D,{to:"/signin",children:"Sign Up"})]});export{V as default};
