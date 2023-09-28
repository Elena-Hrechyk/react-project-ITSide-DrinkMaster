import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;  
    `;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLeft = styled.span`
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

`;
export const TitleRigth = styled.span`
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

`;
export const NotFoundImage = styled.img`
 margin: 0px;

 top:200px;
width: 123px;
@media (min-width: 748px){
width: 158px;
 }
 `;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* Додав позиціонування */
`;

export const Picture = styled.picture`
  display: flex;
  align-items: center;
  position: absolute; /* Додав позиціонування */
  top: 0;
  left: 0;
`;

