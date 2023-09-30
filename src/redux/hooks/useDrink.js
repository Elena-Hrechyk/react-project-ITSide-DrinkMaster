import { useSelector } from 'react-redux';

import {
  selectMainPageDrinks,
  selectIsLoading,
  selectDrinks,
  selectError,
  selectTotalDrinks,
  selectFavoriteDrinks,
} from '../drinks/drinksSelectors';

export const useDrink = () => {
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const mainPageDrinks = useSelector(selectMainPageDrinks);
  const error = useSelector(selectError);
  const total = useSelector(selectTotalDrinks);
  const favoriteDrinks = useSelector(selectFavoriteDrinks);

  return {
    isLoading,
    drinks,
    mainPageDrinks,
    error,
    total,
    favoriteDrinks,
  };
};