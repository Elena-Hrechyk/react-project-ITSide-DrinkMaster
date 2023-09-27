import { ReactComponent as IconsClose } from '../../img/svg/delete.svg';
import { ReactComponent as IconsBurgerMenu } from '../../img/svg/burger-menu.svg';
import {
  BurgerMenuBtn,
  NavigationList,
  StyledLink,
  BurgerMenuContainer,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu }) => {
  return (
    <>
      <BurgerMenuBtn id="burger_menu" onClick={toggleMenu}>
        {isOpenBurgerMenu ? <IconsClose /> : <IconsBurgerMenu />}
      </BurgerMenuBtn>

      <BurgerMenuContainer open={isOpenBurgerMenu}>
        <NavigationList>
          <StyledLink to="/" onClick={toggleMenu}>
            Home
          </StyledLink>
          <StyledLink to="/drinks" onClick={toggleMenu}>
            Drinks
          </StyledLink>
          <StyledLink to="/addDrink" onClick={toggleMenu}>
            Add drink
          </StyledLink>
          <StyledLink to="my" onClick={toggleMenu}>
            My drinks
          </StyledLink>
          <StyledLink to="favorites" onClick={toggleMenu}>
            Favorites
          </StyledLink>
        </NavigationList>
      </BurgerMenuContainer>
    </>
  );
};
