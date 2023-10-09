import{s as r,c as y,j as e,F,d as j,e as D,f as v,r as g,u as m,a as z,h as P,i as $,k as C,l as I,C as L,L as M}from"./index-ff14e4e7.js";import{t as W,u as E,P as Q}from"./useResize-552c29f1.js";import{s as R,a as T}from"./selectors-a7d85374.js";import{S}from"./react-select.esm-2dbc3e62.js";import{D as V,a as H,b as N,c as q,d as A,e as G,f as B,g as J,h as K,i as U,s as X,j as Y,k as Z}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{D as O,a as ee}from"./Drinks_bg3_mob@2x-5e9320da.js";const ie=r.ul`
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
`,ne=r.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,te=r.img`
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
`,re=r.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,ae=r.h5`
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
`,oe=r(y)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,se=({drinks:i})=>e.jsx(e.Fragment,{children:e.jsx(ie,{children:i.length>0?i.map(({_id:t,drink:o,drinkThumb:p})=>e.jsxs(ne,{children:[e.jsx(te,{src:p}),e.jsxs(re,{children:[e.jsx(ae,{children:o}),e.jsx(oe,{to:`/drinks/${t}`,children:"See more"})]})]},t)):i.length===0?e.jsx("h3",{children:"Sorry. There are no coctails ..."}):null})}),_={control:(i,{isFocused:t})=>({...i,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:t?"#F3F3F3":"#F3F3F366",borderColor:t?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1280px)":{width:"199px",height:"56px"}}),indicatorSeparator:i=>({...i,background:"none"}),placeholder:i=>({...i,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),input:i=>({...i,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),menuList:i=>({...i,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(i,{isFocused:t,isSelected:o})=>({...i,background:t?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:t?"#F3F3F3":"#F3F3F366",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em",borderRadius:"20px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),singleValue:i=>({...i,color:"#F3F3F3"}),menu:i=>({...i,zIndex:100,borderRadius:"20px"})},de=r.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,pe=r.div`
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
`,ce=r(F)`
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
`,le=r.input`
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
`;r(j)`
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
`;const ge={searchQuery:"",categories:"",ingredients:""},xe=D().shape({searchQuery:v(),categories:v(),ingredients:v()}),he=({page:i,limit:t})=>{const[o,p]=g.useState(null),[s,u]=g.useState(null),[d,l]=g.useState(null),b=m(R),x=m(T),c=z(),f=a=>{W(()=>p(a.searchQuery),300),u(a.categories),l(a.ingredients),p("")};g.useEffect(()=>{c(P()),c($())},[c]),g.useEffect(()=>{const a={page:i,limit:t};s&&(a.category=s),d&&(a.ingredient=d),o&&(a.searchWord=o),c(C(a))},[c,o,s,d,i,t]);const k=a=>{p(a.target.value)};return e.jsx(I,{initialValues:ge,validationSchema:xe,onSubmit:f,children:a=>e.jsxs(ce,{onSubmit:a.handleSubmit,children:[e.jsx("div",{children:e.jsx(pe,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(le,{name:"searchQuery",type:"text",value:o,placeholder:"Enter the text",onChange:k}),e.jsx(de,{})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(j,{name:"categories",children:({field:h,form:w})=>e.jsx(S,{styles:_,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:b.map(n=>({value:n,label:n})),name:h.name,id:"categories",...h,value:s?{value:s,label:s}:"",onChange:n=>{u(n?n.value:""),w.setFieldValue("categories",n?n.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(j,{name:"ingredients",children:({field:h,form:w})=>e.jsx(S,{styles:_,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:x.map(n=>({value:n,label:n})),name:h.name,id:"ingredients",...h,value:d?{value:d,label:d}:"",onChange:n=>{l(n?n.value:""),w.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})})})]})})},me=r.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${V}), url(${O});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${H}), url(${ee});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${N}), url(${q});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${A}), url(${G});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${B}), url(${J});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${K}), url(${U});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,ue=r.h1`
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
`;function Se(){const[i,t]=g.useState(1),{width:o}=E(),{data:p,quantity:s}=m(X),u=m(Y),d=m(Z),l=s,b=o<768?5:8,x=o<1280?10:9,c=Math.ceil(l/x),f=k=>{t(k)};return console.log(i),e.jsx(me,{children:e.jsxs(L,{children:[e.jsx(ue,{children:"Drinks"}),e.jsx(he,{page:i,limit:x}),u?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:l>0||!d?e.jsx(se,{drinks:p}):e.jsx("h3",{children:"Sorry. There are no cocktails..."})}),c>1&&e.jsx(Q,{currentPage:i,drinksPerPage:x,totalItems:l,nextPage:f,paginate:b})]})]})})}export{Se as default};
