import styled from 'styled-components';

export const DrinksPageList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 14px;
`;

export const DrinksPageItem = styled.li`
    width: 400px;
    height: 438px;
`;

export const DrinksPageImg = styled.img`
width: 400px;
height: 400px;
border-radius: 8px;
`;

export const DrinksPageText = styled.div`
display: flex;
gap: 148px;
align-items: center;

`;
export const DrinksPageA = styled.p`
font-family: Manrope;
color: #F3F3F3;
font-size: 18px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
`;
export const DrinksPageB = styled.p`
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: right;
color: #F3F3F380;

`;