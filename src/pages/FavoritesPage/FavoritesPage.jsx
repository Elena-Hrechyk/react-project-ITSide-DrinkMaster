import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { fetchDrinksFavorite } from '../../redux/drinks/drinksOperations';

import {selectDrinks} from '../../redux/drinks/drinksSelectors'

import PageTitle from '../../components/PageTitle/PageTitle';
import Drinks_List from '../../components/Drinks_List/Drinks_List';
// import {selectFavoriteDrinks} from '../../redux/drinks/drinksSelectors'
import { Wrap } from './FavoritesPage.styled';
import Paginator from '../../components/Paginator/Paginator';

export const FavoritesPage = () => {
  // const items = useSelector(selectFavoriteDrinks); 

  const {data} = useSelector(selectDrinks); 
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDrinksFavorite());
  // }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [drinksPerPage] = useState(9);

  const lastDrinkIndex = currentPage * drinksPerPage;
  const firstDrinkIndex = lastDrinkIndex - drinksPerPage;
  const current = data.slice(firstDrinkIndex, lastDrinkIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(prev => prev + 1);

  const prevPage = () => setCurrentPage(prev => prev - 1); 

  return (
    <Wrap>
      <PageTitle title={'Favorites'}></PageTitle>
      <Drinks_List items={current}></Drinks_List>
      {<Paginator
        currentPage={currentPage}
        paginate={paginate}
        drinksPerPage={drinksPerPage}
        totalItems={data.length}
        nextPage={nextPage}
        prevPage={prevPage}
      >
      </Paginator>}
    </Wrap>
  );
};

export default FavoritesPage;

// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };
