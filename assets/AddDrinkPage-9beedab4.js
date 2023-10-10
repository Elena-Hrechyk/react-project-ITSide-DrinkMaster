import{s as i,r as m,j as e,a as k,h as T,x as z,u,d as x,D as w,i as A,y as V,S as E,z as P,A as R,c as B,B as L,L as U,e as M,f as h,E as q,H as N,I as G,C as O,l as X,F as H,J}from"./index-b7c11122.js";import{D as Y,a as K,b as Q,c as W,d as Z,e as ee,f as ie,g as ne,h as te,i as re,m as oe,j as ae}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{S as de}from"./react-select.esm-7dee8a3a.js";import{s as se,b as le,a as pe}from"./selectors-a7d85374.js";i.div`
 

`;const ce=i.section`
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
    background-image: url(${K});
    background-size: contain;

    background-repeat: no-repeat;
    background-position:
      left top -160px;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${Q}), url(${W});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${Z}), url(${ee});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
    left -194px top -332px,
    right -78px top -96px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${ie}), url(${ne});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
    left -97px top -331px,
    right -497px top -287px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${te}), url(${re});
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

`;const v=({onChange:d,optionValue:t,flexDirection:r})=>{const[a,l]=m.useState(!1),s={valueContainer:n=>({...n,display:"flex",flexDirection:r,paddingLeft:18}),control:n=>({...n,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(n,{isFocused:g})=>({...n,backgroundColor:"#161F37",borderRadius:20,color:g?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:n=>({...n,backgroundColor:"#161F37",borderRadius:20}),singleValue:n=>({...n,color:"#F3F3F3"}),dropdownIndicator:n=>({...n,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:a?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:n=>({...n,display:"none"})},p={width:"100%"};return e.jsx("div",{style:p,children:e.jsx(de,{options:t,placeholder:"",styles:{...s},onChange:n=>d(n.value),onMenuOpen:()=>l(!0),onMenuClose:()=>l(!1)})})},xe=i.div`
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
`,ge=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,C={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},he=i.div`
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
`,me=i.label`
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



`,ue=i.div`
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

`;const fe=i.input`
  position: 'relative',;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,be=i.button`
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

`,we=i.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`,ke="/react-project-ITSide-DrinkMaster/assets/plus-6c79836d.svg",je=({setFieldValue:d,errors:t,touched:r})=>{const[a,l]=m.useState(null),s=k();m.useEffect(()=>{s(T()),s(z())},[s]);const p=u(se),n=u(le),g=p.map(o=>({label:o,value:o})),j=n.map(o=>({label:o,value:o})),f=o=>{const c=o.target.files[0];o.target.files.length>0&&l({picture:c,src:URL.createObjectURL(c)}),d("drinkThumb",c)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),e.jsxs(xe,{children:[e.jsx(he,{children:a===null?e.jsxs(e.Fragment,{children:[e.jsxs(me,{style:{backgroundColor:"white"},children:[e.jsx(x,{name:"drinkThumb",id:"drinkThumb",type:"file",as:fe,onChange:f,accept:"image/*"}),e.jsx("img",{src:ke,alt:"SVG Image",style:{filter:"invert(1)",fill:"black",marginTop:"-18px"}})]}),e.jsx("p",{children:"Add image"})]}):e.jsx(we,{src:a.src,alt:a.src})}),e.jsxs(ge,{children:[e.jsx(x,{as:D,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink"}),r.drink&&t.drink?e.jsx(w,{children:t.drink}):null,e.jsx(b,{}),e.jsx(x,{as:D,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe"}),r.shortDescription&&t.shortDescription?e.jsx(w,{children:t.shortDescription}):null,e.jsx(b,{}),e.jsxs("div",{style:C,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),e.jsx(x,{name:"category",id:"category",touched:r.category,error:t.category,children:({form:o})=>e.jsx(v,{flexDirection:"row-reverse",optionValue:g,onChange:c=>o.setFieldValue("category",c)})})]}),e.jsx(b,{}),e.jsxs("div",{style:C,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),e.jsx(x,{name:"glass",children:({form:o})=>e.jsx(v,{flexDirection:"row-reverse",optionValue:j,onChange:c=>o.setFieldValue("glass",c)})})]}),e.jsx(b,{}),e.jsxs(ue,{children:[e.jsxs(F,{children:[e.jsx(x,{as:S,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),e.jsx(_,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),e.jsxs(F,{children:[e.jsx(x,{as:S,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),e.jsx(_,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},ye=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,ve=i.textarea`
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
`,De=({errors:d,touched:t})=>e.jsx(e.Fragment,{children:e.jsxs(ye,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(x,{as:ve,name:"description",placeholder:"Enter the recipe",className:"text-area"}),t.description&&d.description?e.jsx(w,{children:d.description}):null]})}),Ce=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,Fe=i.div`
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
`,_e=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,Se=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,Ie=i.div`
display: flex;


`,$e=i.div`
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
`,Te=i.div`
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
`,ze=i.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,Ae=i.button`
padding-right: 0px;
/* width: 16px; */
background-color: transparent;
border: none;
`,Ve=i.img`
/* width:16px; */
fill: white;
`,Ee="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let Pe=(d=21)=>crypto.getRandomValues(new Uint8Array(d)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const Re=({errors:d,touched:t})=>{const[r,a]=m.useState(0),l={title:"",measure:""},s=k();m.useEffect(()=>{s(A())},[s]);const n=u(pe).map(g=>({label:g,value:g}));return e.jsxs(V,{name:"ingredients",render:({form:{values:{ingredients:g}},push:j,remove:f})=>e.jsxs(Ce,{children:[e.jsxs(_e,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(Fe,{children:[e.jsx(I,{type:"button",onClick:()=>{f(),a(r-1)},children:"-"}),e.jsx("p",{children:r}),e.jsx(I,{type:"button",onClick:()=>{j(l),a(r+1)},children:"+"})]})]}),e.jsx("div",{children:g.length>0&&g.map(o=>e.jsx(e.Fragment,{children:e.jsxs(Se,{children:[e.jsxs(Ie,{children:[e.jsx($e,{children:e.jsx(x,{name:`ingredients.${o}.title`,children:({form:c})=>e.jsx(v,{flexDirection:"row",optionValue:n,onChange:$=>{c.setFieldValue(`ingredients.${o}.ingredient`,$),c.setFieldValue(`ingredients.${o}.ingredientId`,Pe())}})})}),e.jsx(Te,{width:"150px",children:e.jsx(x,{name:`ingredients.${o}.measure`,id:`ingredients.${o}.measure`,as:ze,placeholder:"Measure",marginBottom:"0"})})]}),e.jsx(Ae,{type:"button",onClick:()=>{a(r-1),f(o)},children:e.jsx(Ve,{src:Ee,alt:`Xicon-${o}`})})]},o)}))})]}),children:["  ",t.ingredients&&d.ingredients?e.jsx(w,{children:d.ingredients}):null]})},Be=i.div`
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
`,Le=()=>e.jsxs(Be,{children:[e.jsxs("a",{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Facebook",children:[" ",e.jsx(y,{children:e.jsx(E,{})})]}),e.jsx("a",{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Instagram",children:e.jsx(y,{children:e.jsx(P,{})})}),e.jsx("a",{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Youtube",children:e.jsx(y,{children:e.jsx(R,{})})})]}),Ue=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 90px;
`,Me=i(B)`
  display: flex;
  align-items: flex-start;
  color: white;
`,qe=i.li`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`,Ne=i.img`
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
`,Oe=i.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`,Xe=i.ul`
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

  `,He=()=>{const d=k();m.useEffect(()=>{d(L())},[d]);const t=u(oe),r=u(ae);return e.jsxs(Ue,{children:[e.jsx("h4",{style:{marginBottom:"20px"},children:"Follow Us"}),e.jsx(Le,{}),e.jsx("h4",{style:{marginTop:"40px"},children:"PopularDrinks"}),r?e.jsx(U,{}):e.jsx(Xe,{children:t.map(a=>e.jsx(qe,{children:e.jsxs(Me,{to:`/drinks/${a._id}`,children:[e.jsx(Ne,{src:a.drinkThumb,alt:"SVG Image"}),e.jsxs(Ge,{children:[e.jsx("h4",{children:a.drink}),e.jsx(Oe,{style:{},children:a.shortDescription})]})]})},a._id))})]})},Je=M().shape({drink:h().trim().required("Enter a drink title"),shortDescription:h().trim().required("Enter a drink recipe"),category:h().required("Select drink category"),glass:h().required("Select drink glass"),description:h().trim().required("Tell you drink description"),ingredients:q().length(1,"At least one ingredient must be added").required(),alcoholic:h().required("Select an alcohol type of drink")}),Ze=()=>{const d=k(),t=N(),{_id:r}=u(G),a=(l,s)=>{l.owner=r;const p=new FormData;for(let n in l)n==="ingredients"?p.append(n,JSON.stringify(l[n])):p.append(n,l[n]);for(const n of p.entries())console.log(n[0],n[1]);d(J(p)),t("/my"),s.resetForm()};return e.jsx(e.Fragment,{children:e.jsx(ce,{children:e.jsxs(O,{children:[e.jsx(X,{initialValues:{drinkThumb:null,drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[],owner:""},validationSchema:Je,onSubmit:a,children:({setFieldValue:l,errors:s,touched:p})=>e.jsxs(H,{style:{margin:"auto"},encType:"multipart/form-data",children:[e.jsx(je,{errors:s,touched:p,setFieldValue:l}),e.jsx(Re,{errors:s,touched:p}),e.jsx(De,{errors:s,touched:p}),e.jsx(be,{type:"submit",children:"Add"})]})}),e.jsx(He,{})]})})})};export{Ze as default};
