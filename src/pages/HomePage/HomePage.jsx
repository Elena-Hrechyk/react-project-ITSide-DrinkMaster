// DrinkMaster page like HomePage
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllDrinks } from '../../redux/drinks/drinksOperations';
import {
  selectError,
  selectIsLoading,
} from '../../redux/drinks/drinksSelectors';
import { selectIsLogin } from '../../redux/auth/authSelectors';
import categories from './categories.json';
import { Container } from '../../components/GlobalStyled/container.styled';
import {
  AddDrinkContainer,
  LinkAddDrink,
  HomeSection,
  CategoryDrinkList,
  LinkOtherDrink,
  Title,
  Discribe,
  HeroImg,
  LeftSideHero,
  TitleCategory,
  ItemCategory,
  Wrap,
} from './HomePage.styled';
import HeroImage from '../../img/drink-master/hero/hero-drink-master.png';
import DrinksListHomePage from '../../components/DrinksListHomePage/DrinksListHomePage';
import { Loader } from '../../components/Loader/Loader';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllDrinks());
  }, [dispatch]);

  return (
    <>
      {isLogin && (
        <HomeSection>
          <Container>
            <AddDrinkContainer>
              <LeftSideHero>
                <Title>Craft Your Perfect Drink with Drink Master</Title>
                <Discribe>
                  Unlock your inner mixologist with Drink Master, your one-stop
                  destination for exploring, crafting, and mastering the words
                  finest beverages.
                </Discribe>
                <LinkAddDrink to="/addDrink">Add drink</LinkAddDrink>
              </LeftSideHero>
              <HeroImg src={HeroImage} alt="Coctail" loading="lazy" />
            </AddDrinkContainer>
            {isLoading && !error ? (
              <Loader />
            ) : (
              <>
                <CategoryDrinkList>
                  {categories.map((item) => {
                    return (
                      <ItemCategory key={item.id}>
                        <TitleCategory>{item.category}</TitleCategory>
                        <Wrap>
                          <DrinksListHomePage type={item.category} />
                        </Wrap>
                      </ItemCategory>
                    );
                  })}
                </CategoryDrinkList>
                <LinkOtherDrink to="/drinks">Other drinks</LinkOtherDrink>
              </>
            )}
          </Container>
        </HomeSection>
      )}
    </>
  );
};

export default HomePage;
