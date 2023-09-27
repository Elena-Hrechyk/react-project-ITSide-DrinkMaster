
import { DrinksList } from '../../components/DrinksList/DrinksList'
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';

import { DrinksPageTitle } from './DrinksPage.styled';

export default function DrinksPage() {

  return (
    <>
      <DrinksPageTitle>Drinks</DrinksPageTitle>
      <SearchDrinks />
      <DrinksList />
    </>
  );
}