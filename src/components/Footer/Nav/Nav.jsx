import { Navigation, NavigationList, StyledLink } from './Nav.styled';

export const Nav = () => {
  return (
    <Navigation>
      <NavigationList>
        <StyledLink to="/drinks">Drinks</StyledLink>
        <StyledLink to="add">Add drink</StyledLink>
        <StyledLink to="my">My drinks</StyledLink>
        <StyledLink to="favorites">Favorites drinks</StyledLink>
      </NavigationList>
    </Navigation>
  );
};
