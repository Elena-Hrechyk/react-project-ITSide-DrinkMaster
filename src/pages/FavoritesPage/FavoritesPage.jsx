import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { useResize } from '../../redux/hooks/useResize';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import { selectFavoriteDrinks } from '../../redux/auth/authSelectors';
import { fetchDrinksFavorite } from '../../redux/auth/authOperations';
import { removeFavoriteDrink } from '../../redux/drinks/drinksOperations';
import { Container } from '../../components/GlobalStyled/container.styled';
import { selectIsError } from '../../redux/auth/authSelectors';
import { Loader } from '../../components/Loader/Loader';
import { Wrap } from './FavoritesPage.styled';
import Paginator from '../../components/Paginator/Paginator';
import PageTitle from '../../components/PageTitle/PageTitle';
import Drinks_List from '../../components/Drinks_List/Drinks_List';
import FavoritesNotFound from '../../components/NotFoundComponent/NotFoundComponent';

const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useResize();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const data = useSelector(selectFavoriteDrinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinksFavorite());
  }, [dispatch]);

  const drinksPerPage = width < 1280 ? 10 : 9;
  const pageNumbersVisible = width < 768 ? 5 : 8;
  const lastDrinkIndex = currentPage * drinksPerPage;
  const firstDrinkIndex = lastDrinkIndex - drinksPerPage;
  const current = data.slice(firstDrinkIndex, lastDrinkIndex);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <Wrap>
      <Container>
        <PageTitle title={'Favorites'}></PageTitle>
        {
          isLoading ?
            <Loader/>
            : <>
              {current.length !== 0 ? (
                <Drinks_List
                  items={data}
                  deleteDrink={removeFavoriteDrink}
                ></Drinks_List>
              ) : (
                <FavoritesNotFound
                  error={error}
                  message={'No favorite cocktails'}
                ></FavoritesNotFound>
              )}
              {current.length !== 0 && (
                <Paginator
                  currentPage={currentPage}
                  paginate={pageNumbersVisible}
                  drinksPerPage={drinksPerPage}
                  totalItems={data.length}
                  nextPage={onPageChange}
                ></Paginator>
              )}
            </>
        }
      </Container>
    </Wrap>
  );
};

export default FavoritesPage;
