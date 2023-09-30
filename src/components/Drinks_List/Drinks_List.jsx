import DrinksItem from '../DrinksItem/DrinksItem';
import { Wrap } from './Drinks_List.styled';

const DrinksList = ({ items }) => {
  return (
    <Wrap>
      {items &&
        items.map(item => (
          <li key={item._id}>
            <DrinksItem item={item}></DrinksItem>
          </li>
        ))}
    </Wrap>
  );
};

export default DrinksList;
