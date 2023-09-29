import { useSelector } from 'react-redux';
import { selectDrinks } from '../../redux/drinks/drinksSelectors';
import {
  ItemDrink,
  ImgDrink,
  TitleDrink,
  SeemoreLink,
  Box,
} from './drinksListHomePage.styled';
// import img from '../../img/drink-master/odinary-drink/atlantic-sun.jpg';

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
            <ImgDrink src={drinkThumb} alt={drink} width={400} />
            <Box>
              <TitleDrink>{drink}</TitleDrink>
              <SeemoreLink href="">See more</SeemoreLink>
            </Box>
          </ItemDrink>
        );
      })}

      {/* <li>
        <DrinksItem></DrinksItem>
      </li>
      <li>
        <DrinksItem></DrinksItem>
      </li> */}
    </>
  );
};

export default DrinksListHomePage;
