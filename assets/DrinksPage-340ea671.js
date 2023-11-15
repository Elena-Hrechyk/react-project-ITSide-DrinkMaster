import{s,L as M,j as t,r as n,F as Q,d as R,e as C,D as g,u as b,a as V,f as N,h as q,i as G,k as y,l as J,m as T,t as K,n as U,C as X,c as Y}from"./index-c80193a8.js";import{P as Z}from"./Paginator-9d6dbec8.js";import{s as O,a as ee}from"./selectors-a7d85374.js";import{S as L}from"./react-select.esm-d5924aae.js";import{D as te,a as ne,b as ie,c as re,d as ae}from"./Drinks_bg1_desk@2x-d1d7b4f3.js";import{D as oe,a as se}from"./Drinks_bg3_mob@2x-5e9320da.js";import{D as de,a as le,b as ce,c as ge,d as pe}from"./Drinks_bg3_desk@2x-616f94f7.js";import{s as xe,a as he,b as me}from"./drinksSelectors-29c49a96.js";const ue=s.ul`
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
`,be=s.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,ke=s.img`
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
`,fe=s.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,we=s.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Se=s(M)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: right;
  color: ${({theme:e})=>e.linkSeeMore};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,ve=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(ue,{children:e&&e.length>0?e.map(({_id:a,drink:o,drinkThumb:l})=>t.jsxs(be,{children:[t.jsx(ke,{src:l}),t.jsxs(fe,{children:[t.jsx(we,{children:o}),t.jsx(Se,{to:`/drinks/${a}`,children:"See more"})]})]},a)):e.length===0?t.jsx("h3",{children:"Sorry. There are no coctails ..."}):null})}),$={control:(e,{isFocused:a})=>({...e,backgroundColor:"#161f37",width:"335px",height:"54px",borderRadius:"200px",borderStyle:"none",color:"#F3F3F3",borderColor:a?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"}}),indicatorSeparator:e=>({...e,background:"none"}),placeholder:e=>({...e,color:"#f3f3f3",fontSize:"14px",fontWeight:"400",lineHeight:"1.29",marginLeft:"16px","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),input:e=>({...e,color:"#F3F3F3",fontSize:"14px",fontWeight:"400",lineHeight:"1.29","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),menuList:e=>({...e,backgroundColor:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(e,{isFocused:a,isSelected:o})=>({...e,background:a?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:a?"#F3F3F3":"#F3F3F366",fontSize:"14px",fontWeight:"400",lineHeight:"1.29",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,color:"#F3F3F3",marginLeft:"16px",fontSize:"14px",fontWeight:"400",lineHeight:"1.29","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,zIndex:100,borderRadius:"20px"})};console.log($);const ye=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},n.createElement("title",null,"search"),n.createElement("path",{d:"M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"})),_e=s(Q)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,je=s.label`
  position: relative;
`,De=s.input`
  background-color: transparent;
  width: 335px;
  height: 54px;

  padding: 17px 23px;
  border-radius: 200px;
  border: 1px solid ${({theme:e})=>e.navLinkBorder};

  color: ${({theme:e})=>e.colorText};
  line-height: 1.29;

  &::placeholder {
    line-height: 1.29;
    color: ${({theme:e})=>e.colorText};
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
    padding: 13px 23px;

    &::placeholder {
      line-height: 1.56;
    }
  }
`,Ce=s.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.colorText};
`,$e={searchQuery:"",categories:"",ingredients:""},ze=R().shape({searchQuery:C(),categories:C(),ingredients:C()}),Fe=({page:e,limit:a,theme:o})=>{const[l,x]=n.useState(null),[d,k]=n.useState(null),[c,f]=n.useState(null),[w,p]=n.useState(null),[S,v]=n.useState(null),[h,_]=n.useState(""),[j,z]=n.useState(g.bodyBgc),[A,F]=n.useState(g.disableColor),[B,P]=n.useState(g.colorText),I=b(O),E=b(ee),m=V();console.log(o==="dark"?g:y);const W=i=>{K(()=>x(i.searchQuery),300),k(i.categories),f(i.ingredients),x("")};n.useEffect(()=>{m(N()),m(q())},[m]),n.useEffect(()=>{const i={page:e,limit:a};d&&(d!==w&&(i.page=1),p(d),i.category=d),c&&(c!==S&&(i.page=1),v(c),i.ingredient=c),l&&(l!==h&&(i.page=1),_(l),i.searchWord=l),m(G(i))},[m,l,d,c,e,a,w,S,h]);const H=i=>{x(i.target.value)};return n.useEffect(()=>{z(o==="dark"?g.bodyBgc:y.bodyBgc),F(o==="dark"?g.disableColor:y.disableColor),P(o==="dark"?g.colorText:y.colorText)},[o]),t.jsx(J,{initialValues:$e,validationSchema:ze,onSubmit:W,children:i=>t.jsxs(_e,{onSubmit:i.handleSubmit,children:[t.jsxs(je,{htmlFor:"searchQuery",children:[t.jsx(De,{name:"searchQuery",type:"text",value:l,placeholder:"Enter the text",onChange:H}),t.jsx(Ce,{children:t.jsx(ye,{fill:"currentColor"})})]}),t.jsx("label",{htmlFor:"categories",children:t.jsx(T,{name:"categories",children:({field:u,form:D})=>t.jsx(L,{styles:$,closeMenuOnSelect:!0,isClearable:!0,listBgc:j,listColorText:A,activeColorText:B,options:I.map(r=>({value:r,label:r})),name:u.name,id:"categories",...u,value:d?{value:d,label:d}:"",onChange:r=>{k(r?r.value:""),D.setFieldValue("categories",r?r.value:"")},handleGategory:!0,placeholder:"All categories"})})}),t.jsx("label",{htmlFor:"ingredients",children:t.jsx(T,{name:"ingredients",children:({field:u,form:D})=>t.jsx(L,{styles:$,closeMenuOnSelect:!0,isClearable:!0,options:E.map(r=>({value:r,label:r})),name:u.name,id:"ingredients",...u,value:c?{value:c,label:c}:"",onChange:r=>{f(r?r.value:""),D.setFieldValue("ingredient",r?r.value:"")},placeholder:"Ingredients"})})})]})})},Pe=s.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${te}), url(${oe})`:null};
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${ne}), url(${se})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${de}), url(${ie})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${le}), url(${ce})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${re}), url(${ge})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${ae}),
      url(${pe})`:null};
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Te=s.h1`
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
`,Re=({theme:e})=>{const[a,o]=n.useState(1),[l,x]=n.useState(0),{width:d}=U(),{data:k,quantity:c}=b(xe),f=b(he),w=b(me),p=c;p!==l&&(o(1),x(p));const S=d<768?5:8,v=d<1280?10:9,h=Math.ceil(p/v),_=j=>{o(j)};return t.jsx(Pe,{children:t.jsxs(X,{children:[t.jsx(Te,{children:"Drinks"}),t.jsx(Fe,{page:a,limit:v,theme:e}),f?t.jsx(Y,{}):t.jsxs(t.Fragment,{children:[t.jsx("div",{children:p>0||!w?t.jsx(ve,{drinks:k}):t.jsx("h3",{children:"Sorry. There are no cocktails..."})}),h>1&&t.jsx(Z,{currentPage:a,totalPages:h,nextPage:_,paginate:S,theme:e})]})]})})};export{Re as default};
