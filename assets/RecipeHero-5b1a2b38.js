import{u as n,j as s,a as o,W as a,r as l,X as p}from"./index-c6eb82d1.js";import{s as d,e as m}from"./drinksSelectors-29c49a96.js";const R="_RecipeContainer_si01u_6",_="_glass_si01u_13",u="_RecipeDescription_si01u_24",g="_RecipeImg_si01u_33",h="_HeroRecipeContainer_si01u_56",t={RecipeContainer:R,glass:_,RecipeDescription:u,RecipeImg:g,HeroRecipeContainer:h},x="_title_1fm6t_6",k={title:x},j=()=>{const c=n(d),{drink:i}=c.data;return s.jsx("h2",{className:k.title,children:i})},I=()=>{const c=o(),{drinkId:i}=a(),e=n(r=>m(r,i));return console.log(e),l.useEffect(()=>{c(p(i))},[c,i]),s.jsxs("section",{className:t.RecipeContainer,children:[s.jsxs("div",{className:t.HeroRecipeContainer,children:[s.jsx(j,{title:e.drink}),s.jsxs("p",{className:t.glass,children:[e.glass,"/",e.alcoholic]}),s.jsx("p",{className:t.RecipeDescription,children:e.shortDescription})]}),s.jsx("img",{className:t.RecipeImg,src:e.drinkThumb,alt:e.drink,title:e.drink})]})};export{I as default};
