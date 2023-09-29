import { styled } from "styled-components";

export const DrinksContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 90px;
`

export const PopularDrinkCont = styled.div`
display: flex;
flex-direction: row;
margin-top: 28px;

`
export const DescriptionContainer = styled.div`
margin-left: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap:8px;
text-align: left;
height: 89px;
/* text-overflow: ellipsis; */

font-size: 16px;




`
export const Text = styled.p`
/* overflow: hidden; 
text-overflow: ellipsis; */
display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px
  
`



  /* @media (min-width: 768px){
  width: 480px;
  } */
