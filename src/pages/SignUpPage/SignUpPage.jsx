import { Link } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpPageComponents/SignUpform/SignUpForm';
import { H2, SignInSection } from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignInSection>
      <H2>Sign Up</H2>
      <SignUpForm />
      <Link to="/signin">Sign In</Link>
    </SignInSection>
  );
};

export default SignUpPage;
