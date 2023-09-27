import { styled } from 'styled-components';

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-top: 80px;
  max-width: 335px; 
  @media (min-width: 768px){
  width: 480px;
  }
`;

export const TextArea = styled.textarea`
width: 335px;
min-height: 184px;
background-color:transparent; 
border-radius: 14px;
border: 1px solid #f3f3f380;
display: flex;
flex: start;
&:focus{
    outline: transparent;
  }
  @media (min-width: 768px) and (max-width: 1439.98px) {
    width: 480px;
  }


`