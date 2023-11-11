import{n as p,L as R,j as t,r as i,s as x,F as V,d as N,e as C,D as g,u as k,a as A,f as q,h as G,i as J,k as F,l as K,m as E,t as U,o as X,C as Y,c as Z}from"./index-235d1527.js";import{P as O}from"./Paginator-82f575a5.js";import{s as ee,a as te}from"./selectors-a7d85374.js";import{S as W}from"./react-select.esm-53f0a8d7.js";import{D as ne,a as ie,b as re,c as ae,d as oe,e as se,f as de,g as le,h as ce,i as ge}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{D as pe,a as xe}from"./Drinks_bg3_mob@2x-5e9320da.js";import{s as he,a as me,b as ue}from"./drinksSelectors-29c49a96.js";const be=p.ul`
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
`,ke=p.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,fe=p.img`
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
`,we=p.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,Se=p.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,ve=p(R)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: right;
  color: ${({theme:e})=>e.linkSeeMore};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,ye=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(be,{children:e&&e.length>0?e.map(({_id:a,drink:o,drinkThumb:d})=>t.jsxs(ke,{children:[t.jsx(fe,{src:d}),t.jsxs(we,{children:[t.jsx(Se,{children:o}),t.jsx(ve,{to:`/drinks/${a}`,children:"See more"})]})]},a)):e.length===0?t.jsx("h3",{children:"Sorry. There are no coctails ..."}):null})}),z={control:(e,{isFocused:a})=>({...e,backgroundColor:"#161f37",width:"335px",height:"54px",borderRadius:"200px",borderStyle:"none",color:"#F3F3F3",borderColor:a?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"}}),indicatorSeparator:e=>({...e,background:"none"}),placeholder:e=>({...e,color:"#f3f3f3",fontSize:"14px",fontWeight:"400",lineHeight:"1.29",marginLeft:"16px","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),input:e=>({...e,color:"#F3F3F3",fontSize:"14px",fontWeight:"400",lineHeight:"1.29","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),menuList:e=>({...e,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(e,{isFocused:a,isSelected:o})=>({...e,background:a?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:a?"#F3F3F3":"#F3F3F366",fontSize:"14px",fontWeight:"400",lineHeight:"1.29",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,color:"#F3F3F3",marginLeft:"16px",fontSize:"14px",fontWeight:"400",lineHeight:"1.29","@media only screen and (min-width: 768px)":{fontSize:"17px",lineHeight:"1.56"}}),menu:e=>({...e,zIndex:100,borderRadius:"20px"})},_e=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},i.createElement("title",null,"search"),i.createElement("path",{d:"M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"})),je=x(V)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,De=x.label`
  position: relative;
`,Ce=x.input`
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
`,Fe=x.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.colorText};
`,ze={searchQuery:"",categories:"",ingredients:""},$e=N().shape({searchQuery:C(),categories:C(),ingredients:C()}),Pe=({page:e,limit:a,theme:o})=>{const[d,h]=i.useState(null),[s,f]=i.useState(null),[l,w]=i.useState(null),[S,c]=i.useState(null),[v,y]=i.useState(null),[m,j]=i.useState(""),[_,$]=i.useState(g.bodyBgc),[P,T]=i.useState(g.disableColor),[L,I]=i.useState(g.colorText),H=k(ee),B=k(te),u=A(),M=r=>{U(()=>h(r.searchQuery),300),f(r.categories),w(r.ingredients),h("")};i.useEffect(()=>{u(q()),u(G())},[u]),i.useEffect(()=>{const r={page:e,limit:a};s&&(s!==S&&(r.page=1),c(s),r.category=s),l&&(l!==v&&(r.page=1),y(l),r.ingredient=l),d&&(d!==m&&(r.page=1),j(d),r.searchWord=d),u(J(r))},[u,d,s,l,e,a,S,v,m]);const Q=r=>{h(r.target.value)};return i.useEffect(()=>{$(o==="dark"?g.bodyBgc:F.bodyBgc),T(o==="dark"?g.disableColor:F.disableColor),I(o==="dark"?g.colorText:F.colorText)},[o]),console.log(_),console.log(P),console.log(L),console.log(z),t.jsx(K,{initialValues:ze,validationSchema:$e,onSubmit:M,children:r=>t.jsxs(je,{onSubmit:r.handleSubmit,children:[t.jsxs(De,{htmlFor:"searchQuery",children:[t.jsx(Ce,{name:"searchQuery",type:"text",value:d,placeholder:"Enter the text",onChange:Q}),t.jsx(Fe,{children:t.jsx(_e,{fill:"currentColor"})})]}),t.jsx("label",{htmlFor:"categories",children:t.jsx(E,{name:"categories",children:({field:b,form:D})=>t.jsx(W,{styles:z,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},listBgc:_,listColorText:P,activeColorText:L,options:H.map(n=>({value:n,label:n})),name:b.name,id:"categories",...b,value:s?{value:s,label:s}:"",onChange:n=>{f(n?n.value:""),D.setFieldValue("categories",n?n.value:"")},handleGategory:!0,placeholder:"All categories"})})}),t.jsx("label",{htmlFor:"ingredients",children:t.jsx(E,{name:"ingredients",children:({field:b,form:D})=>t.jsx(W,{styles:z,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:B.map(n=>({value:n,label:n})),name:b.name,id:"ingredients",...b,value:l?{value:l,label:l}:"",onChange:n=>{w(n?n.value:""),D.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})})]})})},Te=x.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  /* Для экранов с разрешением 1x и шириной до 768px */
  background-image: url(${ne}), url(${pe});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top 20px,
    right bottom;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${ie}), url(${xe});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      left top 20px,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${re}), url(${ae});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${oe}), url(${se});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${de}), url(${le});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    /* background-position:
      left  top,
      right  top ; */
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${ce}), url(${ge});
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }
`,Le=x.h1`
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
`,Re=({theme:e})=>{const[a,o]=i.useState(1),[d,h]=i.useState(0),{width:s}=X(),{data:f,quantity:l}=k(he),w=k(me),S=k(ue),c=l;c!==d&&(o(1),h(c));const v=s<768?5:8,y=s<1280?10:9,m=Math.ceil(c/y),j=_=>{o(_)};return t.jsx(Te,{children:t.jsxs(Y,{children:[t.jsx(Le,{children:"Drinks"}),t.jsx(Pe,{page:a,limit:y,theme:e}),w?t.jsx(Z,{}):t.jsxs(t.Fragment,{children:[t.jsx("div",{children:c>0||!S?t.jsx(ye,{drinks:f}):t.jsx("h3",{children:"Sorry. There are no cocktails..."})}),m>1&&t.jsx(O,{currentPage:a,totalPages:m,nextPage:j,paginate:v,theme:e})]})]})})};export{Re as default};
