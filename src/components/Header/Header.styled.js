import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.headerBorderBottom};
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 1280px) {
    padding-top: 23px;
    padding-bottom: 23px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LinkLogo = styled(Link)`
  display: inline-flex;
  height: 28px;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13; /* 112.5% */
  padding: 8px 16px;
  gap: 14px;
  color: ${({ theme }) => theme.colorText};
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Navigation = styled.nav`
  display: none;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.navLinkBorder};
  border-radius: 40px;
  color: ${({ theme }) => theme.colorText};
  font-weight: 500;
  line-height: 1.43;
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: #161f37;
    border: 1px solid #161f37;
    color: ${({ theme }) => theme.bodyBgc === '#F3F3F3' && theme.bodyBgc};
  }
`;

export const WrapToggleUser = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    grid-gap: 28px;
  }
`;
