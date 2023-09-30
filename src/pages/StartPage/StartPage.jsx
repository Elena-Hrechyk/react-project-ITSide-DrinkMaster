
import {
  ButtonWrapper,
  H1,
  NavLink,
  P,
  SignInButton,
  StartSection,
 
} from './StartPage.styled';
import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';


const StartPage = () => {
  
  return (
    <>
     
      <StartSection>
        <H1>Welcome to the app!</H1>
        <P>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </P>
        <ButtonWrapper>
          <NavLink to="/signup">
            <SignUpButton />
          </NavLink>
          <NavLink to="/signin">
            <SignInButton>Sign In</SignInButton>
          </NavLink>
        </ButtonWrapper>
      </StartSection>
    </>
  );
};

export default StartPage;
