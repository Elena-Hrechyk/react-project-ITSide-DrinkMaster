import{s as n,c as F,j as e,F as z,d as g,e as C,f as h,h as I,i as L,r as M,u as x,C as R,L as W}from"./index-d86f3cf7.js";import{u as $,P as E}from"./useResize-9d00377d.js";import{S as w}from"./react-select.esm-73eea4e9.js";import{s as Q,a as T,b as H}from"./drinksSelectors-566d8060.js";const N=n.ul`
   margin-bottom: 40px;

  display: grid;
  grid-row-gap: 40px;
  list-style: none;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,A=n.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,O=n.img`
 width: 335px;
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`,V=n.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,q=n.h5`
 font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:i})=>i.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`,B=n(F)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,G=({drinks:i})=>e.jsx(e.Fragment,{children:e.jsx(N,{children:i.length>0?i.map(({_id:t,drink:r,drinkThumb:a})=>e.jsxs(A,{children:[e.jsx(O,{src:a}),e.jsxs(V,{children:[e.jsx(q,{children:r}),e.jsx(B,{to:`/drinks/${t}`,children:"See more"})]})]},t)):i.length===0?e.jsx("p",{children:"Sorry. There are no coctails ..."}):null})}),b={control:(i,{isFocused:t})=>({...i,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:"#f3f3f3",borderColor:t?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1280px)":{width:"199px",height:"56px"}}),indicatorSeparator:i=>({...i,background:"none"}),placeholder:i=>({...i,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em"}),input:i=>({...i,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),menuList:i=>({...i,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(i,{isFocused:t,isSelected:r})=>({...i,background:t?"#161f37":r?"#4f5f88":void 0,zIndex:1,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",borderRadius:"20px"}),menu:i=>({...i,zIndex:100,borderRadius:"20px"})},J=n.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,K=n.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 262px;
    // border-radius: 50%;
    // height: 80px;
    // width: 80px;
    // margin-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
  }
`,U=n(z)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`,X=n.input`
  position: relative;

  background-color: #161f37;
  opacity: 0.8px;
  width: 335px;
  height: 54px;

  padding: 17px 23px;
  border-radius: 200px;
  border: 1px solid #f3f3f333;

  color: #f3f3f3;
  line-height: 1.23;
  letter-spacing: 0em;

  ::placeholder {
    line-height: 1.23; /* 128.571% */
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
    font-size: 17px;
    padding: 13px 23px;
  }

  @media screen and (min-width: 1280px) {
    width: 264px;
    height: 56px;
  }
`;n(g)`
  background-color: #161f37;

  width: 335px;
  height: 54px;

  border-radius: 200px;
  border: none;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.23;


  &.active {
    background-color: var(--brand-orange);
    color: var(--text-white);
  }
  &::placeholder {
    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 199px;
    height: 56px;
  }

  @media screen and (min-width: 1280px) {
    width: 199px;
    height: 56px;
  }
`;const Y={searchQuery:"",categories:"",ingredients:""},Z=C().shape({searchQuery:h(),categories:h(),ingredients:h()}),_=({value:i,onChange:t})=>{const r=a=>t(a.target.value);return e.jsx(I,{initialValues:Y,validationSchema:Z,children:a=>e.jsxs(U,{onSubmit:a.handleSubmit,children:[e.jsx("div",{children:e.jsx(K,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(X,{name:"searchWord",type:"text",value:a.value,placeholder:"Enter the text",onChange:r}),e.jsx(J,{})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(g,{name:"categories",children:({field:d,form:l})=>e.jsx(w,{styles:b,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:s=>s.isFocused?"border-orange-600":"border-grey-300"},placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(g,{name:"ingredients",children:({field:d,form:l})=>e.jsx(w,{styles:b,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:s=>s.isFocused?"border-orange-600":"border-grey-300"},placeholder:"Ingredients"})})})})]})})},ee=n.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`,ie=n.h1`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:i})=>i.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 64px;
    line-height: 1;
  }
`;function se(){const[i,t]=L(),[r,a]=M.useState(1),{width:d}=$(),{data:l}=x(Q),s=x(T),j=x(H),m=i.get("searchWord")??"",f=l.filter(o=>o.drink.toLowerCase().includes(m.toLowerCase().trim())),p=f.length,k=d<768?5:8,c=d<1280?10:9,S=Math.ceil(p/c),u=r*c,y=u-c,P=f.slice(y,u),v=o=>{a(o)},D=o=>{t(o!==""?{searchWord:o}:{})};return e.jsx(ee,{children:e.jsxs(R,{children:[e.jsx(ie,{children:"Drinks"}),e.jsx(_,{value:m,onChange:D}),s&&e.jsx(W,{}),e.jsx("div",{children:p>0&&!j&&e.jsx(G,{drinks:P})}),S>1&&e.jsx(E,{currentPage:r,drinksPerPage:c,totalItems:p,nextPage:v,paginate:k})]})})}export{se as default};
