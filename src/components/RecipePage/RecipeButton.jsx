import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteArr } from '../../redux/drinks/drinksSelectors';
import {
  addFavoriteDrink,
  removeFavoriteDrink,
} from '../../redux/drinks/drinksOperations';
import { Button } from './RecipeButton.styled';
import { useEffect, useState } from 'react';

export const ButtonAddRemove = ({ id }) => {
  const [searchDrink, setSearchDrink] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteArr);

  const favoritDrink = { _id: id };

  //   const findFavoriteDrink = (id) => {
  //     if (favoriteList.length) {
  //       const searchDrink = favoriteList.find((item) => console.log(item === id));
  //       setSearchDrink(searchDrink);
  //       return searchDrink;
  //     }
  //   };
  useEffect(() => {
    if (favoriteList.length) {
      const searchDrink = favoriteList.find((item) => console.log(item === id));
      setSearchDrink(searchDrink);
      return searchDrink;
    }
  }, [id, searchDrink, favoriteList]);

  console.log('searchDrink', searchDrink);

  return (
    <>
      {!searchDrink ? (
        <>
          <Button
            type="button"
            onClick={() => dispatch(addFavoriteDrink(favoritDrink))}
          >
            Add to favorite drinks
          </Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            onClick={() => dispatch(removeFavoriteDrink(id))}
          >
            Remove from favorite drinks
          </Button>
        </>
      )}
    </>
  );
};

// import { useSelector } from 'react-redux';
// import css from "./RecipeButton.module.css"
// import { selectDrinks } from "../../redux/drinks/drinksSelectors";

// const RecipeButton = () => {
//     const userId = useSelector(selectDrinks);
//     const {_id} = userId.data;
//     const isFavorite = users.includes(userId);

//     const favoriteButtonClick = () => {
//         dispatch(_id);
//       };

//     return (
//         <button className={css.button} onClick={favoriteButtonClick}>
//             {isFavorite
//                 ? 'Remove from favorite recipe'
//                 : 'Add to favorite recipe'}
//         </button>
//     );
// }

// export default RecipeButton;
