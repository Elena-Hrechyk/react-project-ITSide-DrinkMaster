import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ position }) => position || 'static'};
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
  }
`;
