
// import { useEffect } from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getRequestedDrink } from '../../redux/drinks/drinks-operations';

import { Container } from '../../components/GlobalStyled/container.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { DrinksListPage } from '../../components/DrinksList/DrinksList';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { DrinksPageContainer, DrinksPageTitle } from './DrinksPage.styled';
import { useResize } from '../../redux/hooks/useResize';

export default function DrinksPage() {
  // const dispatch = useDispatch();
  const { width } = useResize();
  const { isLoading, drinks, error, total } = useDrink();

  const [currentPage] = useState(1);

  const itemsPerPage = width < 1440 ? 10 : 9;

  const totalPages = Math.ceil(total / itemsPerPage);

  // useEffect(() => {
  //   dispatch(getRequestedDrink({ page: currentPage, limit: itemsPerPage }));
  // }, [currentPage, dispatch, itemsPerPage]);


  // useEffect(() => {
  //   dispatch(getRequestedDrink()).catch((err) => {
  //     console.error(err);
  //     setErrorMessage('Something went wrong please try later.');
  //   });
  //   setIsLoading(true);
  //   dispatch(getRequestedDrink())
  //     .then(() => setIsLoading(false))
  //     .catch((err) => {
  //       console.error(err);
  //       setErrorMessage('Something went wrong, please try later.');
  //       setIsLoading(false);
  //     });
  // }, [dispatch]);

  return (
    <Container>
      <DrinksPageContainer>
        <DrinksPageTitle>Drinks</DrinksPageTitle>
        <SearchDrinks page={currentPage} limit={itemsPerPage} />
        <div>
          {isLoading }
          {error && <p>No drinks found for your query. Please try again.</p>}
          {total > 0 && !error && <DrinksListPage drinks={drinks} />}
        </div>
        {totalPages > 1 }
      </DrinksPageContainer>
    </Container>
  );
}