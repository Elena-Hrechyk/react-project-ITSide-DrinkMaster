import{s as i,r as g,j as e,a as f,h as D,q as _,u as m,d as p,i as S,t as I,S as $,v as T,w as z,c as A,x as V,e as R,y as P,C as B,l as E,F as U,z as M}from"./index-a37bf858.js";import{D as G,a as N,b as L,c as O,d as X,e as H,f as Y,g as q,h as J,i as K,m as Q}from"./Drinks_bg3_desk@2x-7c26d4d6.js";import{S as W}from"./react-select.esm-dc7cf60f.js";import{s as Z,b as ee,a as ie}from"./selectors-a7d85374.js";i.div`
 

`;const ne=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  text-align: center;
  padding: 80px 0 80px 0;
  background-color: '#0A0A11';
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
    padding: 224px 0 568px 0;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1279.98px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1279.98px),
    (min-resolution: 192dpi) and (min-width: 1279.98px) {
  }

  background-image: url(${G});
  background-size: contain;

  background-repeat: no-repeat;
  background-position:
    left top -160px;

  /* Для экранов с разрешением 2x и шириной до 768px */
  @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 767.98px),
    (min-resolution: 192dpi) and (max-width: 767.98px) {
    background-image: url(${N});
    background-size: contain;

    background-repeat: no-repeat;
    background-position:
      left top -160px;
  }

  /* Для экранов с разрешением 1x и шириной от 768px до 1280px */
  @media (min-width: 768px) {
    background-image: url(${L}), url(${O});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right center;
  }
  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${X}), url(${H});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
  }

  /* Для экранов с разрешением 1x и шириной больше 1280px */
  @media (min-width: 1279.98px) {
    background-image: url(${Y}), url(${q});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
    left -97px top -331px,
    right -497px top -287px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1280px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px) {
    background-image: url(${J}), url(${K});
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    background-position:
      left top,
      right top;
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

`;const w=({onChange:o,optionValue:r})=>{const[t,c]=g.useState(!1),h={control:n=>({...n,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(n,{isFocused:a})=>({...n,backgroundColor:"#161F37",borderRadius:20,color:a?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:n=>({...n,backgroundColor:"#161F37",borderRadius:20}),singleValue:n=>({...n,color:"#F3F3F3"}),dropdownIndicator:n=>({...n,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:t?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:n=>({...n,display:"none"})},d={width:"100%"};return e.jsx("div",{style:d,children:e.jsx(W,{options:r,placeholder:"",styles:{...h},onChange:n=>o(n.value),onMenuOpen:()=>c(!0),onMenuClose:()=>c(!1)})})},te=i.div`
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
`,k=i.input`
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
`,u=i.div`
  border-bottom: 0.5px solid #f3f3f380;
  padding-left: 10px;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 352px;
  }
  @media (min-width: 1440px) {
    width: 339px;
  }
`,re=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,j={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},oe=i.div`
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
`,ae=i.label`
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



`,se=i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,y=i.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;

`,v=i.label`
  position: relative;
  color: #f3f3f380;

  &:checked{
    color: white;
  }
`,C=i.input`
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

`;const de=i.input`
  position: 'relative',;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,le=i.button`
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

`,pe=i.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  border-radius: 8px;
`,ce="/react-project-ITSide-DrinkMaster/assets/plus-6c79836d.svg",xe=({fileValue:o})=>{const[r,t]=g.useState(null),c=f();g.useEffect(()=>{c(D()),c(_())},[c]);const h=m(Z),d=m(ee),n=h.map(s=>({label:s,value:s})),a=d.map(s=>({label:s,value:s})),l=s=>{const x=s.target.files[0];s.target.files.length>0&&t({picture:x,src:URL.createObjectURL(x)}),o(x)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),e.jsxs(te,{children:[e.jsx(oe,{children:r===null?e.jsxs(e.Fragment,{children:[e.jsxs(ae,{style:{backgroundColor:"white"},children:[e.jsx(p,{name:"drinkThumb",id:"drinkThumb",type:"file",as:de,onChange:l,accept:"image/*"}),e.jsx("img",{src:ce,alt:"SVG Image",style:{filter:"invert(1)",fill:"black",marginTop:"-18px"}})]}),e.jsx("p",{children:"Add image"})]}):e.jsx(pe,{src:r.src,alt:r.src})}),e.jsxs(re,{children:[e.jsx(p,{as:k,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink"}),e.jsx(u,{}),e.jsx(p,{as:k,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe"}),e.jsx(u,{}),e.jsxs("div",{style:j,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),e.jsx(p,{name:"category",id:"category",children:({form:s})=>e.jsx(w,{optionValue:n,onChange:x=>s.setFieldValue("category",x)})})]}),e.jsx(u,{}),e.jsxs("div",{style:j,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),e.jsx(p,{name:"glass",children:({form:s})=>e.jsx(w,{optionValue:a,onChange:x=>s.setFieldValue("glass",x)})})]}),e.jsx(u,{}),e.jsxs(se,{children:[e.jsxs(y,{children:[e.jsx(p,{as:C,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),e.jsx(v,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),e.jsxs(y,{children:[e.jsx(p,{as:C,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),e.jsx(v,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},he=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,ge=i.textarea`
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
`,me=()=>e.jsxs(he,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(p,{as:ge,name:"description",placeholder:"Enter the recipe",className:"text-area"})]}),ue=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,fe=i.div`
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

`,F=i.button`
/* cursor: pointer; */
color: white;
background-color: transparent;
border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,be=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,we=i.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,ke=i.div`
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
    width: 540px;
  }
`,je=i.div`
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
`,ye=i.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,ve=i.button`

/* width: 16px; */
background-color: transparent;
border: none;
`,Ce=i.img`
/* width:16px; */
fill: white;
`,Fe="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let De=(o=21)=>crypto.getRandomValues(new Uint8Array(o)).reduce((r,t)=>(t&=63,t<36?r+=t.toString(36):t<62?r+=(t-26).toString(36).toUpperCase():t>62?r+="-":r+="_",r),"");const _e=()=>{const[o,r]=g.useState(0),t=f();g.useEffect(()=>{t(S())},[t]);const h=m(ie).map(n=>({label:n,value:n})),d=n=>{const a=[];for(let l=0;l<o;l++)a.push(e.jsxs(we,{children:[e.jsx(ke,{children:e.jsx(p,{name:`ingredients.${l}.title`,children:({form:s})=>e.jsx(w,{optionValue:h,onChange:x=>{s.setFieldValue(`ingredients.${l}.ingredient`,x),s.setFieldValue(`ingredients.${l}.ingredientId`,De())}})})}),e.jsx(je,{width:"150px",children:e.jsx(p,{name:`ingredients.${l}.measure`,as:ye,placeholder:"Measure",marginBottom:"0"})}),e.jsx(ve,{type:"button",onClick:()=>n.remove(l),children:e.jsx(Ce,{src:Fe,alt:`Xicon-${l}`})})]},l));return a};return e.jsxs(ue,{children:[e.jsxs(be,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(fe,{children:[e.jsx(F,{type:"button",onClick:()=>{o!==0&&r(o-1)},children:"-"}),e.jsx("p",{children:o}),e.jsx(F,{type:"button",onClick:()=>r(o+1),children:"+"})]})]}),e.jsx(I,{name:"ingredients",render:n=>e.jsx("div",{children:d(n)})})]})},Se=i.div`
  width: 164px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`,b=i.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
`,Ie=()=>e.jsxs(Se,{children:[e.jsxs("a",{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Facebook",children:[" ",e.jsx(b,{children:e.jsx($,{})})]}),e.jsx("a",{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Instagram",children:e.jsx(b,{children:e.jsx(T,{})})}),e.jsx("a",{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Youtube",children:e.jsx(b,{children:e.jsx(z,{})})})]}),$e=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 90px;
`,Te=i(A)`
  display: flex;
  align-items: flex-start;
  color: white;
`,ze=i.li`
  display: flex;
  flex-direction: row;
  margin-top: 28px;
`,Ae=i.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: left;
  height: 89px;
  font-size: 16px;
`,Ve=i.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`,Re=()=>{const o=f();g.useEffect(()=>{o(V())},[o]);const r=m(Q);return e.jsxs($e,{children:[e.jsx("h4",{style:{marginBottom:"20px"},children:"Follow Us"}),e.jsx(Ie,{}),e.jsx("h4",{style:{marginTop:"40px"},children:"PopularDrinks"}),e.jsx("ul",{children:r.map(t=>e.jsx(ze,{children:e.jsxs(Te,{to:`/drinks/${t._id}`,children:[e.jsx("img",{src:t.drinkThumb,alt:"SVG Image",width:90,height:90}),e.jsxs(Ae,{children:[e.jsx("h4",{children:t.drink}),e.jsx(Ve,{style:{},children:t.shortDescription})]})]})},t._id))})]})},Pe=R().shape({}),Ge=()=>{const o=f();let r;const t=d=>{r=d},{_id:c}=m(P),h=d=>{d.owner=c,d.drinkThumb=r;const n=new FormData;for(let a in d)a==="ingredients"?n.append(a,JSON.stringify(d[a])):n.append(a,d[a]);for(const a of n.entries())console.log(a[0],a[1]);o(M(n))};return e.jsx(e.Fragment,{children:e.jsx(ne,{children:e.jsxs(B,{children:[e.jsx(E,{initialValues:{drinkThumb:null,drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[],owner:""},validationSchema:Pe,onSubmit:h,children:({setFieldValue:d})=>e.jsxs(U,{style:{margin:"auto"},encType:"multipart/form-data",children:[e.jsx(xe,{fileValue:t}),e.jsx(_e,{}),e.jsx(me,{}),e.jsx(le,{type:"submit",children:"Add"})]})}),e.jsx(Re,{})]})})})};export{Ge as default};
