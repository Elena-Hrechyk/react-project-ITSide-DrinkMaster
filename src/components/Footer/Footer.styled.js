import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
   font-family: 'Manrope', Arial, sans-serif;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
 
  margin-left: auto;
  margin-right: auto;
  color: #f3f3f3;
  background-color: #0a0a11;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;
    
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
   
`;

export const FooterBox = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const LinkLogo = styled(Link)`
  display: inline-flex;

  height: 28px;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-bottom: 40px;

  padding-top: 8px;
  padding-left: 0;
  padding-right: 16px;
  padding-bottom: 8px;
  gap: 14px;
  color: #f3f3f3;

  text-decoration: none;
`;

export const SocialsBox = styled.div`
  margin-right: auto;
`;

export const NavigationBox = styled.div``;

export const Copyright = styled.div`
  display: flex;
`;

export const CopyrigthReserved = styled.p`
  margin-right: 689px;
`;

export const CopyrightPrivasy = styled.div`
  display: flex;
  gap: 18px;
`;

export const CopyrightText = styled.p`
  color: #f3f3f333;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: right;
`;
