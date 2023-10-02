import{s as i,r as x,j as e,d as h,a as m,i as w,u as f,q as k,S as j,t as y,v,w as F,e as C,x as S,l as D,F as I,y as T}from"./index-3127a999.js";import{S as P,a as z}from"./react-select.esm-6c18d850.js";import{c as A}from"./drinksSelectors-b215b829.js";const V=i.section`
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

`;const B=({onChange:r,optionValue:o})=>{const[n,p]=x.useState(!1),d={control:t=>({...t,backgroundColor:"transparent",border:0,cursor:"pointer",borderColor:"transparent",boxShadow:"none"}),option:(t,{isFocused:l})=>({...t,backgroundColor:"#161F37",borderRadius:20,color:l?"#F3F3F3":"#F3F3F366",display:"flex",alignItems:"flex-start"}),menu:t=>({...t,backgroundColor:"#161F37",borderRadius:20}),singleValue:t=>({...t,color:"#F3F3F3"}),dropdownIndicator:t=>({...t,cursor:"pointer","&:hover":{color:"#F3F3F3"},transform:n?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:t=>({...t,display:"none"})},s={width:"100%"};return e.jsx("div",{style:s,children:e.jsx(P,{options:o,placeholder:"",styles:{...d},onChange:t=>r(t.value),onMenuOpen:()=>p(!0),onMenuClose:()=>p(!1)})})};i.div`
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
`;i.input`
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
`;i.div`
  border-bottom: 0.5px solid #f3f3f380;
  padding-left: 10px;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 352px;
  }
  @media (min-width: 1440px) {
    width: 339px;
  }
`;i.div`
  ///// задать гнучкий розмір
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`;i.div`
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
  margin-bottom: 18px;
  display: inline-block;
    /* padding: 6px 12px; */
    cursor: pointer;
    
    /* color: white; */
    /* border: 1px solid #ccc; */
    /* border-radius: 4px; */
    text-align: center;



`;i.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
`;i.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;

`;i.label`
  position: relative;
  color: #f3f3f380;

  &:checked{
    color: white;
  }
`;i.input`
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

`;i.input`
  position: 'relative',;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;const $=i.button`
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

`,M=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`,R=i.textarea`
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
`,U=()=>e.jsxs(M,{children:[e.jsx("h1",{children:"Recipe Preparation"}),e.jsx(h,{as:R,name:"description",placeholder:"Enter the recipe",className:"text-area"})]}),_=i.div`
  background-color: transparent;
  margin-top: 80px;
  /* width: 309px; */
  @media (min-width: 768px) and (max-width: 1439.98px) {
    /* width:496px; */
  } 
  @media (min-width: 1440px) {
    width: 540px;
  }


`,E=i.div`
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

`,u=i.button`
/* cursor: pointer; */
color: white;
background-color: transparent;
border: transparent;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`,X=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
      justify-content: space-between;

`,O=i.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,G=i.div`
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
`,N=i.div`
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
`,Y=i.input`
  background-color: transparent;
  border: transparent;
width: 90%;
color:white;
&:focus{
    outline: transparent;
  }
`,q=i.button`

/* width: 16px; */
background-color: transparent;
border: none;
`,J=i.img`
/* width:16px; */
fill: white;
`,H="/react-project-ITSide-DrinkMaster/assets/Xicon-bd8869f2.svg";let K=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((o,n)=>(n&=63,n<36?o+=n.toString(36):n<62?o+=(n-26).toString(36).toUpperCase():n>62?o+="-":o+="_",o),"");const L=()=>{const[r,o]=x.useState(0),n=m();x.useEffect(()=>{n(w())},[n]);const d=f(z).map(t=>({label:t,value:t})),s=t=>{const l=[];for(let a=0;a<r;a++)l.push(e.jsxs(O,{children:[e.jsx(G,{children:e.jsx(h,{name:`ingredients.${a}.title`,children:({form:g})=>e.jsx(B,{optionValue:d,onChange:b=>{g.setFieldValue(`ingredients.${a}.ingredient`,b),g.setFieldValue(`ingredients.${a}.ingredientId`,K())}})})}),e.jsx(N,{width:"150px",children:e.jsx(h,{name:`ingredients.${a}.measure`,as:Y,placeholder:"Measure",marginBottom:"0"})}),e.jsx(q,{type:"button",onClick:()=>t.remove(a),children:e.jsx(J,{src:H,alt:`Xicon-${a}`})})]},a));return l};return e.jsxs(_,{children:[e.jsxs(X,{children:[e.jsx("h1",{style:{marginBottom:"0px",marginTop:"0px"},children:"Ingredients"}),e.jsxs(E,{children:[e.jsx(u,{onClick:()=>{r!==0&&o(r-1)},children:"-"}),e.jsx("p",{children:r}),e.jsx(u,{onClick:()=>o(r+1),children:"+"})]})]}),e.jsx(k,{name:"ingredients",render:t=>e.jsx("div",{children:s(t)})})]})},Q=i.div`
  width: 164px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`,c=i.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
`,W=()=>e.jsxs(Q,{children:[e.jsxs("a",{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Facebook",children:[" ",e.jsx(c,{children:e.jsx(j,{})})]}),e.jsx("a",{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Instagram",children:e.jsx(c,{children:e.jsx(y,{})})}),e.jsx("a",{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noreferrer noopener","aria-label":"link to Youtube",children:e.jsx(c,{children:e.jsx(v,{})})})]}),Z=i.div`
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




`,te=i.p`
/* overflow: hidden; 
text-overflow: ellipsis; */
display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px
  
`,ne=()=>{const r=m();x.useEffect(()=>{r(F())},[r]);const o=f(A);return e.jsxs(Z,{children:[e.jsx("h4",{style:{marginBottom:"20px"},children:"Follow Us"}),e.jsx(W,{}),e.jsx("h4",{style:{marginTop:"40px"},children:"PopularDrinks"}),e.jsx("ul",{children:o.map(n=>e.jsxs(ee,{children:[e.jsx("img",{src:n.drinkThumb,alt:"SVG Image",width:90,height:90}),e.jsxs(ie,{children:[e.jsx("h4",{children:n.drink}),e.jsx(te,{style:{},children:n.shortDescription})]})]},n._id))})]})},re=C().shape({}),se=()=>{const r=m(),{_id:o}=f(S),n=d=>{d.owner=o,d.drinkThumb=p;const s=new FormData;for(let t in d)t==="ingredients"?s.append(t,JSON.stringify(d[t])):s.append(t,d[t]);console.log("formData",s),r(T(s))};let p;return e.jsx(e.Fragment,{children:e.jsxs(V,{children:[e.jsx(D,{initialValues:{drinkThumb:null,drink:"",shortDescription:"",category:"",glass:"",alcoholic:"",description:"",ingredients:[],owner:""},validationSchema:re,onSubmit:n,children:({setFieldValue:d})=>e.jsxs(I,{style:{margin:"auto"},encType:"multipart/form-data",children:[e.jsx(L,{}),e.jsx(U,{}),e.jsx($,{type:"submit",children:"Add"})]})}),e.jsx(ne,{})]})})};export{se as default};
