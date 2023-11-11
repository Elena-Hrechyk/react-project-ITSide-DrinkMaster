import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchDrinksPopular } from '../../redux/drinks/drinksOperations';
import {
  selectIsLoading,
  selectPopular,
} from '../../redux/drinks/drinksSelectors';
import { FollowUs } from '../FollowUsContainer/FollowUsContainer';
import { Loader } from '../Loader/Loader';
import {
  DescriptionContainer,
  DrinksContainer,
  TitleFollowUs,
  TitlePopDrinks,
  ImgStyled,
  PopularDrinkCont,
  StyledLink,
  TitleDrink,
  Text,
  UlContainer,
} from './PopularDrinks.styled';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDrinksPopular());
  }, [dispatch]);
  const popular = useSelector(selectPopular);
  const isLoading = useSelector(selectIsLoading);
  return (
    <DrinksContainer>
      <TitleFollowUs>Follow Us</TitleFollowUs>
      <FollowUs />
      <TitlePopDrinks>Popular drinks</TitlePopDrinks>
      {isLoading ? (
        <Loader />
      ) : (
        <UlContainer>
          {popular.map((item) => {
            return (
              <PopularDrinkCont key={item._id}>
                <StyledLink to={`/drinks/${item._id}`}>
                  <ImgStyled src={item.drinkThumb} alt="SVG Image" />

                  <DescriptionContainer>
                    <TitleDrink>{item.drink}</TitleDrink>
                    <Text style={{}}>{item.shortDescription}</Text>
                  </DescriptionContainer>
                </StyledLink>
              </PopularDrinkCont>
            );
          })}
        </UlContainer>
      )}
    </DrinksContainer>
  );
};

export default PopularDrinks;
