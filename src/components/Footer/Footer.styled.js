import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const FooterSection = styled.footer`
  font-family: 'Manrope', Arial, sans-serif;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  color: #f3f3f3;
  background-color: #0a0a11;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
  }
`;

export const FooterContainer = styled.div`
  display: block;
  padding: 10px;
`;

export const FooterBox = styled.div`
  display: flex;
`;

export const Copyright = styled.div`
  display: flex;
`;

export const CopyrightPrivasy = styled.div`
  display: flex;
  margin-left: auto;
  gap: 18px;
`;

export const LinkLogo = styled(Link)`
  display: inline-flex;
  width: 151px;
  height: 28px;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  padding: 8px 16px;
  gap: 14px;
  color: #f3f3f3;

  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto; 
  
`;

export const NavigationList = styled.ul`
  display: grid;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: #f3f3f3;
`;

export const SocialsBox = styled.div`
  margin-right: auto;
`;

export const NavigationBox = styled.div``;

export const SubscribeBox = styled.div`
  margin-left: auto;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Form = styled(FormikForm)`
  width: 309px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  width: 309px;
  margin-left: auto;
  margin-right: auto;
`;
