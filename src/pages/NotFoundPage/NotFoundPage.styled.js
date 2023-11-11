import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 188px;
  padding-bottom: 260px;

  
`;

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleLeft = styled.span`
  font-weight: 600;
  font-size: 120px;
  color: ${({ theme }) => theme.colorNotFound};

  @media screen and (min-width: 768px) {
    font-size: 150px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 200px;
  }
`;

export const TitleRigth = styled.span`
  font-weight: 600;
  font-size: 120px;
  color: ${({ theme }) => theme.colorNotFound};

  @media screen and (min-width: 768px) {
    font-size: 150px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 200px;
  }
`;

export const NotFoundImage = styled.img`
  width: 133px;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    width: 158px;
  }
`;

// export const PictureContainer = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative; /* Додав позиціонування */
// `;

// export const Picture = styled.picture`
//   display: flex;
//   align-items: center;
//   position: absolute; /* Додав позиціонування */
//   top: 0;
//   left: 0;
// `;
