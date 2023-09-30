import styled from '@emotion/styled';

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 295px;
    padding: 0;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        max-width: 436px;
        margin-top: 80px;
  };

`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    color: rgba(243, 243, 243, 0.3);
    border: none;

    /* :hover {
        color: #161F37;
        background-color: #F3F3F3;
  } */
`;

export const Wraper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonPageItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    border: none;
    background-color: inherit;
    color: #F3F3F3;

    :hover {
        background-color: #161F37;
    }
`;