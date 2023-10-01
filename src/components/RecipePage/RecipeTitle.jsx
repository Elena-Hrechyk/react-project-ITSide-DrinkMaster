import css from "./RecipeTitle.module.css";
import { useSelector } from "react-redux";
import { selectDrinks } from "../../redux/drinks/drinksSelectors";

const RecipeTitle = () => {
    
    const title = useSelector(selectDrinks);
    const {drink} = title.data;

    return (
        <h2 className={css.title}>{drink}</h2>
    )
}

export default RecipeTitle;