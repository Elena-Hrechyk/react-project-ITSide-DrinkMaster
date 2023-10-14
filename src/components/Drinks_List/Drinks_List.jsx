import DrinksItem from '../DrinksItem/DrinksItem';
import { Wrap } from './Drinks_List.styled';

const DrinksList = ({ items, deleteDrink }) => {
  return (
    <Wrap>
      {items &&
        items.map(item => (
          <li key={item._id}>
            <DrinksItem item={item} deleteDrink={deleteDrink}></DrinksItem>
          </li>
        ))}
    </Wrap>
  );
};

export default DrinksList;
