import DrinksItem from '../DrinksItem/DrinksItem';
import { WrapList, DrinkItem } from './Drinks_List.styled';

const DrinksList = ({ items, deleteDrink }) => {
  return (
    <WrapList>
      {items &&
        items.map((item) => (
          <DrinkItem key={item._id}>
            <DrinksItem item={item} deleteDrink={deleteDrink} />
          </DrinkItem>
        ))}
    </WrapList>
  );
};

export default DrinksList;
