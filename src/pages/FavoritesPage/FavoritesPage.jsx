import PageTitle from '../../components/PageTitle/PageTitle'
import DrinksList from '../../components/DrinksList/DrinksList'
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { Wrap } from './FavoritesPage.styled';
// import { UsersList } from 'components/UsersList/UsersList';

export const FavoritesPage = () => {
//   const navigate = useNavigate();
  //   const goBack = () => navigate('/');
  // console.log(PageTitle)
  // console.log(children)
  // console.log(title)

  return (
    <Wrap>
    <PageTitle title={'Favorites'}></PageTitle>
    <DrinksList></DrinksList>
    </Wrap>
  );
};

export default FavoritesPage;
// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };