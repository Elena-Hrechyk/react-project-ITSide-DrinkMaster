import { Link } from 'react-router-dom';
import {
  H1,
  P,
  SignInButton,
  StartSection,
  BGElipse1,
  BGElipse2,
  BGElipse3,
} from './StartPage.styled';
import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';


const StartPage = () => {
  
  return (
    <>
      <BGElipse1 />
      <BGElipse2 />
       <BGElipse3 />
      <StartSection>
        <H1>Welcome to the app!</H1>
        <P>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </P>

        <Link to="/signup">
          <SignUpButton />
        </Link>

        <SignInButton>
          <Link to="/signin">Sign In</Link>
        </SignInButton>
      </StartSection>
    </>
  );
};

export default StartPage;
