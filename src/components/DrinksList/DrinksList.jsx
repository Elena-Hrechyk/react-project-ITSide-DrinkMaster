

import recipes from './recipes.json';

import {
  DrinksPageImg,
  DrinksPageList,
  DrinksPageA,
  DrinksPageB,
  DrinksPageText,
} from './DrinksPage.styled';

export function DrinksListPage() {

  return (
    <div>
      <DrinksPageList>
        {recipes.map(({ id, drink, drinkThumb }) => (
          <li key={id}>
            <DrinksPageImg src={drinkThumb} alt={drink} />
            <DrinksPageText>
              <DrinksPageA>{drink}</DrinksPageA>
              <DrinksPageB>See more</DrinksPageB>
            </DrinksPageText>
          </li>
        ))}
      </DrinksPageList>
    </div>
  );
}