import{s as i,r as x,j as e,d as l,q as v,a as C,t as D,u as h,v as m,l as S,w as F,F as P,S as I}from"./index-19c16160.js";import{S as A}from"./react-select.esm-9f4e02d4.js";import{s as B}from"./drinksSelectors-566d8060.js";const V=i.section`
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

`;const u=({onChange:r,optionValue:t})=>{const[a,d]=x.useState(!1),s={control:n=>({...n,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(n,{isFocused:p})=>({...n,backgroundColor:"#161F37",borderRadius:20,color:p?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:n=>({...n,backgroundColor:"#161F37",borderRadius:20}),singleValue:n=>({...n,color:"#F3F3F3"}),dropdownIndicator:n=>({...n,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:a?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:n=>({...n,display:"none"})},o={width:"100%"};return e.jsx("div",{style:o,children:e.jsx(A,{options:t,placeholder:"",styles:{...s},onChange:n=>r(n.value),onMenuOpen:()=>d(!0),onMenuClose:()=>d(!1)})})},R=i.div`
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
`,f=i.input`
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
`,c=i.div`
  border-bottom: 0.5px solid #f3f3f380;
  padding-left: 10px;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 352px;
  }
  @media (min-width: 1440px) {
    width: 339px;
  }
`,T=i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`,g={display:"flex",alignItems:"center",justifyContent:"space-between",maxHeight:"278px"},O=i.div`
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
`;i.label`
  background-color: white;
  width: 50px;
  height: 50px;
  border: none;
  padding: 18px;
  border-radius: 6px;

  display: inline-block;
    /* padding: 6px 12px; */
    cursor: pointer;
    
    /* color: white; */
    /* border: 1px solid #ccc; */
    /* border-radius: 4px; */
    text-align: center;



`;const G=i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`,b=i.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;
`,w=i.label`
  position: relative;
  color: #f3f3f380;
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
        background-color: #red;
        border: 2px solid #ffffff;
        box-shadow: inset 0 0 0 4px #000000;
      }
    }
  }
  &:focus {
    + .radio-label {
      /* color: #d9d9d9; */
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
`;const M=({fileRef:r,...t})=>{const a=[{label:"Cocktail glass",value:"Cocktail glass"},{label:"Shake",value:"Shake"},{label:"Cocktail ",value:"Cocktail "},{label:"Other/Unknown",value:"Other/Unknown"},{label:"Ordinary Drink",value:"Ordinary Drink"},{label:"Cocoa",value:"Cocoa"},{label:"Shot",value:"Shot"},{label:"Coffee/Tea",value:"Coffee/Tea"},{label:"Homemade Liqueur",value:"Homemade Liqueur"},{label:"Punch/Party Drink",value:"Punch/Party Drink"},{label:"Beer",value:"Beer"},{label:"Soft Drink",value:"Soft Drink"}],s=["Highball glass","Cocktail glass","Old-fashioned glass","Whiskey Glass","Collins glass","Pousse cafe glass","Champagne flute","Whiskey sour glass","Cordial glass","Brandy snifter","White wine glass","Nick and Nora Glass","Hurricane glass","Coffee mug","Shot glass","Jar","Irish coffee cup","Punch bowl","Pitcher","Pint glass","Copper Mug","Wine Glass","Beer mug","Margarita/Coupette glass","Beer pilsner","Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"].map(o=>({label:o,value:o}));return e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{display:"flex",flex:"start"},children:"Add drink"}),e.jsxs(R,{children:[e.jsxs(O,{children:[e.jsx(l,{name:"file",type:"file"}),e.jsx("p",{children:"Add image"})]}),e.jsxs(T,{children:[e.jsx(l,{as:f,id:"drink",name:"drink",type:"text",placeholder:"Enter item drink"}),e.jsx(c,{}),e.jsx(l,{as:f,id:"shortDescription",name:"shortDescription",type:"text",placeholder:"Enter about recipe"}),e.jsx(c,{}),e.jsxs("div",{style:g,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Category"}),e.jsx(l,{name:"category",children:({form:o})=>e.jsx(u,{optionValue:a,onChange:n=>o.setFieldValue("category",n)})})]}),e.jsx(c,{}),e.jsxs("div",{style:g,children:[e.jsx("p",{style:{color:"#f3f3f380"},children:"Glass"}),e.jsx(l,{name:"glass",children:({form:o})=>e.jsx(u,{optionValue:s,onChange:n=>o.setFieldValue("glass",n)})})]}),e.jsx(c,{}),e.jsxs(G,{children:[e.jsxs(b,{children:[e.jsx(l,{as:k,type:"radio",id:"radio-1",name:"alcoholic",value:"Alcoholic"}),e.jsx(w,{htmlFor:"radio-1",className:"radio-label",children:"Alcoholic"})]}),e.jsxs(b,{children:[e.jsx(l,{as:k,type:"radio",id:"radio-2",name:"alcoholic",value:"Non alcoholic"}),e.jsx(w,{htmlFor:"radio-2",className:"radio-label",children:"Non-alcoholic"})]})]})]})]})]})},z=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,U=i.textarea`
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
`,$=()=>e.jsxs(z,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(l,{as:U,name:"description",placeholder:"Enter the recipe",className:"text-area"})]}),E=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,H=i.div`
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

`,j=i.button`
/* cursor: pointer; */
color: white;
background-color: transparent;
border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,N=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,L=i.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,q=i.div`
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
`,X=i.div`
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
`,_=i.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,W=i.button`

/* width: 16px; */
background-color: transparent;
border: none;
`,J=i.img`
/* width:16px; */
fill: white;
`,K="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let Q=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((t,a)=>(a&=63,a<36?t+=a.toString(36):a<62?t+=(a-26).toString(36).toUpperCase():a>62?t+="-":t+="_",t),"");const Y=()=>{const[r,t]=x.useState(0),a=[{label:"Cocktail glass",value:"Cocktail glass"},{label:"Shake",value:"Shake"},{label:"Cocktail ",value:"Cocktail "},{label:"glass",value:"glass"},{label:"Other/Unknown",value:"Other/Unknown"},{label:"Ordinary Drink",value:"Ordinary Drink"},{label:"Cocoa",value:"Cocoa"},{label:"Shot",value:"Shot"},{label:"Coffee/Tea",value:"Coffee/Tea"},{label:"Homemade Liqueur",value:"Homemade Liqueur"},{label:"Punch/Party Drink",value:"Punch/Party Drink"},{label:"Beer",value:"Beer"},{label:"Soft Drink",value:"Soft Drink"}],d=s=>{const o=[];for(let n=0;n<r;n++)o.push(e.jsxs(L,{children:[e.jsx(q,{children:e.jsx(l,{name:`ingredients.${n}.title`,children:({form:p})=>e.jsx(u,{optionValue:a,onChange:y=>{p.setFieldValue(`ingredients.${n}.ingredient`,y),p.setFieldValue(`ingredients.${n}.ingredientId`,Q())}})})}),e.jsx(X,{width:"150px",children:e.jsx(l,{name:`ingredients.${n}.measure`,as:_,placeholder:"Measure",marginBottom:"0"})}),e.jsx(W,{type:"button",onClick:()=>s.remove(n),children:e.jsx(J,{src:K,alt:`Xicon-${n}`})})]},n));return o};return e.jsxs(E,{children:[e.jsxs(N,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(H,{children:[e.jsx(j,{onClick:()=>{r!==0&&t(r-1)},children:"-"}),e.jsx("p",{children:r}),e.jsx(j,{onClick:()=>t(r+1),children:"+"})]})]}),e.jsx(v,{name:"ingredients",render:s=>e.jsx("div",{children:d(s)})})]})},Z=i.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 90px;
`,ee=i.li`
display: flex;
flex-direction: row;
margin-top: 28px;

`,ie=i.div`
margin-left: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap:8px;
text-align: left;
height: 89px;
/* text-overflow: ellipsis; */

font-size: 16px;




`;i.p`
/* overflow: hidden; 
text-overflow: ellipsis; */
display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px
  
`;const ne=()=>{const r=[{favorites:Array(0),popular:0,_id:"639b6de9ff77d221f190c556",drink:"Pysch Vitamin Light",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Apello.jpg"},{favorites:Array(0),popular:0,_id:"639b6de9ff77d221f190c559",drink:"Pineapple Gingerale Smoothie",drinkThumb:"http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Apello.jpg"}];return e.jsxs(Z,{children:[e.jsx("h4",{children:"PopularDrinks"}),e.jsx("ul",{children:r.map(t=>e.jsxs(ee,{children:[e.jsx("img",{src:t.drinkThumb,alt:"SVG Image",width:90,height:90}),e.jsx(ie,{children:e.jsx("h4",{children:t.drink})})]},t._id))})]})},ae=()=>{const r=C();x.useEffect(()=>{r(D())},[r]);const t=h(B),a=h(m);console.log(a.id);const d=x.useRef(null),{_id:s}=h(m);return e.jsx(V,{children:e.jsx(S,{initialValues:{drinkThumb:"",drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[]},onSubmit:o=>{o.owner=s;const n=new FormData;for(let p in o)n.append(p,o[p]);console.log("formData",n),r(F(o)),console.log("state drink:",t)},children:e.jsxs(P,{style:{margin:"auto"},encType:"multipart/form-data",children:[e.jsx(M,{fileRef:d}),e.jsx(Y,{}),e.jsx($,{}),e.jsx(I,{type:"submit",width:"107px",value:"Add",children:"Add"}),e.jsx(ne,{})]})})})};export{ae as default};
