import { useSelector } from 'react-redux';
import { selectDrinks } from '../../redux/drinks/drinksSelectors';
import {
  ItemDrink,
  ImgDrink,
  TitleDrink,
  SeemoreLink,
  Box,
} from './DrinksListHomePage.styled';

const DrinksListHomePage = ({ type }) => {
  const allDrinks = useSelector(selectDrinks);

  const drinks = allDrinks.data;
  let filterDrinks = [];

  if (drinks) {
    filterDrinks = drinks.filter((item) => {
      return type === item.category;
    });
  }

  return (
    <>
      {filterDrinks.map(({ _id, drink, drinkThumb }) => {
        return (
          <ItemDrink key={_id}>
            <ImgDrink src={drinkThumb} alt={drink} loading="lazy" />
            <Box>
              <TitleDrink>{drink}</TitleDrink>
              <SeemoreLink to={`/drinks/${_id}`}>See more</SeemoreLink>
            </Box>
          </ItemDrink>
        );
      })}
    </>
  );
};

export default DrinksListHomePage;
