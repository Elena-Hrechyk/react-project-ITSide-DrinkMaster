import { useSelector } from 'react-redux';
import css from "./RecipeButton.module.css"
import { selectDrinks } from "../../redux/drinks/drinksSelectors";

const RecipeButton = () => {
    const userId = useSelector(selectDrinks);
    const {_id} = userId.data;
    const isFavorite = users.includes(userId);

    const favoriteButtonClick = () => {
        dispatch(_id);
      };

    return (
        <button className={css.button} onClick={favoriteButtonClick}>
            {isFavorite
                ? 'Remove from favorite recipe'
                : 'Add to favorite recipe'}
        </button>
    );
}

export default RecipeButton;