import styled from '@emotion/styled';

export const Wrap = styled.div`
  max-width: 440px;
  
  @media screen and (min-width: 768px) {
    max-width: 342px;  
  };

  @media screen and (min-width: 1280px) {
    max-width: 400px;
  }
`;
export const ImageWrap = styled.div`

`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
  border-radius: 8px;
`;

export const СocktailName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.286;
  padding: 0px;
  margin: 0px;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.333;
    margin-top: 24px;
  };
  
`;

export const СocktailType = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  color: rgba(243, 243, 243, 0.5);
  padding: 0px;
  margin: 0px;
  margin-top: 4px;
  
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  };

`;

export const СocktailRecipe = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  padding: 0px;
  margin: 0px;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
    margin-top: 24px;
  };
`;

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  };
  
`

export const ButtonSeeMore = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 5px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;

  :hover {
    color: #161F37;
    background-color: #F3F3F3;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.125;
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 18px;
    padding-bottom: 18px;
    margin-right: 8px;
    
  };
`

export const ButtonDelete = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 11px;
  border: none;
  border-radius: 42px;
  color: #F3F3F3;
  background-color: #161F37;

  :hover {
    color: #161F37;
    background-color: #F3F3F3;
  }

  @media screen and (min-width: 768px) {
    /* font-family: 'Manrope', Arial, sans-serif; */
    /* width: 56px; */
    /* height: 56px; */
    
    
    /* font-style: inherit; */

    /* font-weight: normal; */
    padding: 15px;
    /* line-height: 0; */
    /* width: 100%; */
    /* font-size: 24px;
    font-family: 'Manrope';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  /* display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: 2tr; */ 
  };  
`;