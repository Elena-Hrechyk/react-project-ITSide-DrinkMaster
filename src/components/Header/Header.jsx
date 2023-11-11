import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useResize } from '../../redux/hooks/useResize';
import { ReactComponent as Logo } from '../../img/svg/logo.svg';
import { ReactComponent as LogoDark } from '../../img/svg/logoDark.svg';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import {
  HeaderContainer,
  Navigation,
  NavigationList,
  LinkLogo,
  StyledLink,
  Head,
  WrapToggleUser,
} from './Header.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { UserBarMenu } from '../UserBarMenu/UserBarMenu';

export const Header = ({ theme, toggleTheme }) => {
  const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);
  const location = useLocation();
  const { width } = useResize();

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
          {theme === 'dark' ? <Logo /> : <LogoDark />}
          Drink Master
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
        {width >= 1280 ? (
          <WrapToggleUser>
            <ToggleTheme toggleTheme={toggleTheme} theme={theme} />
            <UserBarMenu
              toggleMenu={toggleMenu}
              isOpenBurgerMenu={isOpenBurgerMenu}
            />
          </WrapToggleUser>
        ) : (
          <>
            {isOpenBurgerMenu ? (
              <ToggleTheme toggleTheme={toggleTheme} theme={theme} />
            ) : (
              <UserBarMenu
                toggleMenu={toggleMenu}
                isOpenBurgerMenu={isOpenBurgerMenu}
              />
            )}
          </>
        )}

        <BurgerMenu
          toggleMenu={toggleMenu}
          isOpenBurgerMenu={isOpenBurgerMenu}
          theme={theme}
        />
      </HeaderContainer>
    </Head>
  );
};
