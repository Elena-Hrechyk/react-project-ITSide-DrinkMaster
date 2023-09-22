import { Link } from 'react-router-dom';
import { H1, P, SignInButton, SignUPButton, StartSection } from './StartPage.styled';


const StartPage = () => {
  const HandleClick =() => {
  
  };
  return (
    <StartSection>
      <H1>Welcome to the app!</H1>
      <P>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </P>
      <SignUPButton onClick={HandleClick}>
        <Link to="/signup">Sign Up</Link>
      </SignUPButton>
      <SignInButton>
        <Link to="/signin">Sign In</Link>
      </SignInButton>
    </StartSection>
  );
};

export default StartPage;
