import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ItemDrink = styled.li`
  font-family: var(--font-main);
  max-width: 335px;

  &:not(:first-child) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    min-width: 342px;

    &:not(:first-child) {
      display: block;
    }

    &:nth-child(n + 3) {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    min-width: 400px;

    &:nth-child(n + 3) {
      display: block;
    }

    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

export const ImgDrink = styled.img`
  width: 335px;
  height: 360px;
  object-fit: contain;
  margin-bottom: 14px;
  border-radius: 8px;
  object-fit: cover;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleDrink = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
`;

export const SeemoreLink = styled(NavLink)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.23;
`;

