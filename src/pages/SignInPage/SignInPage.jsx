// import { Container } from '../../components/GlobalStyled/container.styled';
import { SignInForm } from '../../components/SignInPageComponents/SignInForm';
import { H2, RouteLink, FormWrapper } from '../SignUpPage/SignUpPage.styled';
import { Container } from '../../components/GlobalStyled/container.styled';
import { SignInSection } from './SignInPage.styled';
const SignIpPage = () => {
  return (
    <SignInSection>
      <Container>
        <H2>Sign In</H2>
        <FormWrapper>
          <SignInForm />
          <RouteLink to="/signup">Sign Up</RouteLink>
        </FormWrapper>
      </Container>
    </SignInSection>
  );
};

export default SignIpPage;
