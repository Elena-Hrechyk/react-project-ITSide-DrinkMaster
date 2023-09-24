import DrinksItem from '../DrinksItem/DrinksItem';
import { Wrap } from './DrinksList.styled';

const DrinksList = () => {
  return (
    <Wrap>
      <li><DrinksItem></DrinksItem></li>
      <li><DrinksItem></DrinksItem></li>
      <li><DrinksItem></DrinksItem></li>
      <li><DrinksItem></DrinksItem></li>
      <li><DrinksItem></DrinksItem></li>
      <li><DrinksItem></DrinksItem></li>
      <li><DrinksItem></DrinksItem></li>
    </Wrap>
  );
};

export default DrinksList;
