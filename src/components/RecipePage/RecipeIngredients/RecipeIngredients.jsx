import css from "./RecipeIngredients.module.css"
// import imgTest from "../../../img/my-drinks/ingridiens/mobile/lime.png"
// import imgTestSec from "../../../img/my-drinks/ingridiens/mobile/passion-fruit-juice.png"

export const RecipeIngredientsList = ({children}) => {
    return (
    <section>
        <p className={css.title}>Ingredients</p>
        <ul className={css.ingredientsList}>{children}</ul>
    </section>
    )
};


export const RecipeIngredientsItems = ({data}) => {

    const { ingredients } = data;

    return (
    <li className={css.ingredientsItem} id={ingredients.ingredientId} title={`${ingredients.title}  ${ingredients.measure ? ingredients.measure : ''}`}>
    <div className={css.ingredientsContainer}>
    <img className={css.imgIngredients} src={ingredients.ingredientThumb} alt={ingredients.title} />
    </div>
    <div className={css.ingredientsDescription}>
    <p className={css.ingredientsTitle}>{ingredients.title}</p>
    <p className={css.ingredientsMeasures}>{ingredients.measure}</p>
    </div>
    </li>
    )
};