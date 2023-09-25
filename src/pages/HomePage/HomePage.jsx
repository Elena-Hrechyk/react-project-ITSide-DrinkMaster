// DrinkMaster page like HomePage

import { AddDrinkContainer, StyledLink, HomeSection } from './HomePage.styled';
import DrinksListHomePage from '../../components/Drinks_list_home_page/drinksListHomePage';

const HomePage = () => {
  return (
    <HomeSection>
      <AddDrinkContainer>
        <h1>Craft Your Perfect Drink with Drink Master</h1>
        <p>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>
        <StyledLink to="add">Add drink</StyledLink>
      </AddDrinkContainer>
      <div>
        <h2>Ordinary Drink</h2>
        <DrinksListHomePage />
      </div>
      <div>
        <h2>Cocktail</h2>
        <DrinksListHomePage />
      </div>
      <div>
        <h2>Shake</h2>
        <DrinksListHomePage />
      </div>
      <div>
        <h2>Other/Unknow</h2>
        <DrinksListHomePage />
      </div>
      <StyledLink to="/drinks">Other drinks</StyledLink>
    </HomeSection>
  );
};

export default HomePage;
