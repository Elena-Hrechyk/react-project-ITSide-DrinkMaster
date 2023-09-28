import{p as i,j as t}from"./index-73217f46.js";const e=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;  
    `,n=i.div`
  display: flex;
  align-items: center;
`,r=i.span`
  font-weight: 600;
  margin-right: -15px;
  font-family: Manrope;
  font-size:120px;
  color: #363535;
  @media (min-width: 748px){
    margin-right: -15px;
    font-size: 140px;
  }
   @media (min-width: 1440px){
    font-size: 150px;
  }

`,o=i.span`
  font-weight: 600;
  margin-right: -15px;
  font-family: Manrope;
  font-size:120px;
  color: #363535;
  @media (min-width: 748px){
    margin-left: -25px;
    font-size: 140px;
  }
   @media (min-width: 1440px){
    font-size: 150px;
  }

`,s=i.img`
 margin: 0px;

 top:200px;
width: 123px;
@media (min-width: 748px){
width: 158px;
 }
 `;i.div`
  display: flex;
  align-items: center;
  position: relative; /* Додав позиціонування */
`;i.picture`
  display: flex;
  align-items: center;
  position: absolute; /* Додав позиціонування */
  top: 0;
  left: 0;
`;const p=()=>t.jsx(e,{children:t.jsxs(n,{children:[t.jsx(r,{children:"4"}),t.jsx("picture",{children:t.jsx(s,{src:"./src/img/drink-master/hero/hero-drink-master.png",srcSet:"./src/img/drink-master/hero/hero-drink-master@2x.png",alt:"cocktail",loading:"lazy"})}),t.jsx(o,{children:"4"})]})});export{p as default};
