import { SignUpForm } from '../../components/SignUpPageComponents/SignUpform/SignUpForm';
import { H2, SignInSection, RouteLink } from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignInSection>
      <H2>Sign Up</H2>
      <SignUpForm />
      <RouteLink to="/signin">Sign In</RouteLink>
    </SignInSection>
  );
};

export default SignUpPage;
