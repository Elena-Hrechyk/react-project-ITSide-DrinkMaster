import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeSection = styled.section`
  font-family: 'Manrope', Arial, sans-serif;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  color: #f3f3f3;
  background-color: #0a0a11;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 140px;
    padding-bottom: 140px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 158px;
  }
`;

export const AddDrinkContainer = styled.div`
  padding: 10px;
  display: block;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  color: #f3f3f3;
`;

export const CategoryDrinkContainer = styled.div`
  margin-bottom: 60px;
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
