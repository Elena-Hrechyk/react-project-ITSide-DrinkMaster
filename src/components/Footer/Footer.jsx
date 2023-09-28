import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormLabel, Form, ErrorMessage, Button } from './Footer.styled';

import { FollowUs } from '../FollowUsContainer/FollowUsContainer';

import { ReactComponent as Logo } from '../../img/svg/logo.svg';

import {
  LinkLogo,
  FooterContainer,
  Navigation,
  NavigationList,
  StyledLink,
  SocialsBox,
  NavigationBox,
  SubscribeBox,
  FooterBox,
  Copyright,
  CopyrightPrivasy,
  FooterSection,
} from '../Footer/Footer.styled';

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email...')
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
            <FollowUs />
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
              }}
              validationSchema={EmailSchema}
              onSubmit={({ name }, actions) => handleSubmit({ name }, actions)}
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
