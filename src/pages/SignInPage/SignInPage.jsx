import { SignInForm } from '../../components/SignInPageComponents/SignInForm';
import { H2, SignInSection, RouteLink } from '../SignUpPage/SignUpPage.styled';
const SignIpPage = () => {
  return (
    <SignInSection>
      <H2>Sign In</H2>
      <SignInForm />
      <RouteLink to="/signin">Sign Up</RouteLink>
    </SignInSection>
  );
};

export default SignIpPage;