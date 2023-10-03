import{s as i,r as m,j as e,a as k,h as T,x as z,u,d as x,D as w,i as A,y as V,S as E,z as P,A as R,c as B,B as L,L as U,e as M,f as h,E as q,H as G,C as N,l as O,F as X,I as H}from"./index-811ef06d.js";import{D as Y,a as J,b as K,c as Q,d as W,e as Z,f as ee,g as ie,h as ne,i as te,m as re,j as oe}from"./Drinks_bg3_desk@2x-86194370.js";import{S as ae}from"./react-select.esm-ed4c0356.js";import{s as de,b as se,a as le}from"./selectors-a7d85374.js";i.div`
 

`;const pe=i.section`
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
  background-image: url(${Y});
  background-size: contain;

  background-repeat: no-repeat;
  background-position:
  left -97px top -331px,
    right -497px top -287px;
  }


  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${J});
    background-size: contain;

    background-repeat: no-repeat;
    background-position:
      left top -160px;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${K}), url(${Q});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${W}), url(${Z});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
    left -194px top -332px,
    right -78px top -96px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${ee}), url(${ie});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
    left -97px top -331px,
    right -497px top -287px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${ne}), url(${te});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
    left -27px top -180px,right -258px top -68px;
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

`;const v=({onChange:s,optionValue:t,flexDirection:r})=>{const[n,p]=m.useState(!1),d={valueContainer:a=>({...a,display:"flex",flexDirection:r,paddingLeft:18}),control:a=>({...a,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(a,{isFocused:g})=>({...a,backgroundColor:"#161F37",borderRadius:20,color:g?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:a=>({...a,backgroundColor:"#161F37",borderRadius:20}),singleValue:a=>({...a,color:"#F3F3F3"}),dropdownIndicator:a=>({...a,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:n?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:a=>({...a,display:"none"})},l={width:"100%"};return e.jsx("div",{style:l,children:e.jsx(ae,{options:t,placeholder:"",styles:{...d},onChange:a=>s(a.value),onMenuOpen:()=>p(!0),onMenuClose:()=>p(!1)})})},ce=i.div`
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
`,D=i.input`
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
`,xe=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,C={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},ge=i.div`
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
`,he=i.label`
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



`,me=i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,F=i.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;

`,_=i.label`
  position: relative;
  color: #f3f3f380;

  &:checked{
    color: white;
  }
`,S=i.input`
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

`;const ue=i.input`
  position: 'relative',;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,fe=i.button`
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

`,be=i.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`,we="/react-project-ITSide-DrinkMaster/assets/plus-6c79836d.svg",ke=({setFieldValue:s,errors:t,touched:r})=>{const[n,p]=m.useState(null),d=k();m.useEffect(()=>{d(T()),d(z())},[d]);const l=u(de),a=u(se),g=l.map(o=>({label:o,value:o})),j=a.map(o=>({label:o,value:o})),f=o=>{const c=o.target.files[0];o.target.files.length>0&&p({picture:c,src:URL.createObjectURL(c)}),s("drinkThumb",c)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),e.jsxs(ce,{children:[e.jsx(ge,{children:n===null?e.jsxs(e.Fragment,{children:[e.jsxs(he,{style:{backgroundColor:"white"},children:[e.jsx(x,{name:"drinkThumb",id:"drinkThumb",type:"file",as:ue,onChange:f,accept:"image/*"}),e.jsx("img",{src:we,alt:"SVG Image",style:{filter:"invert(1)",fill:"black",marginTop:"-18px"}})]}),e.jsx("p",{children:"Add image"})]}):e.jsx(be,{src:n.src,alt:n.src})}),e.jsxs(xe,{children:[e.jsx(x,{as:D,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink"}),r.drink&&t.drink?e.jsx(w,{children:t.drink}):null,e.jsx(b,{}),e.jsx(x,{as:D,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe"}),r.shortDescription&&t.shortDescription?e.jsx(w,{children:t.shortDescription}):null,e.jsx(b,{}),e.jsxs("div",{style:C,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),e.jsx(x,{name:"category",id:"category",touched:r.category,error:t.category,children:({form:o})=>e.jsx(v,{flexDirection:"row-reverse",optionValue:g,onChange:c=>o.setFieldValue("category",c)})})]}),e.jsx(b,{}),e.jsxs("div",{style:C,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),e.jsx(x,{name:"glass",children:({form:o})=>e.jsx(v,{flexDirection:"row-reverse",optionValue:j,onChange:c=>o.setFieldValue("glass",c)})})]}),e.jsx(b,{}),e.jsxs(me,{children:[e.jsxs(F,{children:[e.jsx(x,{as:S,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),e.jsx(_,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),e.jsxs(F,{children:[e.jsx(x,{as:S,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),e.jsx(_,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},je=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,ye=i.textarea`
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
`,ve=({errors:s,touched:t})=>e.jsx(e.Fragment,{children:e.jsxs(je,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(x,{as:ye,name:"description",placeholder:"Enter the recipe",className:"text-area"}),t.description&&s.description?e.jsx(w,{children:s.description}):null]})}),De=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,Ce=i.div`
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

`,I=i.button`
/* cursor: pointer; */
color: white;
background-color: transparent;
border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,Fe=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,_e=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,Se=i.div`
display: flex;


`,Ie=i.div`
width:200px;
display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;
justify-content: flex-end;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width:332px;
  }
   @media (min-width: 1440px) {
    width: 316px;
  }
`,$e=i.div`
width:101px;

display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;
  padding-left: 18px;
  margin-left: 8px;
  @media (min-width: 768px) {
    width:150px;
    margin-left: 14px;
  }
`,Te=i.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,ze=i.button`
padding-right: 0px;
/* width: 16px; */
background-color: transparent;
border: none;
`,Ae=i.img`
/* width:16px; */
fill: white;
`,Ve="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let Ee=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const Pe=({errors:s,touched:t})=>{const[r,n]=m.useState(0),p={title:"",measure:""},d=k();m.useEffect(()=>{d(A())},[d]);const a=u(le).map(g=>({label:g,value:g}));return e.jsxs(V,{name:"ingredients",render:({form:{values:{ingredients:g}},push:j,remove:f})=>e.jsxs(De,{children:[e.jsxs(Fe,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(Ce,{children:[e.jsx(I,{type:"button",onClick:()=>{f(),n(r-1)},children:"-"}),e.jsx("p",{children:r}),e.jsx(I,{type:"button",onClick:()=>{j(p),n(r+1)},children:"+"})]})]}),e.jsx("div",{children:g.length>0&&g.map(o=>e.jsx(e.Fragment,{children:e.jsxs(_e,{children:[e.jsxs(Se,{children:[e.jsx(Ie,{children:e.jsx(x,{name:`ingredients.${o}.title`,children:({form:c})=>e.jsx(v,{flexDirection:"row",optionValue:a,onChange:$=>{c.setFieldValue(`ingredients.${o}.ingredient`,$),c.setFieldValue(`ingredients.${o}.ingredientId`,Ee())}})})}),e.jsx($e,{width:"150px",children:e.jsx(x,{name:`ingredients.${o}.measure`,as:Te,placeholder:"Measure",marginBottom:"0"})})]}),e.jsx(ze,{type:"button",onClick:()=>{n(r-1),f(o)},children:e.jsx(Ae,{src:Ve,alt:`Xicon-${o}`})})]},o)}))})]}),children:["  ",t.ingredients&&s.ingredients?e.jsx(w,{children:s.ingredients}):null]})},Re=i.div`
  width: 164px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`,y=i.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
`,Be=()=>e.jsxs(Re,{children:[e.jsxs("a",{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Facebook",children:[" ",e.jsx(y,{children:e.jsx(E,{})})]}),e.jsx("a",{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Instagram",children:e.jsx(y,{children:e.jsx(P,{})})}),e.jsx("a",{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Youtube",children:e.jsx(y,{children:e.jsx(R,{})})})]}),Le=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 90px;
`,Ue=i(B)`
  display: flex;
  align-items: flex-start;
  color: white;
`,Me=i.li`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`,qe=i.img`
   width: 90px;
   height: 90px;
   border-radius: 8px;
`,Ge=i.div`
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
`,Ne=i.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`,Oe=i.ul`
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

  `,Xe=()=>{const s=k();m.useEffect(()=>{s(L())},[s]);const t=u(re),r=u(oe);return e.jsxs(Le,{children:[e.jsx("h4",{style:{marginBottom:"20px"},children:"Follow Us"}),e.jsx(Be,{}),e.jsx("h4",{style:{marginTop:"40px"},children:"PopularDrinks"}),r?e.jsx(U,{}):e.jsx(Oe,{children:t.map(n=>e.jsx(Me,{children:e.jsxs(Ue,{to:`/drinks/${n._id}`,children:[e.jsx(qe,{src:n.drinkThumb,alt:"SVG Image"}),e.jsxs(Ge,{children:[e.jsx("h4",{children:n.drink}),e.jsx(Ne,{style:{},children:n.shortDescription})]})]})},n._id))})]})},He=M().shape({drink:h().trim().required("Enter a drink title"),shortDescription:h().trim().required("Enter a drink recipe"),category:h().required("Select drink category"),glass:h().required("Select drink glass"),description:h().trim().required("Tell you drink description"),ingredients:q().length(1,"At least one ingredient must be added").required(),alcoholic:h().required("Select an alcohol type of drink")}),We=()=>{const s=k(),{_id:t}=u(G),r=(n,p)=>{n.owner=t;const d=new FormData;for(let l in n)l==="ingredients"?d.append(l,JSON.stringify(n[l])):d.append(l,n[l]);for(const l of d.entries())console.log(l[0],l[1]);s(H(d)),p.resetForm()};return e.jsx(e.Fragment,{children:e.jsx(pe,{children:e.jsxs(N,{children:[e.jsx(O,{initialValues:{drinkThumb:null,drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[],owner:""},validationSchema:He,onSubmit:r,children:({setFieldValue:n,errors:p,touched:d})=>e.jsxs(X,{style:{margin:"auto"},encType:"multipart/form-data",children:[e.jsx(ke,{errors:p,touched:d,setFieldValue:n}),e.jsx(Pe,{errors:p,touched:d}),e.jsx(ve,{errors:p,touched:d}),e.jsx(fe,{type:"submit",children:"Add"})]})}),e.jsx(Xe,{})]})})})};export{We as default};
