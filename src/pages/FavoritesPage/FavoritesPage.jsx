import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';

import { Wrap } from './FavoritesPage.styled';
import Paginator from '../../components/Paginator/Paginator';

export const FavoritesPage = () => {
  return (
    <Wrap>
      <PageTitle title={'Favorites'}></PageTitle>
      <DrinksList></DrinksList>
      <Paginator></Paginator>
    </Wrap>
  );
};

export default FavoritesPage;

// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };
