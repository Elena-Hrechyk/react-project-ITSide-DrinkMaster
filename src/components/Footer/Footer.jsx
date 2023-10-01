import {SubscribeForm} from './SubscribeForm/SubscribeForm'

import { ReactComponent as Logo } from '../../img/svg/logo.svg';
import { ReactComponent as FacebookLogoLink } from '../../img/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../img/svg/instagram.svg';
import { ReactComponent as YoutubeSvg } from '../../img/svg/youtube.svg';
import {
  LinkLogo,
  FooterContainer,
  FollowUsContainer,
  SvgContainer,
  Navigation,
  NavigationList,
  StyledLink,
  SocialsBox,
  NavigationBox,
  FooterBox,
  Copyright,
  CopyrightPrivasy,
  FooterSection
} from '../Footer/Footer.styled';




export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterBox>
          <SocialsBox>
            <LinkLogo to={'/'}>
              <Logo />
              <span>Drink Master</span>
            </LinkLogo>
            <FollowUsContainer>
              <a
                href="https://www.facebook.com/goITclub/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="link to Facebook"
              >
                {' '}
                <SvgContainer>
                  <FacebookLogoLink />
                </SvgContainer>
              </a>
              <a
                href="https://www.instagram.com/goitclub/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="link to Instagram"
              >
                <SvgContainer>
                  <InstagramSvg />
                </SvgContainer>
              </a>
              <a
                href="https://www.youtube.com/c/GoIT"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="link to Youtube"
              >
                <SvgContainer>
                  <YoutubeSvg />
                </SvgContainer>
              </a>
            </FollowUsContainer>
          </SocialsBox>
          <NavigationBox>
            <Navigation>
              <NavigationList>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/drinks">Drinks</StyledLink>
                <StyledLink to="add">Add drink</StyledLink>
                <StyledLink to="my">My drinks</StyledLink>
                <StyledLink to="favorites">Favorites</StyledLink>
              </NavigationList>
            </Navigation>
          </NavigationBox>
          <SubscribeForm />
        </FooterBox>
        <Copyright>
          <p>©2023 Drink Master. All rights reserved.</p>
          <CopyrightPrivasy>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </CopyrightPrivasy>
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};
