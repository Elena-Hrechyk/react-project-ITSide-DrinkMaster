import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 79px;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.bodyBgc};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ open }) =>
    open ? 'transform: translateX(0);' : 'transform: translateX(100%);'};

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.colorText};

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
`;

export const NavItem = styled.li`
  width: auto;
  margin-bottom: 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.navLinkBorder};
  border-radius: 40px;
  color: ${({ theme }) => theme.colorText};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: all var(--transition-dur-and-func);

  &:active,
  &:hover,
  &:focus {
    background-color: #161f37;
    border: 1px solid #161f37;
    color: ${({ theme }) => theme.bodyBgc === '#F3F3F3' && theme.bodyBgc};
  }

  @media screen and (min-width: 768px) {
    line-height: 1.6;
  }
`;
