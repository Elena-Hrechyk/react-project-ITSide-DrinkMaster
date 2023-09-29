// import { useSelector } from 'react-redux';
// import {selectIsLogin} from '../../redux/auth/authSelectors'
// import toast from 'react-hot-toast';
import { SignUpForm } from '../../components/SignUpPageComponents/SignUpform/SignUpForm';
import { H2, SignInSection, RouteLink } from './SignUpPage.styled';
const SignUpPage = () => {
  // const isLogin = useSelector(selectIsLogin);

  // isLogin
  //   ? toast.success('Successfully toasted!')
  //   : toast.error('Something was wrong! Try again!');
  return (
    <SignInSection>
      <H2>Sign Up</H2>
      <SignUpForm />
      <RouteLink to="/signin">Sign In</RouteLink>
    </SignInSection>
  );
};

export default SignUpPage;
