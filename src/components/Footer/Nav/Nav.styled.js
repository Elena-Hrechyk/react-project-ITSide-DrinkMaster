import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
 
`;


export const Navigation = styled.nav`
  display: block;
  
`;

export const NavigationList = styled.ul`
  display: grid;
  gap: 24px;
  @media screen and (max-width: 1279.5px) {
    gap: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
`;


