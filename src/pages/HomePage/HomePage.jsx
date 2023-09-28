// DrinkMaster page like HomePage
import {
  AddDrinkContainer,
  StyledLink,
  HomeSection,
  CategoryDrinkContainer,
  LinkBox,
  Title,
  Discribe,
  HeroImg,
  LeftSideHero,
} from './HomePage.styled';
import HeroImage from '../../img/drink-master/hero/hero-drink-master.png';

import DrinksListHomePage from '../../components/Drinks_list_home_page/drinksListHomePage';

const HomePage = () => {
  return (
    <HomeSection>
      <AddDrinkContainer>
        <LeftSideHero>
          <Title>Craft Your Perfect Drink with Drink Master</Title>
          <Discribe>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the words finest
            beverages.
          </Discribe>
          <StyledLink to="add">Add drink</StyledLink>
        </LeftSideHero>
        <HeroImg src={HeroImage} alt="Coctail" />
      </AddDrinkContainer>
      <CategoryDrinkContainer>
        <h2>Ordinary Drink</h2>
        <DrinksListHomePage />
      </CategoryDrinkContainer>
      <CategoryDrinkContainer>
        <h2>Cocktail</h2>
        <DrinksListHomePage />
      </CategoryDrinkContainer>
      <CategoryDrinkContainer>
        <h2>Shake</h2>
        <DrinksListHomePage />
      </CategoryDrinkContainer>
      <CategoryDrinkContainer>
        <h2>Other/Unknow</h2>
        <DrinksListHomePage />
      </CategoryDrinkContainer>
      <LinkBox>
        <StyledLink to="/drinks">Other drinks</StyledLink>
      </LinkBox>
    </HomeSection>
  );
};

export default HomePage;
