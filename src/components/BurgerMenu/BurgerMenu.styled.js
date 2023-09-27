import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0a0a11;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  position: fixed;
  z-index: 100;

  top: 92px;
  left: 0;

  ${({ open }) =>
    open ? 'transform: translateX(0);' : 'transform: translateX(100%);'};
`;

export const BurgerMenuBtn = styled.button`
  display: none;
  z-index: 100;
  margin-left: 24px;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);

  @media screen and (max-width: 1279.5px) {
    display: flex;
  }
`;

export const NavigationList = styled.ul`
  display: grid;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  color: #f3f3f3;
  text-align: center;
  font-size: 14px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 20px;

  &.active {
    background-color: #191d34;
  }
`;
