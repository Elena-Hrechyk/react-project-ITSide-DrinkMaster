import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getIngredientsAll } from '../../../redux/filters/filtersOperation';
import { selectIngredients } from '../../../redux/filters/selectors';
import {
  Title,
  ListIngredients,
  ItemIngredient,
  ImgIngredient,
  BoxTitleIngredient,
  TitleIngredient,
  Measure,
} from './RecipeIngredients.styled';

export const RecipeIngredientsItems = ({ data }) => {
  const arr = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsAll());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);

  data.map(({ ingredientId, measure }) => {
    ingredients.find((item) => {
      if (ingredientId === item._id) {
        let newItem = {
          measure: measure,
        };
        arr.push({ ...item, ...newItem });
      }
    });
    return arr;
  });

  return (
    <>
      <Title>Ingredients</Title>
      <ListIngredients>
        <>
          {arr.map(({ _id, title, measure, ingredientThumb }) => {
            return (
              <ItemIngredient key={_id}>
                <ImgIngredient src={ingredientThumb} alt={title} />
                <BoxTitleIngredient>
                  <TitleIngredient>{title}</TitleIngredient>
                  <Measure>{measure}</Measure>
                </BoxTitleIngredient>
              </ItemIngredient>
            );
          })}
        </>
      </ListIngredients>
    </>
  );
};
