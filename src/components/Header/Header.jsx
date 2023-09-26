import { ReactComponent as Logo } from '../../img/svg/logo.svg';
import { ReactComponent as BurgerMenu } from '../../img/svg/burger-menu.svg';
import {
  HeaderContainer,
  Navigation,
  NavigationList,
  LinkLogo,
  BurgerMenuBtn,
  UserBarBtn,
  StyledLink,
  UserBarName,
  UserBarImg,
  Head
} from './Header.styled';

export const Header = () => {
  return (
    <Head>
      <HeaderContainer>
        <LinkLogo to={'/'}>
          <Logo />
          <span>Drink Master</span>
        </LinkLogo>
        <Navigation>
          <NavigationList>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/drinks">Drinks</StyledLink>
            <StyledLink to="add">Add drink</StyledLink>
            <StyledLink to="my">My drinks</StyledLink>
            <StyledLink to="favorites">Favorites</StyledLink>
          </NavigationList>
        </Navigation>
        <UserBarBtn type="button">
          <UserBarImg src="" alt="User" />
          <UserBarName>User</UserBarName>
        </UserBarBtn>
        <BurgerMenuBtn type="button">
          <BurgerMenu />
        </BurgerMenuBtn>
      </HeaderContainer>
    </Head>
  );
};
