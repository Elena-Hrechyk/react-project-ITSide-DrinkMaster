import css from "./RecipeIngredients.module.css"
import imgTest from "../../../img/drink-master/cocktail/casino-royale.jpg"

export const RecipeIngredientsList = () => {
    return (
    <section>
        <p className={css.title}>Ingredients</p>
    </section>
    )
};


export const RecipeIngredientsItems = () => {
    return (
    <ul className={css.ingredientsList}>
    <li className={css.ingredientsItem}>
    <div className={css.ingredientsContainer}>
    <img className={css.imgIngredients} src={imgTest} />
    </div>
    <div className={css.ingredientsDescription}>
    <p className={css.ingredientsTitle}>Lime</p>
    <p className={css.ingredientsMeasures}>30 pcs</p>
    </div>
    </li>
    </ul>
    )
};