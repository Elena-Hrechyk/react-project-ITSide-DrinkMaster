import css from "./RecipeIngredients.module.css"
import { selectDrinks } from "../../../redux/drinks/drinksSelectors";
import { useSelector } from "react-redux";

export const RecipeIngredientsList = ({children}) => {
    return (
    <section>
        <p className={css.title}>Ingredients</p>
        <ul className={css.ingredientsList}>{children}</ul>
    </section>
    )
};


export const RecipeIngredientsItems = () => {
    
    const ingredients = useSelector(selectDrinks);
    const { ingredientId, title, measure, ingredientThumb} = ingredients.data;

    return (
    <li className={css.ingredientsItem} id={ingredientId} title={`${title}  ${measure ? measure : ''}`}>
    <div className={css.ingredientsContainer}>
    <img className={css.imgIngredients} src={ingredientThumb} alt={title} />
    </div>
    <div className={css.ingredientsDescription}>
    <p className={css.ingredientsTitle}>{title}</p>
    <p className={css.ingredientsMeasures}>{measure}</p>
    </div>
    </li>
    )
};