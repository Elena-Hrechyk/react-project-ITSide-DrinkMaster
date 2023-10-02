import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
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

export default function DrinksPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { width } = useResize();
  const { data } = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const searshQuery = searchParams.get('searchWord') ?? '';

  const visibleDrinks = data.filter((item) =>
    item.drink.toLowerCase().includes(searshQuery.toLowerCase().trim()),
  );

  const total = visibleDrinks.length;
  const pageNumbersVisible = width < 768 ? 5 : 8;
  const itemsPerPage = width < 1280 ? 10 : 9;

  const totalPages = Math.ceil(total / itemsPerPage);

  const lastDrinkIndex = currentPage * itemsPerPage;
  const firstDrinkIndex = lastDrinkIndex - itemsPerPage;
  const current = visibleDrinks.slice(firstDrinkIndex, lastDrinkIndex);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateQueryString = (searchWord) => {
    const nextParams = searchWord !== '' ? { searchWord } : {};
    setSearchParams(nextParams);
  };

  return (
    <DrinksPageSection>
      <Container>
        <DrinksPageTitle>Drinks</DrinksPageTitle>
        <SearchDrinks value={searshQuery} onChange={updateQueryString} />
        {isLoading && <Loader />}
        <div>{total > 0 && !error && <DrinksListPage drinks={current} />}</div>
        {totalPages > 1 && (
          <Paginator
            currentPage={currentPage}
            drinksPerPage={itemsPerPage}
            totalItems={total}
            nextPage={onPageChange}
            paginate={pageNumbersVisible}
          />
        )}
      </Container>
    </DrinksPageSection>
  );
}
