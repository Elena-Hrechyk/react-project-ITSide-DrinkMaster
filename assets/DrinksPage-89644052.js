import{s as i,c as I,j as e,F as z,d as F,e as L,f as k,r as j,a as M,h as E,i as R,k as v,u,l as W,m as $,C as Q,L as T}from"./index-c6eb82d1.js";import{u as V,P as H}from"./useResize-230e21c5.js";import{s as N,a as A,S as y}from"./react-select.esm-23ca396a.js";import{s as G,a as q,b as B}from"./drinksSelectors-29c49a96.js";const J=i.ul`
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
`,K=i.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,U=i.img`
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
`,X=i.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,Y=i.h5`
 font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:n})=>n.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`,Z=i(I)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,_=({drinks:n})=>e.jsx(e.Fragment,{children:e.jsx(J,{children:n.length>0?n.map(({_id:r,drink:a,drinkThumb:h})=>e.jsxs(K,{children:[e.jsx(U,{src:h}),e.jsxs(X,{children:[e.jsx(Y,{children:a}),e.jsx(Z,{to:`/drinks/${r}`,children:"See more"})]})]},r)):n.length===0?e.jsx("p",{children:"Sorry. There are no coctails ..."}):null})}),P={control:(n,{isFocused:r})=>({...n,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:r?"#F3F3F3":"#F3F3F366",borderColor:r?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1280px)":{width:"199px",height:"56px"}}),indicatorSeparator:n=>({...n,background:"none"}),placeholder:n=>({...n,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),input:n=>({...n,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),menuList:n=>({...n,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(n,{isFocused:r,isSelected:a})=>({...n,background:r?"#161f37":a?"#4f5f88":void 0,zIndex:1,color:r?"#F3F3F3":"#F3F3F366",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em",borderRadius:"20px"}),singleValue:n=>({...n,color:"#F3F3F3"}),menu:n=>({...n,zIndex:100,borderRadius:"20px"})},O=i.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,ee=i.div`
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
`,ne=i(z)`
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
`,te=i.input`
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
`;i(F)`
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
`;const ie={searchQuery:"",categories:"",ingredients:""},re=L().shape({searchQuery:k(),categories:k(),ingredients:k()}),ae=({value:n,onChange:r,page:a,limit:h})=>{const[s,f]=j.useState(""),[d,b]=j.useState(""),l=M();j.useEffect(()=>{l(E()),l(R()),l(v({value:n,category:s,ingredient:d,page:a,limit:h}))},[l,n,s,d,a,h]);const w=u(N),x=u(A),S=o=>{f(o.categories),b(o.ingredients),l(v({category:s,ingredient:d,page:a,limit:h}))},p=o=>r(o.target.value);return e.jsx(W,{initialValues:ie,validationSchema:re,onSubmit:S,children:o=>e.jsxs(ne,{onSubmit:o.handleSubmit,children:[e.jsx("div",{children:e.jsx(ee,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(te,{name:"searchWord",type:"text",value:o.value,placeholder:"Enter the text",onChange:p}),e.jsx(O,{})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(F,{name:"categories",children:({field:c,form:m})=>e.jsx(y,{styles:P,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:t=>t.isFocused?"border-orange-600":"border-grey-300"},options:w.map(t=>({value:t,label:t})),name:c.name,id:"categories",...c,value:s?{value:s,label:s}:"",onChange:t=>{f(t?t.value:""),m.setFieldValue("categories",t?t.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(F,{name:"ingredients",children:({field:c,form:m})=>e.jsx(y,{styles:P,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:t=>t.isFocused?"border-orange-600":"border-grey-300"},options:x.map(t=>({value:t,label:t})),name:c.name,id:"ingredients",...c,value:d?{value:d,label:d}:"",onChange:t=>{b(t?t.value:""),m.setFieldValue("ingredient",t?t.value:"")},placeholder:"Ingredients"})})})})]})})},se=i.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`,oe=i.h1`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:n})=>n.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 64px;
    line-height: 1;
  }
`;function ge(){const[n,r]=$(),[a,h]=j.useState(1),{width:s}=V(),{data:f}=u(G),d=u(q),b=u(B),l=n.get("searchWord")??"",w=f.filter(g=>g.drink.toLowerCase().includes(l.toLowerCase().trim())),x=w.length,S=s<768?5:8,p=s<1280?10:9,o=Math.ceil(x/p),c=a*p,m=c-p,t=w.slice(m,c),D=g=>{h(g)},C=g=>{r(g!==""?{searchWord:g}:{})};return e.jsx(se,{children:e.jsxs(Q,{children:[e.jsx(oe,{children:"Drinks"}),e.jsx(ae,{value:l,onChange:C,page:a,limit:p}),d&&e.jsx(T,{}),e.jsx("div",{children:x>0&&!b&&e.jsx(_,{drinks:t})}),o>1&&e.jsx(H,{currentPage:a,drinksPerPage:p,totalItems:x,nextPage:D,paginate:S})]})})}export{ge as default};
