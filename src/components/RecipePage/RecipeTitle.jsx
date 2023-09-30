import css from "./RecipeTitle.module.css";

const RecipeTitle = ({drink}) => {
    return (
        <h2 className={css.title}>{drink}</h2>
    )
}

export default RecipeTitle;