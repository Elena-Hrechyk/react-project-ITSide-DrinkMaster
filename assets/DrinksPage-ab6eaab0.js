import{s as i,c as I,j as n,F as z,d as F,e as L,f as k,r as j,a as M,h as E,i as R,k as v,u,l as W,m as $,C as Q,L as T}from"./index-19c16160.js";import{u as V,P as H}from"./useResize-a834556b.js";import{S as y}from"./react-select.esm-9f4e02d4.js";import{s as N,a as A,b as G}from"./drinksSelectors-566d8060.js";const q=i.ul`
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
`,B=i.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,J=i.img`
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
`,K=i.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,U=i.h5`
 font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`,X=i(I)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,Y=({drinks:e})=>n.jsx(n.Fragment,{children:n.jsx(q,{children:e.length>0?e.map(({_id:r,drink:a,drinkThumb:h})=>n.jsxs(B,{children:[n.jsx(J,{src:h}),n.jsxs(K,{children:[n.jsx(U,{children:a}),n.jsx(X,{to:`/drinks/${r}`,children:"See more"})]})]},r)):e.length===0?n.jsx("p",{children:"Sorry. There are no coctails ..."}):null})}),Z=e=>e.filters.categories,_=e=>e.filters.ingredients,P={control:(e,{isFocused:r})=>({...e,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:r?"#F3F3F3":"#F3F3F366",borderColor:r?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1280px)":{width:"199px",height:"56px"}}),indicatorSeparator:e=>({...e,background:"none"}),placeholder:e=>({...e,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),input:e=>({...e,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),menuList:e=>({...e,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(e,{isFocused:r,isSelected:a})=>({...e,background:r?"#161f37":a?"#4f5f88":void 0,zIndex:1,color:r?"#F3F3F3":"#F3F3F366",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em",borderRadius:"20px"}),singleValue:e=>({...e,color:"#F3F3F3"}),menu:e=>({...e,zIndex:100,borderRadius:"20px"})},O=i.span`
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
`;const ie={searchQuery:"",categories:"",ingredients:""},re=L().shape({searchQuery:k(),categories:k(),ingredients:k()}),ae=({value:e,onChange:r,page:a,limit:h})=>{const[s,f]=j.useState(""),[d,b]=j.useState(""),c=M();j.useEffect(()=>{c(E()),c(R()),c(v({value:e,category:s,ingredient:d,page:a,limit:h}))},[c,e,s,d,a,h]);const w=u(Z),x=u(_),S=o=>{f(o.categories),b(o.ingredients),c(v({category:s,ingredient:d,page:a,limit:h}))},p=o=>r(o.target.value);return n.jsx(W,{initialValues:ie,validationSchema:re,onSubmit:S,children:o=>n.jsxs(ne,{onSubmit:o.handleSubmit,children:[n.jsx("div",{children:n.jsx(ee,{children:n.jsxs("label",{htmlFor:"searchQuery",children:[n.jsx(te,{name:"searchWord",type:"text",value:o.value,placeholder:"Enter the text",onChange:p}),n.jsx(O,{})]})})}),n.jsx("div",{children:n.jsx("label",{htmlFor:"categories",children:n.jsx(F,{name:"categories",children:({field:l,form:m})=>n.jsx(y,{styles:P,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:t=>t.isFocused?"border-orange-600":"border-grey-300"},options:w.map(t=>({value:t,label:t})),name:l.name,id:"categories",...l,value:s?{value:s,label:s}:"",onChange:t=>{f(t?t.value:""),m.setFieldValue("categories",t?t.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),n.jsx("div",{children:n.jsx("label",{htmlFor:"ingredients",children:n.jsx(F,{name:"ingredients",children:({field:l,form:m})=>n.jsx(y,{styles:P,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:t=>t.isFocused?"border-orange-600":"border-grey-300"},options:x.map(t=>({value:t,label:t})),name:l.name,id:"ingredients",...l,value:d?{value:d,label:d}:"",onChange:t=>{b(t?t.value:""),m.setFieldValue("ingredient",t?t.value:"")},placeholder:"Ingredients"})})})})]})})},se=i.div`
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
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 64px;
    line-height: 1;
  }
`;function ge(){const[e,r]=$(),[a,h]=j.useState(1),{width:s}=V(),{data:f}=u(N),d=u(A),b=u(G),c=e.get("searchWord")??"",w=f.filter(g=>g.drink.toLowerCase().includes(c.toLowerCase().trim())),x=w.length,S=s<768?5:8,p=s<1280?10:9,o=Math.ceil(x/p),l=a*p,m=l-p,t=w.slice(m,l),D=g=>{h(g)},C=g=>{r(g!==""?{searchWord:g}:{})};return n.jsx(se,{children:n.jsxs(Q,{children:[n.jsx(oe,{children:"Drinks"}),n.jsx(ae,{value:c,onChange:C,page:a,limit:p}),d&&n.jsx(T,{}),n.jsx("div",{children:x>0&&!b&&n.jsx(Y,{drinks:t})}),o>1&&n.jsx(H,{currentPage:a,drinksPerPage:p,totalItems:x,nextPage:D,paginate:S})]})})}export{ge as default};
