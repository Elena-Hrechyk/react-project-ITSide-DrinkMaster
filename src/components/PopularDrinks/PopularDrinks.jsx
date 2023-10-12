import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchDrinksPopular } from '../../redux/drinks/drinksOperations';
import { selectIsLoading, selectPopular } from '../../redux/drinks/drinksSelectors';
import { FollowUs } from '../FollowUsContainer/FollowUsContainer';
import { Loader } from '../Loader/Loader';
import {
  DescriptionContainer,
  DrinksContainer,
  ImgStyled,
  PopularDrinkCont,
  StyledLink,
  Text,
  UlContainer,
} from './PopularDrinks.styled';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDrinksPopular());
  }, [dispatch]);
  const popular = useSelector(selectPopular);
const isLoading = useSelector(selectIsLoading)
  return (
    <DrinksContainer >
      <h4 style={{marginBottom:"20px"}}>Follow Us</h4>
      <FollowUs/>
      <h4 style={{ marginTop: "40px" }}>PopularDrinks</h4>
      {isLoading ? (
        <Loader />
      ) : (
        <UlContainer>
          {popular.map((item) => {
            return (
              <PopularDrinkCont key={item._id}>
                <StyledLink to={`/drinks/${item._id}`}>
                  <ImgStyled
                    src={item.drinkThumb}
                    alt="SVG Image"
             
                  />

                  <DescriptionContainer>
                    <h4>{item.drink}</h4>
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
