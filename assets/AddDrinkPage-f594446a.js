import{s as i,r as b,j as n,a as w,f as B,z as M,u,m as x,A as m,h as P,B as E,E as $,S as R,H as U,I as V,J as L,L as q,K as N,c as G,d as v,e as h,M as H,O,P as Y,C as J,l as K,F as Q,Q as W,_ as X}from"./index-10c3187c.js";import{D as Z,a as ee,b as ne,c as ie,d as te,e as re,f as oe,g as ae,h as se,i as de}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{S as le}from"./react-select.esm-7024c073.js";import{s as ce,b as pe,a as xe}from"./selectors-a7d85374.js";import{d as ge,a as he}from"./drinksSelectors-29c49a96.js";const me=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 0 80px 0;
  font-size: 14px;

  @media (-webkit-min-device-pixel-ratio: 1) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    /* padding: 224px 32px 622px 32px; */
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1279.98px */
  @media (min-width: 768px) and (max-width: 1279.98px) {
    padding: 160px 0 136px 0;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1279.98px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1279.98px) {
    padding: 160px 0 136px 0;
    font-size: 17px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1279.98px */
  @media (min-width: 1279.98px) {
    padding: 224px 0 140px 0;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1279.98px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?` url(${Z})`:null};
    background-size: contain;

    background-repeat: no-repeat;
    background-position:
      left -97px top -331px,
      right -497px top -287px;
  }

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?` url(${ee})`:null};
    background-size: contain;

    background-repeat: no-repeat;
    background-position: left top -160px;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${ne}), url(${ie})`:null};
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${te}), url(${re})`:null};
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -194px top -332px,
      right -78px top -96px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${oe}), url(${ae})`:null};
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -97px top -331px,
      right -497px top -287px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: ${({theme:e})=>e.bodyBgc==="#0A0A11"?`url(${se}), url(${de})`:null};
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -27px top -180px,
      right -258px top -68px;
  }
`,ue=i.h2`
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19; /* 118.75% */

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.06;
  }
`,be=i.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    grid-gap: 94px;
  }
`,fe=i.div`
  font-size: 18px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background: #1f263f;
  color: #f3f3f3;
`,we=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107px;
  height: 46px;
  padding: 18px 44px;

  border: none;
  border-radius: 42px;
  background-color: ${({theme:e})=>e.button.buttonBgc};
  color: ${({theme:e})=>e.button.battonText};

  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;

  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.button.buttonBgcHover};
    color: ${({theme:e})=>e.button.buttonTextHover};
    outline: 2px solid ${({theme:e})=>e.button.buttonBorderHover};
  }
`,y=({onChange:e,optionValue:r,flexDirection:o})=>{const[d,a]=b.useState(!1),c={valueContainer:t=>({...t,display:"flex",flexDirection:o,paddingLeft:18}),control:t=>({...t,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(t,{isFocused:p})=>({...t,backgroundColor:"#161F37",borderRadius:20,color:p?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:t=>({...t,backgroundColor:"#161F37",borderRadius:20}),singleValue:t=>({...t,color:"#F3F3F3"}),dropdownIndicator:t=>({...t,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:d?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:t=>({...t,display:"none"})},s={width:"100%"};return n.jsx("div",{style:s,children:n.jsx(le,{options:r,placeholder:"",styles:{...c},onChange:t=>e(t.value),onMenuOpen:()=>a(!0),onMenuClose:()=>a(!1)})})},ke=i.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-top: 60px;
    width: 100%;
  }
`,D=i.input`
  padding-bottom: 14px;
  padding-top: 31px;
  background-color: transparent;
  border: transparent;
  color: ${({theme:e})=>e.colorText};
  width: 335px;
  &:focus {
    outline: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 352px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 339px;
  }
`,f=i.div`
  border-bottom: 0.5px solid ${({theme:e})=>e.linkSeeMore};
  padding-left: 10px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1280px) {
    width: 339px;
  }
`,je=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`,C=i.p`
  color: ${({theme:e})=>e.linkSeeMore};
  line-height: normal;
  letter-spacing: -0.28px;
`,S={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},ye=i.div`
  width: 335px; ///// задать гнучкий розмір
  height: 320px;
  background-color: ${({theme:e})=>e.addDrinkImgBgc};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`,$e=i.label`
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border: none;
  padding: 18px;
  border-radius: 6px;
  margin-bottom: 18px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
`,ve=i.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
`,De=i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,F=i.div`
  display: flex;
  align-items: center;
`,T=i.label`
  position: relative;
  color: ${({theme:e})=>e.linkSeeMore};

  &:checked {
    color: ${({theme:e})=>e.colorText};
  }
`,_=i.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  + .radio-label {
    &:before {
      content: '';
      border-radius: 100%;
      border: 2px solid ${({theme:e})=>e.linkSeeMore};
      display: inline-block;
      width: 20px;
      height: 20px;
      position: relative;
      top: -0.2em;
      margin-right: 8px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
  }
  &:checked {
    + .radio-label {
      &:after {
        opacity: 1;
        border: ${({theme:e})=>e.colorText};
        box-shadow: inset 0 0 0 4px ${({theme:e})=>e.bodyBgc};
      }
    }
  }
  &:focus {
    + .radio-label {
      color: ${({theme:e})=>e.colorText};
      &:before {
        outline: none;
        box-shadow: inset 0 0 0 4px ${({theme:e})=>e.bodyBgc};
        border-radius: 100%;
        border: 2px solid ${({theme:e})=>e.colorText};
        background-color: ${({theme:e})=>e.colorText};
      }
    }
  }
  &:focus {
    + .radio-label {
      &:after {
        outline: none;
        border-color: #800080;
      }
    }
  }
  &:checked + .radio-label::before {
    outline: none;
    box-shadow: inset 0 0 0 4px ${({theme:e})=>e.bodyBgc};
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colorText};
    background-color: ${({theme:e})=>e.colorText};
    color: ${({theme:e})=>e.colorText};
  }

  &:checked + .radio-label {
    color: ${({theme:e})=>e.colorText};
  }
`,Ce=i.input`
  position: 'relative';
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,Se=i.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`,Fe="/react-project-ITSide-DrinkMaster/assets/plus-6c79836d.svg",Te=({setFieldValue:e,errors:r,touched:o,values:d})=>{const[a,c]=b.useState(null),s=w();b.useEffect(()=>{s(B()),s(M())},[s]);const t=u(ce),p=u(pe),k=t.map(l=>({label:l,value:l})),z=p.map(l=>({label:l,value:l})),A=l=>{const g=l.target.files[0];console.log(g),l.target.files.length>0&&c({picture:g,src:URL.createObjectURL(g)}),e("drinkThumb",g||"")};return n.jsx(n.Fragment,{children:n.jsxs(ke,{children:[n.jsx(ye,{children:a===null?n.jsxs(n.Fragment,{children:[n.jsxs($e,{style:{backgroundColor:"#F3F3F3"},children:[n.jsx(x,{name:"drinkThumb",id:"drinkThumb",type:"file",as:Ce,onChange:A,accept:"image/*"}),n.jsx("img",{src:Fe,alt:"SVG Image",style:{filter:"invert(1)",fill:"black",marginTop:"-18px"}})]}),n.jsx(ve,{children:"Add image"})]}):n.jsx(Se,{src:a.src,alt:a.src})}),n.jsxs(je,{children:[n.jsx(x,{as:D,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink",value:d.drink||""}),o.drink&&r.drink?n.jsx(m,{children:r.drink}):null,n.jsx(f,{}),n.jsx(x,{as:D,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe",value:d.shortDescription||""}),o.shortDescription&&r.shortDescription?n.jsx(m,{children:r.shortDescription}):null,n.jsx(f,{}),n.jsxs("div",{style:S,children:[n.jsx(C,{children:"Category"}),n.jsx(x,{name:"category",id:"category",touched:o.category,error:r.category,children:({form:l})=>n.jsx(y,{flexDirection:"row-reverse",optionValue:k,onChange:g=>l.setFieldValue("category",g)})})]})," ",o.category&&r.category?n.jsx(m,{children:r.category}):null,n.jsx(f,{}),n.jsxs("div",{style:S,children:[n.jsx(C,{children:"Glass"}),n.jsx(x,{name:"glass",children:({form:l})=>n.jsx(y,{flexDirection:"row-reverse",optionValue:z,onChange:g=>l.setFieldValue("glass",g)})})]})," ",o.glass&&r.glass?n.jsx(m,{children:r.glass}):null,n.jsx(f,{}),n.jsxs(De,{children:[n.jsxs(F,{children:[n.jsx(x,{as:_,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),n.jsx(T,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),n.jsxs(F,{children:[n.jsx(x,{as:_,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),n.jsx(T,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})})},_e=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 80px;
  margin-bottom: 20px;
`,Ie=i.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,ze=i.textarea`
  display: flex;
  flex: start;
  width: 335px;
  min-height: 184px;
  margin-top: 40px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: transparent;
  border-radius: 14px;
  border: 1px solid ${({theme:e})=>e.linkSeeMore};
  color: ${({theme:e})=>e.colorText};

  @media screen and (min-width: 768px) {
    width: 480px;
    padding-top: 14px;
    padding-left: 24px;
  }
`,Ae=({errors:e,touched:r})=>n.jsx(n.Fragment,{children:n.jsxs(_e,{children:[n.jsx(Ie,{children:"Recipe Preparation"}),n.jsx(x,{as:ze,name:"description",placeholder:"Enter the recipe",className:"text-area"}),r.description&&e.description?n.jsx(m,{children:e.description}):null]})}),Be=i.div`
  background-color: transparent;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    /* width:496px; */
  }
  @media screen and (min-width: 1280px) {
    width: 540px;
  }
`,Me=i.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 104px;
  height: 40px;
  margin-left: 77px;
  border: 1px solid ${({theme:e})=>e.linkSeeMore};
  border-radius: 200px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    margin-left: 370px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 206px;
  }
`,I=i.button`
  background-color: transparent;
  border: transparent;
  padding: 5px;
  line-height: 1.29; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,Pe=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: space-between;
`,Ee=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,Re=i.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14; /* 114.286% */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,Ue=i.div`
  display: flex;
`,Ve=i.div`
  width: 200px;
  display: flex;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.linkSeeMore};
  border-radius: 200px;
  height: 40px;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 332px;
  }
  @media screen and (min-width: 1280px) {
    width: 316px;
  }
`,Le=i.div`
  width: 101px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  border: 1px solid ${({theme:e})=>e.linkSeeMore};
  border-radius: 200px;
  height: 40px;
  padding-left: 18px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    width: 150px;
    margin-left: 14px;
  }
`,qe=i.input`
  background-color: transparent;
  border: transparent;
  width: 90%;
  color: ${({theme:e})=>e.colorText};
  &:focus {
    outline: transparent;
  }
`,Ne=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.colorText};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;let Ge=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");const He=({values:e})=>{const r=w();b.useEffect(()=>{r(P())},[r]);const d=u(xe).map(a=>({label:a,value:a}));return console.log(e),n.jsx(E,{name:"ingredients",render:({remove:a,push:c})=>n.jsxs(Be,{children:[n.jsxs(Pe,{children:[n.jsx(Re,{children:"Ingredients"}),n.jsxs(Me,{children:[n.jsx(I,{type:"button",onClick:()=>{let s=e.ingredients.length;a(s-1)},children:"-"}),n.jsx("p",{children:e.ingredients.length}),n.jsx(I,{type:"button",onClick:()=>{c()},children:"+"})]})]}),n.jsx("div",{children:e.ingredients.length>0&&e.ingredients.map((s,t)=>n.jsxs(Ee,{children:[n.jsxs(Ue,{children:[n.jsxs(Ve,{children:[n.jsx(x,{name:`ingredients.${t}.title`,children:({form:p})=>n.jsx(y,{flexDirection:"row",optionValue:d,onChange:k=>{p.setFieldValue(`ingredients.${t}.ingredient`,k),p.setFieldValue(`ingredients.${t}.ingredientId`,Ge())}})}),n.jsx($,{name:`ingredients.${t}.ingredient`,children:p=>n.jsx(m,{children:p})})]}),n.jsx(Le,{width:"150px",children:n.jsx(x,{name:`ingredients.${t}.measure`,as:qe,placeholder:"Measure"})}),n.jsx($,{name:`ingredients.${t}.measure`,children:p=>n.jsx(m,{children:p})})]}),n.jsx(Ne,{type:"button",onClick:()=>{a(t)},children:n.jsx(R,{fill:"currentColor"})})]},t))})]})})},Oe=i.div`
  width: 164px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,j=i.a`
  width: 44px;
  height: 44px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.linkSeeMore};
  border-radius: 10px;
  color: ${({theme:e})=>e.linkSeeMore};
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${({theme:e})=>e.colorText};
    color: ${({theme:e})=>e.colorText};
  }
`,Ye=()=>n.jsxs(Oe,{children:[n.jsx(j,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Facebook",title:"Facebook",children:n.jsx(U,{fill:"currentColor"})}),n.jsx(j,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Instagram",title:"Instagram",children:n.jsx(V,{fill:"currentColor"})}),n.jsx(j,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Youtube",title:"Youtube",children:n.jsx(L,{fill:"currentColor"})})]}),Je=i.div`
  margin-top: 80px;
  @media screen and (min-width: 1280px) {
    width: 313px;
    margin-top: 0;
  }
`,Ke=i.h4`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33; /* 133.333% */
  text-align: left;
`,Qe=i.h4`
  margin-bottom: 28px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33; /* 133.333% */
  text-align: left;
`,We=i(q)`
  display: flex;
  align-items: flex-start;
`,Xe=i.li`
  display: flex;
  width: 335px;
  height: 90px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 313px;
  }
`,Ze=i.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`,en=i.div`
  width: 232px;
  height: 90px;
  margin-left: 8px;
  text-align: left;
  @media screen and (min-width: 768px) {
    margin-left: 14px;
  }
`,nn=i.p`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.colorText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375; /* 137.5% */
`,tn=i.p`
  /* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; */
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.linkSeeMore};

  @media screen and (min-width: 768px) {
    line-height: 1.43;
  }
`,rn=i.ul`
  width: 336px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 313px;
    gap: 28px;
  }
`,on=()=>{const e=w();b.useEffect(()=>{e(N())},[e]);const r=u(ge),o=u(he);return n.jsxs(Je,{children:[n.jsx(Ke,{children:"Follow Us"}),n.jsx(Ye,{}),n.jsx(Qe,{children:"Popular drinks"}),o?n.jsx(G,{}):n.jsx(rn,{children:r.map(d=>n.jsx(Xe,{children:n.jsxs(We,{to:`/drinks/${d._id}`,children:[n.jsx(Ze,{src:d.drinkThumb,alt:"SVG Image"}),n.jsxs(en,{children:[n.jsx(nn,{children:d.drink}),n.jsx(tn,{style:{},children:d.shortDescription})]})]})},d._id))})]})},an=v().shape({drink:h().trim().required("Enter a drink title"),shortDescription:h().trim().required("Enter a drink recipe"),category:h().required("Select drink category"),glass:h().required("Select drink glass"),description:h().trim().required("Tell you drink description"),ingredients:H().of(v().shape({ingredient:h().required("Select one of ingridient name"),measure:h().required("Required")})).required(),alcoholic:h().required("Select an alcohol type of drink")}),xn=()=>{const e=w(),r=O(),{_id:o}=u(Y),d=(a,c)=>{a.owner=o;const s=new FormData;for(let t in a)t==="ingredients"?s.append(t,JSON.stringify(a[t])):s.append(t,a[t]);for(const t of s.entries())console.log(t[0],t[1]);e(W(s)).then(()=>{X.success("New coctail was created!",{duration:4e3,position:"top-center",icon:"👏",...fe}),r("/my")}).catch(t=>{console.log(t)}),c.resetForm()};return n.jsx(n.Fragment,{children:n.jsx(me,{children:n.jsxs(J,{children:[n.jsx(ue,{style:{display:"flex",flex:"start"},children:"Add drink"}),n.jsxs(be,{children:[n.jsx(K,{initialValues:{drinkThumb:"",drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[{ingredient:"",measure:""}],owner:""},validationSchema:an,onSubmit:d,children:({setFieldValue:a,errors:c,touched:s,values:t})=>n.jsxs(Q,{style:{margin:"auto"},encType:"multipart/form-data",autoComplete:"off",children:[n.jsx(Te,{errors:c,touched:s,setFieldValue:a,values:t}),n.jsx(He,{errors:c,touched:s,values:t}),n.jsx(Ae,{errors:c,touched:s}),n.jsx(we,{type:"submit",children:"Add"})]})}),n.jsx(on,{})]})]})})})};export{xn as default};
