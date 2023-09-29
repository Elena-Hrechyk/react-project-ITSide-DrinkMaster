import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeSection = styled.section`
  font-family: var(--font-main);
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
  }
`;

export const AddDrinkContainer = styled.div`
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`;

export const LeftSideHero = styled.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.19;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1280) {
    margin-bottom: 28px;
    font-size: 64px;
    line-height: 1.06;
  }
`;

export const Discribe = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const LinkAddDrink = styled(NavLink)`
  display: inline-block;
  width: 165px;
  margin-right: auto;
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 47px;
  color: #161f37;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.23;
  transition: outline var(--transition-dur-and-func);

  &:hover,
  &:focus {
    outline: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const HeroImg = styled.img`
  display: block;
  width: 252px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 359px;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -57px;
    right: 36px;
  }
`;

export const CategoryDrinkList = styled.ul`
  font-family: var(--font-main);
  margin-bottom: 40;
`;

export const ItemCategory = styled.li`
  font-family: var(--font-main);
  margin-bottom: 40px;

  &:nth-child(n + 5) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const TitleCategory = styled.h3`
  margin-bottom: 24px;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    grid-gap: 20px;
  }
`;

export const LinkOtherDrink = styled(NavLink)`
  display: block;
  width: 165px;
  padding: 14px 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 47px;
  color: #161f37;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.23;
  transition: outline var(--transition-dur-and-func);

  &:hover,
  &:focus {
    outline: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`;
