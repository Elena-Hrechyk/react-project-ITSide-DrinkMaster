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
  Text,
} from './RecipeIngredients.styled';

export const RecipeIngredientsItems = ({ data }) => {
  const recipe = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsAll());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);

  if (data.length) {
    data.map(({ ingredientId, measure }) => {
      ingredients.find((item) => {
        if (ingredientId === item._id) {
          let newItem = {
            measure: measure,
          };
          recipe.push({ ...item, ...newItem });
        }
      });
      return recipe;
    });
  }

  return (
    <>
      <Title>Ingredients</Title>
      {recipe.length ? (
        <>
          <ListIngredients>
            <>
              {recipe.map((ingredient) => {
                return (
                  <ItemIngredient key={ingredient._id}>
                    <ImgIngredient
                      srcSet={`${ingredient['thumb-small']} 767w, ${ingredient['thumb-medium']} 1279w, ${ingredient.ingredientThumb} 1680w`}
                      src={ingredient.ingredientThumb}
                      alt={ingredient.title}
                      loading="lazy"
                    />

                    <BoxTitleIngredient>
                      <TitleIngredient>{ingredient.title}</TitleIngredient>
                      <Measure>{ingredient.measure}</Measure>
                    </BoxTitleIngredient>
                  </ItemIngredient>
                );
              })}
            </>
          </ListIngredients>
        </>
      ) : (
        <Text>No information on ingredients</Text>
      )}
    </>
  );
};
