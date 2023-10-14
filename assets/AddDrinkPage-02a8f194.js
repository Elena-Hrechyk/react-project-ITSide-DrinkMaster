import{s as i,r as f,j as e,a as w,h as A,A as E,u,d as x,D as m,i as R,B as P,E as v,S as V,H as q,I as L,c as M,J as U,L as B,e as D,f as h,K as N,x as G,M as O,C as X,l as H,F as J,O as Y,_ as K}from"./index-14f86d25.js";import{D as Q,a as W,b as Z,c as ee,d as ie,e as ne,f as te,g as re,h as oe,i as ae}from"./Drinks_bg3_desk@2x-fb48a17d.js";import{S as de}from"./react-select.esm-8c467a28.js";import{s as se,b as le,a as pe}from"./selectors-a7d85374.js";import{d as ce,a as xe}from"./drinksSelectors-29c49a96.js";i.div``;const ge=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  text-align: center;
  padding: 80px 0 80px 0;
  /* background-color: '#0A0A11'; */
  font-size: 14px;

  /* background-size: cover; */
  /* background-repeat: no-repeat; */
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
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
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
    background-image: url(${Q});
    background-size: contain;

    background-repeat: no-repeat;
    background-position:
      left -97px top -331px,
      right -497px top -287px;
  }

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${W});
    background-size: contain;

    background-repeat: no-repeat;
    background-position: left top -160px;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${Z}), url(${ee});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${ie}), url(${ne});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -194px top -332px,
      right -78px top -96px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${te}), url(${re});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -97px top -331px,
      right -497px top -287px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${oe}), url(${ae});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left -27px top -180px,
      right -258px top -68px;
  }
`;i.label`
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: white;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;i.input`
  display: none;
`;const he=i.div`
  font-size: 18px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  background: #1f263f;
  color: #f3f3f3;
`,y=({onChange:r,optionValue:t,flexDirection:o})=>{const[s,a]=f.useState(!1),p={valueContainer:n=>({...n,display:"flex",flexDirection:o,paddingLeft:18}),control:n=>({...n,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(n,{isFocused:c})=>({...n,backgroundColor:"#161F37",borderRadius:20,color:c?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:n=>({...n,backgroundColor:"#161F37",borderRadius:20}),singleValue:n=>({...n,color:"#F3F3F3"}),dropdownIndicator:n=>({...n,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:s?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:n=>({...n,display:"none"})},d={width:"100%"};return e.jsx("div",{style:d,children:e.jsx(de,{options:t,placeholder:"",styles:{...p},onChange:n=>r(n.value),onMenuOpen:()=>a(!0),onMenuClose:()=>a(!1)})})},me=i.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
margin-top: 40px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-direction: row;
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    margin-top: 60px;
    width: 100%;
  }
`,C=i.input`
  padding-bottom: 14px;
  padding-top: 31px;
  background-color: transparent;
  border: transparent;
  color: #fff;
  width: 335px;
  &:focus{
    outline: transparent;
  }
  &:focus {
    border: none;
  }
  @media (min-width: 768px) and (max-width: 1439.98px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 352px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    /* justify-content: space-between; */
    width: 339px;
  }
`,b=i.div`
  border-bottom: 0.5px solid #f3f3f380;
  padding-left: 10px;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 352px;
  }
  @media (min-width: 1440px) {
    width: 339px;
  }
`,ue=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,F={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},fe=i.div`
  width: 335px; ///// задать гнучкий розмір
  height: 320px;
  background-color: #161f3780;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;
  @media (min-width: 768px) and (max-width: 1339.98px) {
    width: 320px;
    height: 320px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,be=i.label`
  background-color: white;
  width: 50px;
  height: 50px;
  border: none;
  padding: 18px;
  border-radius: 6px;
  margin-bottom: 18px;
  display: inline-block;
    /* padding: 6px 12px; */
    cursor: pointer;
    
    /* color: white; */
    /* border: 1px solid #ccc; */
    /* border-radius: 4px; */
    text-align: center;



`,we=i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,_=i.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;

`,S=i.label`
  position: relative;
  color: #f3f3f380;

  &:checked{
    color: white;
  }
`,I=i.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  + .radio-label {
    &:before {
      content: '';
      border-radius: 100%;
      border: 2px solid #f3f3f380;
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
        /* background-color: #red; */
        border: 2px solid #ffffff;
        box-shadow: inset 0 0 0 4px #000000;
      }
    }
  }
  &:focus {
    + .radio-label {
      color: #d9d9d9;
      &:before {
        outline: none;
        box-shadow: inset 0 0 0 4px #000000;
        border-radius: 100%;
        border: 2px solid #ffffff;
        background: #ffffff;
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
        box-shadow: inset 0 0 0 4px #000000;
        border-radius: 100%;
        border: 2px solid #ffffff;
        background: #ffffff;
        color: #ffffff;
}

&:checked + .radio-label {
   color: #d9d9d9; 
}
  /* &:disabled {
    + .radio-label {
      &:before {
        box-shadow: inset 0 0 0 4px #f4f4f4;
        border-color: #fc0909;
        background: #39e61a;
      }
    }
  } */
`;i.label`
  display: inline-block;
      background-color: white;
  padding: 6px 12px;
  cursor: pointer;
  /* background-color: blue; */
  color: red;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;i.input`
  display: none;

`;const ke=i.input`
  position: 'relative',;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,je=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 42px;
  background: #F3F3F3;
  color: #161f37;
  width: 107px;
  height: 46px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  
  padding: 18px 44px;
  
  cursor: pointer;

`,ye=i.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`,ve="/react-project-ITSide-DrinkMaster/assets/plus-6c79836d.svg",De=({setFieldValue:r,errors:t,touched:o,values:s})=>{const[a,p]=f.useState(null),d=w();f.useEffect(()=>{d(A()),d(E())},[d]);const n=u(se),c=u(le),k=n.map(l=>({label:l,value:l})),T=c.map(l=>({label:l,value:l})),z=l=>{const g=l.target.files[0];console.log(g),l.target.files.length>0&&p({picture:g,src:URL.createObjectURL(g)}),r("drinkThumb",g||"")};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),e.jsxs(me,{children:[e.jsx(fe,{children:a===null?e.jsxs(e.Fragment,{children:[e.jsxs(be,{style:{backgroundColor:"white"},children:[e.jsx(x,{name:"drinkThumb",id:"drinkThumb",type:"file",as:ke,onChange:z,accept:"image/*"}),e.jsx("img",{src:ve,alt:"SVG Image",style:{filter:"invert(1)",fill:"black",marginTop:"-18px"}})]}),e.jsx("p",{children:"Add image"})]}):e.jsx(ye,{src:a.src,alt:a.src})}),e.jsxs(ue,{children:[e.jsx(x,{as:C,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink",value:s.drink||""}),o.drink&&t.drink?e.jsx(m,{children:t.drink}):null,e.jsx(b,{}),e.jsx(x,{as:C,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe",value:s.shortDescription||""}),o.shortDescription&&t.shortDescription?e.jsx(m,{children:t.shortDescription}):null,e.jsx(b,{}),e.jsxs("div",{style:F,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),e.jsx(x,{name:"category",id:"category",touched:o.category,error:t.category,children:({form:l})=>e.jsx(y,{flexDirection:"row-reverse",optionValue:k,onChange:g=>l.setFieldValue("category",g)})})]}),"    ",o.category&&t.category?e.jsx(m,{children:t.category}):null,e.jsx(b,{}),e.jsxs("div",{style:F,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),e.jsx(x,{name:"glass",children:({form:l})=>e.jsx(y,{flexDirection:"row-reverse",optionValue:T,onChange:g=>l.setFieldValue("glass",g)})})]}),"    ",o.glass&&t.glass?e.jsx(m,{children:t.glass}):null,e.jsx(b,{}),e.jsxs(we,{children:[e.jsxs(_,{children:[e.jsx(x,{as:I,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),e.jsx(S,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),e.jsxs(_,{children:[e.jsx(x,{as:I,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),e.jsx(S,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},Ce=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,Fe=i.textarea`
width: 335px;
min-height: 184px;
background-color:transparent;
border-radius: 14px;
border: 1px solid #f3f3f380;
display: flex;
flex: start;
padding-top: 16px;
padding-left: 18px;
color: white;
margin-top: 40px;
  @media (min-width: 768px)  {
    width: 480px;
    padding-top: 14px;
padding-left: 24px;
  }
`,_e=({errors:r,touched:t})=>e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(x,{as:Fe,name:"description",placeholder:"Enter the recipe",className:"text-area"}),t.description&&r.description?e.jsx(m,{children:r.description}):null]})}),Se=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  }
  @media (min-width: 1440px) {
    width: 540px;
  }
`,Ie=i.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6.5rem;
  height: 2.5rem;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  margin-left: 77px;
  background-color: transparent;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    margin-left: 370px;
  }
  @media (min-width: 1440px) {
    margin-left: 206px;
  }
`,$=i.button`
  /* cursor: pointer; */
  color: white;
  background-color: transparent;
  border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,$e=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: space-between;
`,Te=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,ze=i.div`
  display: flex;
`,Ae=i.div`
  width: 200px;
  display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 332px;
  }
  @media (min-width: 1440px) {
    width: 316px;
  }
`,Ee=i.div`
  width: 101px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;
  padding-left: 18px;
  margin-left: 8px;
  @media (min-width: 768px) {
    width: 150px;
    margin-left: 14px;
  }
`,Re=i.input`
  background-color: transparent;
  border: transparent;
  width: 90%;
  color: white;
  &:focus {
    outline: transparent;
  }
`,Pe=i.button`
  padding-right: 0px;
  /* width: 16px; */
  background-color: transparent;
  border: none;
`,Ve=i.img`
  /* width:16px; */
  fill: white;
`,qe="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let Le=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((t,o)=>(o&=63,o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o>62?t+="-":t+="_",t),"");const Me=({values:r})=>{const t=w();f.useEffect(()=>{t(R())},[t]);const s=u(pe).map(a=>({label:a,value:a}));return console.log(r),e.jsx(P,{name:"ingredients",render:({remove:a,push:p})=>e.jsxs(Se,{children:[e.jsxs($e,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(Ie,{children:[e.jsx($,{type:"button",onClick:()=>{let d=r.ingredients.length;a(d-1)},children:"-"}),e.jsx("p",{children:r.ingredients.length}),e.jsx($,{type:"button",onClick:()=>{p()},children:"+"})]})]}),e.jsx("div",{children:r.ingredients.length>0&&r.ingredients.map((d,n)=>e.jsxs(Te,{children:[e.jsxs(ze,{children:[e.jsxs(Ae,{children:[e.jsx(x,{name:`ingredients.${n}.title`,children:({form:c})=>e.jsx(y,{flexDirection:"row",optionValue:s,onChange:k=>{c.setFieldValue(`ingredients.${n}.ingredient`,k),c.setFieldValue(`ingredients.${n}.ingredientId`,Le())}})}),e.jsx(v,{name:`ingredients.${n}.ingredient`,children:c=>e.jsx(m,{children:c})})]}),e.jsx(Ee,{width:"150px",children:e.jsx(x,{name:`ingredients.${n}.measure`,as:Re,placeholder:"Measure"})}),e.jsx(v,{name:`ingredients.${n}.measure`,children:c=>e.jsx(m,{children:c})})]}),e.jsx(Pe,{type:"button",onClick:()=>{a(n)},children:e.jsx(Ve,{src:qe,alt:`Xicon-${n}`})})]},n))})]})})},Ue=i.div`
  width: 164px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`,j=i.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
`,Be=()=>e.jsxs(Ue,{children:[e.jsxs("a",{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Facebook",children:[" ",e.jsx(j,{children:e.jsx(V,{})})]}),e.jsx("a",{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Instagram",children:e.jsx(j,{children:e.jsx(q,{})})}),e.jsx("a",{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Youtube",children:e.jsx(j,{children:e.jsx(L,{})})})]}),Ne=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 90px;
`,Ge=i(M)`
  display: flex;
  align-items: flex-start;
  color: white;
`,Oe=i.li`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`,Xe=i.img`
   width: 90px;
   height: 90px;
   border-radius: 8px;
`,He=i.div`
  margin-left: 8px;
  width: 232px;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column;
  align-items: flex-start; */
  gap: 8px;
  text-align: left;
  height: 89px;
  font-size: 16px;
`,Je=i.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`,Ye=i.ul`
  display: flex;
  gap: 32px;
    width: 336px;
    flex-wrap: wrap;
    @media (min-width: 768px) and (max-width: 1439.98px) {
      width: 704px;
  }
   @media (min-width: 1440px) {
    width: 313px;
  }

  `,Ke=()=>{const r=w();f.useEffect(()=>{r(U())},[r]);const t=u(ce),o=u(xe);return e.jsxs(Ne,{children:[e.jsx("h4",{style:{marginBottom:"20px"},children:"Follow Us"}),e.jsx(Be,{}),e.jsx("h4",{style:{marginTop:"40px"},children:"PopularDrinks"}),o?e.jsx(B,{}):e.jsx(Ye,{children:t.map(s=>e.jsx(Oe,{children:e.jsxs(Ge,{to:`/drinks/${s._id}`,children:[e.jsx(Xe,{src:s.drinkThumb,alt:"SVG Image"}),e.jsxs(He,{children:[e.jsx("h4",{children:s.drink}),e.jsx(Je,{style:{},children:s.shortDescription})]})]})},s._id))})]})},Qe=D().shape({drink:h().trim().required("Enter a drink title"),shortDescription:h().trim().required("Enter a drink recipe"),category:h().required("Select drink category"),glass:h().required("Select drink glass"),description:h().trim().required("Tell you drink description"),ingredients:N().of(D().shape({ingredient:h().required("Select one of ingridient name"),measure:h().required("Required")})).required(),alcoholic:h().required("Select an alcohol type of drink")}),ti=()=>{const r=w(),t=G(),{_id:o}=u(O),s=(a,p)=>{a.owner=o;const d=new FormData;for(let n in a)n==="ingredients"?d.append(n,JSON.stringify(a[n])):d.append(n,a[n]);for(const n of d.entries())console.log(n[0],n[1]);r(Y(d)).then(()=>{K.success("New coctail was created!",{duration:4e3,position:"top-center",icon:"👏",...he}),t("/my")}).catch(n=>{console.log(n)}),p.resetForm()};return e.jsx(e.Fragment,{children:e.jsx(ge,{children:e.jsxs(X,{children:[e.jsx(H,{initialValues:{drinkThumb:"",drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[{ingredient:"",measure:""}],owner:""},validationSchema:Qe,onSubmit:s,children:({setFieldValue:a,errors:p,touched:d,values:n})=>e.jsxs(J,{style:{margin:"auto"},encType:"multipart/form-data",autoComplete:"off",children:[e.jsx(De,{errors:p,touched:d,setFieldValue:a,values:n}),e.jsx(Me,{errors:p,touched:d,values:n}),e.jsx(_e,{errors:p,touched:d}),e.jsx(je,{type:"submit",children:"Add"})]})}),e.jsx(Ke,{})]})})})};export{ti as default};
