import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { useResize } from '../../redux/hooks/useResize';

import { fetchOwnDrinks } from '../../redux/drinks/drinksOperations';
import { selectError } from '../../redux/drinks/drinksSelectors';
import {selectOwnDrinks} from '../../redux/drinks/drinksSelectors'
import { Wrap } from './MyDrinkPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/Drinks_List/Drinks_List';
import NotFoundComponent from '../../components/NotFoundComponent/NotFoundComponent';
import Paginator from '../../components/Paginator/Paginator';


export const MyDrinksPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useResize();
  const data = useSelector(selectOwnDrinks);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOwnDrinks());
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
      <PageTitle title={'My drinks'}></PageTitle>
      {data && data.length !== 0 ? (<DrinksList items={current}></DrinksList>) : (
        <NotFoundComponent error={error} message={"No own cocktails"}></NotFoundComponent>
      )}
      {data && data.length !== 0 && (
        <Paginator
          currentPage={currentPage}
          paginate={pageNumbersVisible}
          drinksPerPage={drinksPerPage}
          totalItems={data.length}
          nextPage={onPageChange}
        ></Paginator>
      )}
    </Wrap>
  );
};

export default MyDrinksPage;