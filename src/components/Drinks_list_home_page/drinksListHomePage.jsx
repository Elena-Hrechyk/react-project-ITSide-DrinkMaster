import DrinksItem from '../DrinksItem/DrinksItem';
import { Wrap } from './drinksListHomePage.styled';

const DrinksListHomePage = () => {
  return (
    <Wrap>
      <li>
        <DrinksItem></DrinksItem>
      </li>
      <li>
        <DrinksItem></DrinksItem>
      </li>
      <li>
        <DrinksItem></DrinksItem>
      </li>
    </Wrap>
  );
};

export default DrinksListHomePage;
