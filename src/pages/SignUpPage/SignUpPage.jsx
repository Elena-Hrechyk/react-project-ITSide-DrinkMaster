import { useSelector } from 'react-redux';
import { selectIsError } from '../../redux/auth/authSelectors';
import toast from 'react-hot-toast';
import { SignUpForm } from '../../components/SignUpPageComponents/SignUpform/SignUpForm';
import { Container } from '../../components/GlobalStyled/container.styled';
import { H2, RouteLink, FormWrapper, SignUpSection } from './SignUpPage.styled';
import { useEffect } from 'react';

const SignUpPage = () => {
  const isError = useSelector(selectIsError);
  useEffect(() => {
    isError && toast.error(`${isError} Something was wrong! Try again!`);
  }, [isError]);

  
  return (
    <SignUpSection>
      <Container>
        <H2>Sign Up</H2>
        <FormWrapper>
          <SignUpForm />
          <RouteLink to="/signin">Sign In</RouteLink>
        </FormWrapper>
      </Container>
    </SignUpSection>
  );
};

export default SignUpPage;
