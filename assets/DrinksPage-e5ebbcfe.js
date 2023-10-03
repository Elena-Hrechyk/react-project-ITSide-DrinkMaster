import{s as a,c as y,j as e,F as D,d as j,e as F,f as v,r as h,u,a as z,h as P,i as $,k as I,l as C,C as L,L as M}from"./index-03164017.js";import{t as W,u as E,P as Q}from"./useResize-6289eb1a.js";import{s as R,a as T,S}from"./react-select.esm-6f226440.js";import{D as V,a as H,b as N,c as q,d as A,e as G,f as B,g as J,h as K,i as U}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as X,a as Y}from"./Drinks_bg3_mob@2x-5e9320da.js";import{s as Z,a as O,b as ee}from"./drinksSelectors-29c49a96.js";const ie=a.ul`
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
`,ne=a.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,te=a.img`
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
`,re=a.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,ae=a.h5`
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
`,oe=a(y)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,se=({drinks:i})=>e.jsx(e.Fragment,{children:e.jsx(ie,{children:i.length>0?i.map(({_id:r,drink:o,drinkThumb:c})=>e.jsxs(ne,{children:[e.jsx(te,{src:c}),e.jsxs(re,{children:[e.jsx(ae,{children:o}),e.jsx(oe,{to:`/drinks/${r}`,children:"See more"})]})]},r)):i.length===0?e.jsx("h3",{children:"Sorry. There are no coctails ..."}):null})}),_={control:(i,{isFocused:r})=>({...i,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:r?"#F3F3F3":"#F3F3F366",borderColor:r?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1280px)":{width:"199px",height:"56px"}}),indicatorSeparator:i=>({...i,background:"none"}),placeholder:i=>({...i,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),input:i=>({...i,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),menuList:i=>({...i,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(i,{isFocused:r,isSelected:o})=>({...i,background:r?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:r?"#F3F3F3":"#F3F3F366",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em",borderRadius:"20px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),singleValue:i=>({...i,color:"#F3F3F3"}),menu:i=>({...i,zIndex:100,borderRadius:"20px"})},de=a.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,ce=a.div`
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
`,pe=a(D)`
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
`,le=a.input`
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
`;a(j)`
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
`;const ge={searchQuery:"",categories:"",ingredients:""},xe=F().shape({searchQuery:v(),categories:v(),ingredients:v()}),he=({page:i,limit:r})=>{const[o,c]=h.useState(null),[s,b]=h.useState(null),[d,x]=h.useState(null),k=u(R),p=u(T),l=z(),f=t=>{W(()=>c(t.searchQuery),300),b(t.categories),x(t.ingredients),c("")};h.useEffect(()=>{l(P()),l($())},[l]),h.useEffect(()=>{const t={page:i,limit:r};s&&(t.category=s),d&&(t.ingredient=d),o&&(t.searchWord=o),l(I(t))},[l,o,s,d,i,r]);const w=t=>{c(t.target.value)};return e.jsx(C,{initialValues:ge,validationSchema:xe,onSubmit:f,children:t=>e.jsxs(pe,{onSubmit:t.handleSubmit,children:[e.jsx("div",{children:e.jsx(ce,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(le,{name:"searchQuery",type:"text",value:o,placeholder:"Enter the text",onChange:w}),e.jsx(de,{})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(j,{name:"categories",children:({field:g,form:m})=>e.jsx(S,{styles:_,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:k.map(n=>({value:n,label:n})),name:g.name,id:"categories",...g,value:s?{value:s,label:s}:"",onChange:n=>{b(n?n.value:""),m.setFieldValue("categories",n?n.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(j,{name:"ingredients",children:({field:g,form:m})=>e.jsx(S,{styles:_,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:p.map(n=>({value:n,label:n})),name:g.name,id:"ingredients",...g,value:d?{value:d,label:d}:"",onChange:n=>{x(n?n.value:""),m.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})})})]})})},me=a.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${V}), url(${X});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${H}), url(${Y});
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
`,ue=a.h1`
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
`;function Se(){const[i,r]=h.useState(1),{width:o}=E(),{data:c,quantity:s}=u(Z),b=u(O),d=u(ee),x=s,k=o<768?5:8,p=o<1280?10:9,l=Math.ceil(x/p),f=i*p,w=f-p,t=c.slice(w,f),g=m=>{r(m)};return console.log(i),e.jsx(me,{children:e.jsxs(L,{children:[e.jsx(ue,{children:"Drinks"}),e.jsx(he,{page:i,limit:p}),b?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:x>0||!d?e.jsx(se,{drinks:t}):e.jsx("h3",{children:"Sorry. There are no cocktails..."})}),l>1&&e.jsx(Q,{currentPage:i,drinksPerPage:p,totalItems:x,nextPage:g,paginate:k})]})]})})}export{Se as default};
