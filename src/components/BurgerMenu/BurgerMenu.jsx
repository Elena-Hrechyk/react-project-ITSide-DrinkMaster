import { ReactComponent as IconsClose } from '../../img/svg/delete.svg';
import { ReactComponent as IconsBurgerMenu } from '../../img/svg/align-justify.svg';
import {
  BurgerMenuBtn,
  NavigationList,
  StyledLink,
  BurgerMenuContainer,
  NavItem,
} from './BurgerMenu.styled';
import { useEffect, useState } from 'react';

export const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu, theme }) => {
  const [colorMenuButton, setColorMenuButton] = useState('#F3F3F3');

  useEffect(() => {
    theme === 'dark'
      ? setColorMenuButton('#F3F3F3')
      : setColorMenuButton('#161F37');
  }, [theme]);

  return (
    <>
      <BurgerMenuBtn id="burger_menu" onClick={toggleMenu}>
        {isOpenBurgerMenu ? (
          <IconsClose fill={colorMenuButton} />
        ) : (
          <IconsBurgerMenu fill={colorMenuButton} />
        )}
      </BurgerMenuBtn>

      <BurgerMenuContainer open={isOpenBurgerMenu}>
        <NavigationList>
          <NavItem>
            <StyledLink to="/" onClick={toggleMenu}>
              Home
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/drinks" onClick={toggleMenu}>
              Drinks
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/addDrink" onClick={toggleMenu}>
              Add drink
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="my" onClick={toggleMenu}>
              My drinks
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="favorites" onClick={toggleMenu}>
              Favorites
            </StyledLink>
          </NavItem>
        </NavigationList>
      </BurgerMenuContainer>
    </>
  );
};
