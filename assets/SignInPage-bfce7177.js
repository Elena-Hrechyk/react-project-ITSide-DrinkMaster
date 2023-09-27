import{s,F as S,a as k,E as F,u as v,r as p,h as E,i as l,j as o,k as I,m as z}from"./index-207480fc.js";import{I as d,F as C,a as M,S as R,H as L,R as T}from"./SignUpPage.styled-932e45d2.js";import{u as $}from"./useDispatch-b369c374.js";import"./iconBase-c9cee918.js";import"./StartPage.styled-4fea4cf6.js";const D=n=>n.auth.isLogin,O=s(S)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;
  gap: 14px;
  margin-bottom: 14px;
`;s.div`
  /* margin-bottom: 1rem; */
`;const x=s.label`
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
`;const c=s(k)`
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
`,g=s(F)`
  width: 268px;
  color: rgba(218, 20, 20, 1);
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;s.h3`
  margin-bottom: 20px;
`;const m=s.span`
  color: #3cbc81;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`,N={email:"",password:""},q=()=>{const n=$(),h=v(D),[b,f]=p.useState(!1),u=()=>f(!0),[t,w]=p.useState(!1),y=(e,{resetForm:r})=>{console.log("values",e);const i=JSON.stringify({email:e.email.trim(),password:e.password.trim()});console.log("reg",i),n(z({email:e.email.toLowerCase().trim(),password:e.password.trim()})),r()};console.log(h);const j=E().shape({email:l().required().min(4),password:l().required().min(4)});return o.jsx(I,{initialValues:N,validationSchema:j,onSubmit:y,displayName:"MyForm",children:({errors:e,touched:r,values:i,handleChange:a})=>o.jsxs(O,{children:[o.jsxs(x,{style:{position:"relative"},children:[o.jsx(c,{name:"email",type:"text",placeholder:"Email",onFocus:u,value:i.email,onChange:a}),b&&i.email.length>2?e.email&&r.email?o.jsx(d.SvgError,{}):o.jsx(d.SvgDone,{}):""]}),!e.email&&i.email.length>2&&o.jsx(m,{children:"This is an CORRECT email"}),o.jsx(g,{name:"email",component:"div"}),o.jsxs(x,{style:{position:"relative"},children:[o.jsx(c,{name:"password",type:t?"text":"password",placeholder:"Password",value:i.password,onChange:a}),o.jsx("div",{type:"button",onClick:()=>w(!t),style:{position:"absolute",right:"24px",top:"50%",transform:"translateY(-50%)",background:"transparent",color:"white",outline:"transparent"},children:t?o.jsx(M,{}):o.jsx(C,{})})]}),!e.password&&r.password&&t&&o.jsx(m,{children:"This is an CORRECT password"}),t&&o.jsx(g,{name:"password",component:"div"}),o.jsx(P,{type:"submit",children:"Sign In"})]})})},Y=()=>o.jsxs(R,{children:[o.jsx(L,{children:"Sign In"}),o.jsx(q,{}),o.jsx(T,{to:"/signin",children:"Sign Up"})]});export{Y as default};
