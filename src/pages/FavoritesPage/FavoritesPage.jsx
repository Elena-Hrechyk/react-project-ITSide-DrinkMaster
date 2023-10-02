import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useResize } from '../../redux/hooks/useResize';
// import { fetchDrinksFavorite } from '../../redux/drinks/drinksOperations';

import { selectDrinks } from '../../redux/drinks/drinksSelectors';

import PageTitle from '../../components/PageTitle/PageTitle';
import Drinks_List from '../../components/Drinks_List/Drinks_List';
// import {selectFavoriteDrinks} from '../../redux/drinks/drinksSelectors'
import { Wrap } from './FavoritesPage.styled';
import Paginator from '../../components/Paginator/Paginator';

export const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [drinksPerPage] = useState(9);
  const { width } = useResize();
  const drinksPerPage = width < 1280 ? 10 : 9;
  const pageNumbersVisible = width < 768 ? 5 : 8;
  // const items = useSelector(selectFavoriteDrinks);

  const { data } = useSelector(selectDrinks);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDrinksFavorite());
  // }, [dispatch]);

  const lastDrinkIndex = currentPage * drinksPerPage;
  const firstDrinkIndex = lastDrinkIndex - drinksPerPage;
  const current = data.slice(firstDrinkIndex, lastDrinkIndex);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const prevPage = () => setCurrentPage(prev => prev - 1);

  return (
    <Wrap>
      <PageTitle title={'Favorites'}></PageTitle>
      <Drinks_List items={current}></Drinks_List>
      {
        <Paginator
          currentPage={currentPage}
          paginate={pageNumbersVisible}
          drinksPerPage={drinksPerPage}
          totalItems={data.length}
          nextPage={onPageChange}
          // prevPage={prevPage}
        ></Paginator>
      }
    </Wrap>
  );
};

export default FavoritesPage;

// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };
