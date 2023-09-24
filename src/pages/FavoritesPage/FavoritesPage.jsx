import PageTitle from '../../components/PageTitle/PageTitle';
import Drinks_List from '../../components/Drinks_List/Drinks_List';

import { Wrap } from './FavoritesPage.styled';
import Paginator from '../../components/Paginator/Paginator';

export const FavoritesPage = () => {
  return (
    <Wrap>
      <PageTitle title={'Favorites'}></PageTitle>
      <Drinks_List></Drinks_List>
      <Paginator></Paginator>
    </Wrap>
  );
};

export default FavoritesPage;

// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };
