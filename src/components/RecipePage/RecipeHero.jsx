import css from './RecipeHero.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDrinkById } from '../../redux/drinks/drinksOperations';
// import RecipeButton from './RecipeButton';
import RecipeTitle from './RecipeTitle';
import { selectDrinkById } from '../../redux/drinks/drinksSelectors';

const RecipeHero = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
    const drink = useSelector((state) => selectDrinkById(state, drinkId));
    console.log(drink);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  //   const drinks = useSelector(selectDrinks);
  //   const { glass, drinkThumb, shortDescription, alcoholic, drink } = drinkOne;

  return (
    <section className={css.RecipeContainer}>
      <div className={css.HeroRecipeContainer}>
        <RecipeTitle title={drink.drink} />
        <p className={css.glass}>
          {drink.glass}/{drink.alcoholic}
        </p>
        <p className={css.RecipeDescription}>{drink.shortDescription}</p>
        {/* <RecipeButton /> */}
      </div>
      <img
        className={css.RecipeImg}
        src={drink.drinkThumb}
        alt={drink.drink}
        title={drink.drink}
      />
    </section>
  );
};

export default RecipeHero;
