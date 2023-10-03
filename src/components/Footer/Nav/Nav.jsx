import { Navigation, NavigationList, StyledLink, NavigationContainer } from './Nav.styled';

export const Nav = () => {
  return (
    <NavigationContainer>
      <Navigation>
      <NavigationList>
        <StyledLink to="/drinks">Drinks</StyledLink>
        <StyledLink to="add">Add drink</StyledLink>
        <StyledLink to="my">My drinks</StyledLink>
        <StyledLink to="favorites">Favorites drinks</StyledLink>
      </NavigationList>
    </Navigation>
    </NavigationContainer>
    
  );
};
