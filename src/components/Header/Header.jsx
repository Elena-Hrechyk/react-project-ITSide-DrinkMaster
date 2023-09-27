import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../img/svg/logo.svg';
import {
  HeaderContainer,
  Navigation,
  NavigationList,
  LinkLogo,
  UserBarBtn,
  StyledLink,
  UserBarName,
  UserBarImg,
  Head,
} from './Header.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);

  const toggleMenu = () => setisOpenBurgerMenu(!isOpenBurgerMenu);

  if (isOpenBurgerMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  useEffect(() => {
    setisOpenBurgerMenu(false);
  }, [location.pathname]);

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
            <StyledLink to="/addDrink">Add drink</StyledLink>
            <StyledLink to="my">My drinks</StyledLink>
            <StyledLink to="favorites">Favorites</StyledLink>
          </NavigationList>
        </Navigation>
        <UserBarBtn type="button">
          <UserBarImg src="" alt="User" />
          <UserBarName>User</UserBarName>
        </UserBarBtn>
        <BurgerMenu
          toggleMenu={toggleMenu}
          isOpenBurgerMenu={isOpenBurgerMenu}
        />
      </HeaderContainer>
    </Head>
  );
};
