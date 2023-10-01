import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../../img/svg/logo.svg';
import {
  HeaderContainer,
  Navigation,
  NavigationList,
  LinkLogo,
  StyledLink,
  Head,
} from './Header.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { UserBarMenu } from '../UserBarMenu/UserBarMenu';

export const Header = () => {
  const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);

  const location = useLocation();

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
        <UserBarMenu
          toggleMenu={toggleMenu}
          isOpenBurgerMenu={isOpenBurgerMenu}
        />

        <BurgerMenu
          toggleMenu={toggleMenu}
          isOpenBurgerMenu={isOpenBurgerMenu}
        />
      </HeaderContainer>
    </Head>
  );
};
