// import { useSelector } from 'react-redux';
// import { selectPopular } from '../../redux/drinks/drinksSelectors';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchDrinksPopular } from '../../redux/drinks/drinksOperations';
import { selectPopular } from '../../redux/drinks/drinksSelectors';
import {
  DescriptionContainer,
  DrinksContainer,
  PopularDrinkCont,
  Text,
} from './PopularDrinks.styled';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDrinksPopular());
  }, [dispatch]);
  const popular = useSelector(selectPopular);
  
  return (
    <DrinksContainer>
          <h4>PopularDrinks</h4>
          <ul>
      {popular.map((item) => {
        return (
          <PopularDrinkCont key={item._id}>
            <img src={item.drinkThumb} alt="SVG Image" width={90} height={90} />

            <DescriptionContainer>
              <h4>{item.drink}</h4>
              <Text style={{}}>{item.shortDescription}</Text>
            </DescriptionContainer>
          </PopularDrinkCont>
        );
      })}
          </ul>
    </DrinksContainer>
  );
};

export default PopularDrinks;
