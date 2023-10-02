import{s as i,r as x,j as e,a as g,h as F,q as D,u as h,d,i as I,t as S,v as A,e as V,w as P,l as T,F as z}from"./index-d34c6552.js";import{S as R,s as E,b as $,a as B}from"./react-select.esm-7ef763ff.js";import{c as M}from"./drinksSelectors-b215b829.js";const G=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  text-align: center;
  padding: 80px 20px 80px 20px;
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

  /* Для экранов с разрешением 1x и шириной от 768px до 1440px */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    padding: 160px 32px 622px 32px;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной от 769px до 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1339.98px),
    (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1439.98px) {
    padding: 160px 32px 622px 32px;
    font-size: 17px;
  }

  /* Для экранов с разрешением 1x и шириной больше 1440px */
  @media (min-width: 1440px) {
    padding: 224px 100px 568px 100px;
    font-size: 17px;
  }

  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    (min-resolution: 192dpi) and (min-width: 1440px) {
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

`;const f=({onChange:r,optionValue:o})=>{const[n,p]=x.useState(!1),l={control:t=>({...t,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(t,{isFocused:a})=>({...t,backgroundColor:"#161F37",borderRadius:20,color:a?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:t=>({...t,backgroundColor:"#161F37",borderRadius:20}),singleValue:t=>({...t,color:"#F3F3F3"}),dropdownIndicator:t=>({...t,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:n?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:t=>({...t,display:"none"})},c={width:"100%"};return e.jsx("div",{style:c,children:e.jsx(R,{options:o,placeholder:"",styles:{...l},onChange:t=>r(t.value),onMenuOpen:()=>p(!0),onMenuClose:()=>p(!1)})})},N=i.div`
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
`,b=i.input`
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
`,m=i.div`
  border-bottom: 0.5px solid #f3f3f380;
  padding-left: 10px;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 352px;
  }
  @media (min-width: 1440px) {
    width: 339px;
  }
`,X=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,w={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},U=i.div`
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
`,O=i.label`
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



`,_=i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,j=i.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;

`,y=i.label`
  position: relative;
  color: #f3f3f380;

  &:checked{
    color: white;
  }
`,k=i.input`
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

`;const H=i.input`
  position: 'relative',;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,q=i.button`
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

`,L="/react-project-ITSide-DrinkMaster/assets/plus-6c79836d.svg",J=()=>{const r=g();x.useEffect(()=>{r(F()),r(D())},[r]);const o=h(E),n=h($),p=o.map(t=>({label:t,value:t})),l=n.map(t=>({label:t,value:t})),c=t=>{const a=t.target.files[0];console.log(a)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),e.jsxs(N,{children:[e.jsxs(U,{children:[e.jsxs(O,{style:{backgroundColor:"white"},children:[e.jsx(d,{name:"drinkThumb",type:"file",as:H,onChange:c,accept:"image/*"}),e.jsx("img",{src:L,alt:"SVG Image",style:{filter:"invert(1)",fill:"black",marginTop:"-18px"}})]}),e.jsx("p",{children:"Add image"})]}),e.jsxs(X,{children:[e.jsx(d,{as:b,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink"}),e.jsx(m,{}),e.jsx(d,{as:b,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe"}),e.jsx(m,{}),e.jsxs("div",{style:w,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),e.jsx(d,{name:"category",children:({form:t})=>e.jsx(f,{optionValue:p,onChange:a=>t.setFieldValue("category",a)})})]}),e.jsx(m,{}),e.jsxs("div",{style:w,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),e.jsx(d,{name:"glass",children:({form:t})=>e.jsx(f,{optionValue:l,onChange:a=>t.setFieldValue("glass",a)})})]}),e.jsx(m,{}),e.jsxs(_,{children:[e.jsxs(j,{children:[e.jsx(d,{as:k,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),e.jsx(y,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),e.jsxs(j,{children:[e.jsx(d,{as:k,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),e.jsx(y,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},K=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,Q=i.textarea`
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
`,W=()=>e.jsxs(K,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(d,{as:Q,name:"description",placeholder:"Enter the recipe",className:"text-area"})]}),Y=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,Z=i.div`
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

`,v=i.button`
/* cursor: pointer; */
color: white;
background-color: transparent;
border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,ee=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,ie=i.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,te=i.div`
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
`,ne=i.div`
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
`,re=i.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,oe=i.button`

/* width: 16px; */
background-color: transparent;
border: none;
`,ae=i.img`
/* width:16px; */
fill: white;
`,de="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let se=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((o,n)=>(n&=63,n<36?o+=n.toString(36):n<62?o+=(n-26).toString(36).toUpperCase():n>62?o+="-":o+="_",o),"");const le=()=>{const[r,o]=x.useState(0),n=g();x.useEffect(()=>{n(I())},[n]);const l=h(B).map(t=>({label:t,value:t})),c=t=>{const a=[];for(let s=0;s<r;s++)a.push(e.jsxs(ie,{children:[e.jsx(te,{children:e.jsx(d,{name:`ingredients.${s}.title`,children:({form:u})=>e.jsx(f,{optionValue:l,onChange:C=>{u.setFieldValue(`ingredients.${s}.ingredient`,C),u.setFieldValue(`ingredients.${s}.ingredientId`,se())}})})}),e.jsx(ne,{width:"150px",children:e.jsx(d,{name:`ingredients.${s}.measure`,as:re,placeholder:"Measure",marginBottom:"0"})}),e.jsx(oe,{type:"button",onClick:()=>t.remove(s),children:e.jsx(ae,{src:de,alt:`Xicon-${s}`})})]},s));return a};return e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(Z,{children:[e.jsx(v,{onClick:()=>{r!==0&&o(r-1)},children:"-"}),e.jsx("p",{children:r}),e.jsx(v,{onClick:()=>o(r+1),children:"+"})]})]}),e.jsx(S,{name:"ingredients",render:t=>e.jsx("div",{children:c(t)})})]})},pe=i.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 90px;
`,ce=i.li`
display: flex;
flex-direction: row;
margin-top: 28px;

`,xe=i.div`
margin-left: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap:8px;
text-align: left;
height: 89px;
/* text-overflow: ellipsis; */

font-size: 16px;




`,he=i.p`
/* overflow: hidden; 
text-overflow: ellipsis; */
display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px
  
`,me=()=>{const r=g();x.useEffect(()=>{r(A())},[r]);const o=h(M);return e.jsxs(pe,{children:[e.jsx("h4",{children:"PopularDrinks"}),e.jsx("ul",{children:o.map(n=>e.jsxs(ce,{children:[e.jsx("img",{src:n.drinkThumb,alt:"SVG Image",width:90,height:90}),e.jsxs(xe,{children:[e.jsx("h4",{children:n.drink}),e.jsx(he,{style:{},children:n.shortDescription})]})]},n._id))})]})},fe=V().shape({}),we=()=>{const{_id:r}=h(P),o=n=>{n.owner=r,console.log("values:",n);const p=new FormData;for(let l in n)p.append(l,n[l])};return e.jsx(e.Fragment,{children:e.jsxs(G,{children:[e.jsx(T,{initialValues:{drinkThumb:null,drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[],owner:""},validationSchema:fe,onSubmit:o,children:({setFieldValue:n})=>e.jsxs(z,{style:{margin:"auto"},encType:"multipart/form-data",children:[e.jsx(J,{fieldValueFormik:n}),e.jsx(le,{}),e.jsx(W,{}),e.jsx(q,{type:"submit",children:"Add"})]})}),e.jsx(me,{})]})})};export{we as default};
