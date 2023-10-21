import{s as a,c as $,j as e,F as I,d as _,e as W,f as y,r as c,u as m,a as L,h as M,i as E,k as Q,l as R,C as T,L as V}from"./index-96e8e874.js";import{t as H,u as N,P as q}from"./useResize-9c8ed3b3.js";import{s as A,a as G}from"./selectors-a7d85374.js";import{S as F}from"./react-select.esm-f2073ea0.js";import{D as B,a as J,b as K,c as U,d as X,e as Y,f as Z,g as O,h as ee,i as te}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as ie,a as ne}from"./Drinks_bg3_mob@2x-5e9320da.js";import{s as re,a as ae,b as oe}from"./drinksSelectors-29c49a96.js";const se=a.ul`
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
`,de=a.li`
 width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,ce=a.img`
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
`,pe=a.div`
margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,le=a.h5`
 font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`,ge=a($)`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`,xe=({drinks:t})=>e.jsx(e.Fragment,{children:e.jsx(se,{children:t&&t.length>0?t.map(({_id:r,drink:o,drinkThumb:p})=>e.jsxs(de,{children:[e.jsx(ce,{src:p}),e.jsxs(pe,{children:[e.jsx(le,{children:o}),e.jsx(ge,{to:`/drinks/${r}`,children:"See more"})]})]},r)):t.length===0?e.jsx("h3",{children:"Sorry. There are no coctails ..."}):null})}),D={control:(t,{isFocused:r})=>({...t,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:r?"#F3F3F3":"#F3F3F366",borderColor:r?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1280px)":{width:"199px",height:"56px"}}),indicatorSeparator:t=>({...t,background:"none"}),placeholder:t=>({...t,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),input:t=>({...t,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em"}),menuList:t=>({...t,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(t,{isFocused:r,isSelected:o})=>({...t,background:r?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:r?"#F3F3F3":"#F3F3F366",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.23",letterSpacing:"0em",borderRadius:"20px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),singleValue:t=>({...t,color:"#F3F3F3"}),menu:t=>({...t,zIndex:100,borderRadius:"20px"})},he=a.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,me=a.div`
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
`,ue=a(I)`
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
`,be=a.input`
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
`;a(_)`
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
`;const fe={searchQuery:"",categories:"",ingredients:""},ke=W().shape({searchQuery:y(),categories:y(),ingredients:y()}),we=({page:t,limit:r})=>{const[o,p]=c.useState(null),[s,u]=c.useState(null),[d,b]=c.useState(null),[f,l]=c.useState(null),[k,w]=c.useState(null),[g,v]=c.useState(""),S=m(A),z=m(G),x=L(),C=n=>{H(()=>p(n.searchQuery),300),u(n.categories),b(n.ingredients),p("")};c.useEffect(()=>{x(M()),x(E())},[x]),c.useEffect(()=>{const n={page:t,limit:r};s&&(s!==f&&(n.page=1),l(s),n.category=s),d&&(d!==k&&(n.page=1),w(d),n.ingredient=d),o&&(o!==g&&(n.page=1),v(o),n.searchWord=o),x(Q(n))},[x,o,s,d,t,r,f,k,g]);const P=n=>{p(n.target.value)};return e.jsx(R,{initialValues:fe,validationSchema:ke,onSubmit:C,children:n=>e.jsxs(ue,{onSubmit:n.handleSubmit,children:[e.jsx("div",{children:e.jsx(me,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(be,{name:"searchQuery",type:"text",value:o,placeholder:"Enter the text",onChange:P}),e.jsx(he,{})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(_,{name:"categories",children:({field:h,form:j})=>e.jsx(F,{styles:D,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:i=>i.isFocused?"border-orange-600":"border-grey-300"},options:S.map(i=>({value:i,label:i})),name:h.name,id:"categories",...h,value:s?{value:s,label:s}:"",onChange:i=>{u(i?i.value:""),j.setFieldValue("categories",i?i.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(_,{name:"ingredients",children:({field:h,form:j})=>e.jsx(F,{styles:D,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:i=>i.isFocused?"border-orange-600":"border-grey-300"},options:z.map(i=>({value:i,label:i})),name:h.name,id:"ingredients",...h,value:d?{value:d,label:d}:"",onChange:i=>{b(i?i.value:""),j.setFieldValue("ingredient",i?i.value:"")},placeholder:"Ingredients"})})})})]})})},ve=a.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${B}), url(${ie});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${J}), url(${ne});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${K}), url(${U});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${X}), url(${Y});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${Z}), url(${O});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${ee}), url(${te});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Se=a.h1`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 64px;
    line-height: 1;
  }
`,Pe=()=>{const[t,r]=c.useState(1),[o,p]=c.useState(0),{width:s}=N(),{data:u,quantity:d}=m(re),b=m(ae),f=m(oe),l=d;l!==o&&(r(1),p(l));const k=s<768?5:8,w=s<1280?10:9,g=Math.ceil(l/w),v=S=>{r(S)};return e.jsx(ve,{children:e.jsxs(T,{children:[e.jsx(Se,{children:"Drinks"}),e.jsx(we,{page:t,limit:w}),b?e.jsx(V,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:l>0||!f?e.jsx(xe,{drinks:u}):e.jsx("h3",{children:"Sorry. There are no cocktails..."})}),g>1&&e.jsx(q,{currentPage:t,totalPages:g,nextPage:v,paginate:k})]})]})})};export{Pe as default};
