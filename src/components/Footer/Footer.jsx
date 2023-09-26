import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormLabel, Form, ErrorMessage, Button } from './Footer.styled';

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
  SubscribeBox,
  FooterBox,
  Copyright,
  CopyrightPrivasy,
  FooterSection
} from '../Footer/Footer.styled';

const PhonebookSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Email may be in this format: test@mail.com',
    )
    .required('Input email...'),
});

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
          <SubscribeBox>
            <Formik
              initialValues={{
                name: '',
                number: '',
              }}
              validationSchema={PhonebookSchema}
              onSubmit={({ name, number }, actions) =>
                handleSubmit({ name, number }, actions)
              }
            >
              <Form>
                <FormLabel>
                  <p>
                    Subscribe up to our newsletter. Be in touch with latest news
                    and special offers, etc
                  </p>
                  <Field name="email" placeholder="Enter the email" />
                  <ErrorMessage name="email" component="span" />
                </FormLabel>
                <Button type="submit">Subscribe</Button>
              </Form>
            </Formik>
          </SubscribeBox>
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
