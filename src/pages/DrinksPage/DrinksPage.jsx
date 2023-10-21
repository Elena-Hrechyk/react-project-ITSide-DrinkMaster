import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import { Container } from '../../components/GlobalStyled/container.styled';
import Paginator from '../../components/Paginator/Paginator';
import { DrinksListPage } from '../../components/DrinksList/DrinksList';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { DrinksPageSection, DrinksPageTitle } from './DrinksPage.styled';
import { useResize } from '../../redux/hooks/useResize';
import {
  selectDrinks,
  selectError,
  selectIsLoading,
} from '../../redux/drinks/drinksSelectors';

const DrinksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numbers, setNumbers] = useState(0);

  const { width } = useResize();
  const { data, quantity } = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const total = quantity;

  if (total !== numbers) {
    setCurrentPage(1);
    setNumbers(total);
  }

  const pageNumbersVisible = width < 768 ? 5 : 8;
  const drinksPerPage = width < 1280 ? 10 : 9;

  const totalPages = Math.ceil(total / drinksPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DrinksPageSection>
      <Container>
        <DrinksPageTitle>Drinks</DrinksPageTitle>
        <SearchDrinks page={currentPage} limit={drinksPerPage} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              {total > 0 || !error ? (
                <DrinksListPage drinks={data} />
              ) : (
                <h3>Sorry. There are no cocktails...</h3>
              )}
            </div>
            {totalPages > 1 && (
              <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={onPageChange}
                paginate={pageNumbersVisible}
              />
            )}
          </>
        )}
      </Container>
    </DrinksPageSection>
  );
};

export default DrinksPage;
