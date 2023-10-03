import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDrinkById } from '../../redux/drinks/drinksOperations';
import { Container } from '../../components/GlobalStyled/container.styled';
import { ButtonAddRemove } from '../../components/RecipePage/RecipeButton';
import RecipeTitle from '../../components/RecipePage/RecipeTitle';
import { RecipeIngredientsItems } from '../../components/RecipePage/RecipeIngredients/RecipeIngredients';
import { selectDrinkById } from '../../redux/drinks/drinksSelectors';
import {
  Section,
  TypeDrink,
  Description,
  ImgDrink,
  BoxAboutDrink,
  BoxAboutDrinkText,
  TitleRecipe,
  Recipe,
  ImgDecor,
  Wrap,
} from './Drinkpage.styled';

import PictureDecor from '../../img/my-drinks/recipe-preparation.jpg';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector((state) => selectDrinkById(state, drinkId));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <Section>
      <Container>
        <BoxAboutDrink>
          <BoxAboutDrinkText>
            <RecipeTitle title={drink.drink} />
            <TypeDrink>
              {drink.glass} / {drink.alcoholic}
            </TypeDrink>
            <Description>{drink.description}</Description>
            <ButtonAddRemove id={drinkId} />
          </BoxAboutDrinkText>
          <ImgDrink
            src={drink.drinkThumb}
            alt={drink.drink}
            title={drink.drink}
          />
        </BoxAboutDrink>

        <RecipeIngredientsItems data={drink.ingredients} />
        <TitleRecipe>Recipe Preparation</TitleRecipe>
        <Wrap>
          <Recipe>{drink.instructions}</Recipe>
          <ImgDecor src={PictureDecor} alt="Cocktails" />
        </Wrap>
      </Container>
    </Section>
  );
};

export default DrinkPage;
