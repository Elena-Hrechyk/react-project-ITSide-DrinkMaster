import css from "./RecipeHero.module.css"
import RecipeButton from "./RecipeButton";
import RecipeTitle from "./RecipeTitle";
import { useSelector } from "react-redux";
import { selectDrinks } from "../../redux/drinks/drinksSelectors";

const RecipeHero = () => {

    const drinks = useSelector(selectDrinks);
    const  { glass, drinkThumb, shortDescription, alcoholic, drink} = drinks.data;

    return (
    <section className={css.RecipeContainer}>
    <div className={css.HeroRecipeContainer}>
    <RecipeTitle title={drink}/>
    <p className={css.glass}>{glass}/{alcoholic}</p>
    <p className={css.RecipeDescription}>{shortDescription}</p>
    <RecipeButton/>
    </div>
    <img className={css.RecipeImg} src={drinkThumb} alt={drink} title={drink}/>
    </section>
    )
};

export default RecipeHero;