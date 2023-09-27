import css from "./RecipeIngredients.module.css"
import imgTest from "../../../img/my-drinks/ingridiens/mobile/lime.png"
import imgTestSec from "../../../img/my-drinks/ingridiens/mobile/passion-fruit-juice.png"

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
    <p className={css.ingredientsMeasures}>1 cl</p>
    </div>
    </li>

    <li className={css.ingredientsItem}>
    <div className={css.ingredientsContainer}>
    <img className={css.imgIngredients} src={imgTestSec} />
    </div>
    <div className={css.ingredientsDescription}>
    <p className={css.ingredientsTitle}>Passion fruit juice</p>
    <p className={css.ingredientsMeasures}>1 cl</p>
    </div>
    </li>
    </ul>
    )
};