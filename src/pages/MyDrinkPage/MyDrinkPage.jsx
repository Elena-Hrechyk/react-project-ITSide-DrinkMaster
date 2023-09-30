import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchDrinksFavorite } from '../../redux/drinks/drinksOperations';
// import {selectFavoriteDrinks} from '../../redux/drinks/drinksSelectors'

import {selectDrinks} from '../../redux/drinks/drinksSelectors'

import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/Drinks_List/Drinks_List';

import { Wrap } from './MyDrinkPage.styled';

export const MyDrinksPage = () => {

  // const items = useSelector(selectFavoriteDrinks); 

  const {data} = useSelector(selectDrinks); 

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDrinksFavorite());
  // }, [dispatch]);

  return (
    <Wrap>
      <PageTitle title={'My drinks'}></PageTitle>
      <DrinksList items={data}></DrinksList>
    </Wrap>
  );
};

export default MyDrinksPage;

// FavoritesPage.propTypes = {
//   onClick: PropTypes.func,
// };
