// import { Container } from '../../components/GlobalStyled/container.styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsError } from '../../redux/auth/authSelectors';
import { SignInForm } from '../../components/SignInPageComponents/SignInForm';
import { H2, RouteLink, FormWrapper } from '../SignUpPage/SignUpPage.styled';
import { Container } from '../../components/GlobalStyled/container.styled';
import { SignInSection } from './SignInPage.styled';
import toast from 'react-hot-toast';



const SignIpPage = () => {
  const isError = useSelector(selectIsError);
  useEffect(() => {
    isError && toast.error(`${isError} Something was wrong! Try again!`);
  }, [isError]);
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
