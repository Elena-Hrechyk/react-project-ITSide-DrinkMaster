import { styled } from 'styled-components';

export const DrinkIngredientsContainer = styled.div`
  background-color: transparent;
  margin-top: 80px;
`;
export const CountBlock = styled.div`
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

`;
export const CountButton = styled.div`
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

`;
export const IngridientsContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
`;
export const Ingridient = styled.div`
width:200px;
display: flex;
  align-items: center;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  height: 2.5rem;

  @media (min-width: 768px) and (max-width: 1439.98px) {
    width:332px;
  }
`;
export const Portion = styled.div`
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
`
export const Input = styled.input`
  background-color: transparent;
  border: transparent;
width: 90%;
&:focus{
    outline: transparent;
  }
`;

export const XButton = styled.button`
width: 16px;
background-color: transparent;
border: none;
`

export const XImg = styled.img`
width:16px;
fill: white;
`
