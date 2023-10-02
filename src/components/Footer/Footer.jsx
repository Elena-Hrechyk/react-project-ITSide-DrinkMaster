import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { SocialsLinks } from './SocialsLinks/SocialsLinks';
import { Nav } from './Nav/Nav';
import { ReactComponent as Logo } from '../../img/svg/logo.svg';

import {
  LinkLogo,
  FooterContainer,
  SocialsBox,
  NavigationBox,
  FooterBox,
  Copyright,
  CopyrightPrivasy,
  CopyrightText,
  CopyrigthReserved
} from '../Footer/Footer.styled';

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterBox>
          <SocialsBox>
            <LinkLogo to={'/'}>
              <Logo />
              <span>Drink Master</span>
            </LinkLogo>
            <SocialsLinks />
          </SocialsBox>
          <NavigationBox>
            <Nav />
          </NavigationBox>
          <SubscribeForm />
        </FooterBox>
        <Copyright>
          <CopyrigthReserved>
            <CopyrightText>
            ©2023 Drink Master. All rights reserved.
          </CopyrightText>
          </CopyrigthReserved>
          
          <CopyrightPrivasy>
            <CopyrightText>Privacy Policy</CopyrightText>
            <CopyrightText>Terms of Service</CopyrightText>
          </CopyrightPrivasy>
        </Copyright>
      </FooterContainer>
    </footer>
  );
};
