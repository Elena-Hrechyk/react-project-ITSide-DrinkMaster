import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';

import { Wrap } from './MyDrinkPage.styled';

export const MyDrinksPage  = () => {
  return (
    <Wrap>
      <PageTitle title={'My drinks'}></PageTitle>
      <DrinksList></DrinksList>
    </Wrap>
  );
};

export default MyDrinksPage ;

// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };
