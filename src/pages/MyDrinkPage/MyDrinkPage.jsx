import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { useResize } from '../../redux/hooks/useResize';
import { Container } from '../../components/GlobalStyled/container.styled';
import { deleteOwnDrinks } from '../../redux/drinks/drinksOperations';
import { fetchOwnDrinks } from '../../redux/drinks/drinksOperations';
import { selectError } from '../../redux/drinks/drinksSelectors';
import { selectOwnDrinks } from '../../redux/drinks/drinksSelectors';
import { selectIsLoading } from '../../redux/drinks/drinksSelectors';
import { Wrap } from './MyDrinkPage.styled';
import { Loader } from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/Drinks_List/Drinks_List';
import NotFoundComponent from '../../components/NotFoundComponent/NotFoundComponent';
import Paginator from '../../components/Paginator/Paginator';

const MyDrinksPage = ({ theme }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numbers, setNumbers] = useState(0);
  const dispatch = useDispatch();

  const { width } = useResize();
  const data = useSelector(selectOwnDrinks);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const total = data.length;

  useEffect(() => {
    dispatch(fetchOwnDrinks());
    if (total !== numbers) {
      setCurrentPage(1);
      setNumbers(total);
    }
  }, [dispatch, total, numbers]);

  const drinksPerPage = width < 1280 ? 10 : 9;
  const pageNumbersVisible = width < 768 ? 5 : 8;

  const totalPages = Math.ceil(total / drinksPerPage);
  const lastDrinkIndex = currentPage * drinksPerPage;
  const firstDrinkIndex = lastDrinkIndex - drinksPerPage;
  const current = data.slice(firstDrinkIndex, lastDrinkIndex);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrap>
      <Container>
        <PageTitle title={'My drinks'}></PageTitle>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {total > 0 ? (
              <DrinksList
                deleteDrink={deleteOwnDrinks}
                items={current}
              ></DrinksList>
            ) : (
              <NotFoundComponent
                error={error}
                message={"You haven't added any own cocktails yet"}
              ></NotFoundComponent>
            )}
            {totalPages > 1 && (
              <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={onPageChange}
                paginate={pageNumbersVisible}
                theme={theme}
              />
            )}
          </>
        )}
      </Container>
    </Wrap>
  );
};

export default MyDrinksPage;
