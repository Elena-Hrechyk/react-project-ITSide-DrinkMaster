import { useSelector } from 'react-redux';
import css from "./RecipeButton.module.css"

const RecipeButton = ({data}) => {
    const {_id} = data
    const userId = useSelector(state => state._id);
    const isFavorite = recipe?.users.includes(userId);

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