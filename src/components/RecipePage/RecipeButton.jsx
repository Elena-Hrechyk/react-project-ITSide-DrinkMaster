import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { selectFavoriteDrinks } from '../../redux/auth/authSelectors';
import {
  addFavoriteDrink,
  removeFavoriteDrink,
} from '../../redux/drinks/drinksOperations';
import { Button } from './RecipeButton.styled';

export const ButtonAddRemove = ({ id, title }) => {
  const [searchDrink, setSearchDrink] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteDrinks);

  const favoriteDrink = { id: id };

  const notifyAdd = () =>
    toast.success(`Great! ${title} is your favorite drink!`, {
      duration: 4000,
      position: 'top-center',
      icon: '👏',
      style: {
        fontSize: '18px',
        border: '1px solid #F3F3F3',
        borderRadius: '10px',
        background: '#1f263f',
        color: '#F3F3F3',
      },
    });

  const notifyRemove = () =>
    toast.success(`${title} is not your favorite drink anymore!`, {
      duration: 4000,
      position: 'top-center',
      style: {
        fontSize: '18px',
        border: '1px solid #F3F3F3',
        borderRadius: '10px',
        background: '#1f263f',
        color: '#F3F3F3',
      },
      iconTheme: {
        primary: '#7a2371',
        secondary: '#F3F3F3',
      },
    });

  useEffect(() => {
    if (favoriteList.length) {
      favoriteList.find((item) => {
        if (item === id) {
          return setSearchDrink(item === id);
        }
        return setSearchDrink(false);
      });
    }
  }, [favoriteList, searchDrink, id]);

  return (
    <>
      {!searchDrink ? (
        <>
          <Button
            type="button"
            onClick={() =>
              dispatch(addFavoriteDrink(favoriteDrink)).then(() => notifyAdd())
            }
          >
            Add to favorite drinks
          </Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            onClick={() =>
              dispatch(removeFavoriteDrink(id)).then(() => notifyRemove())
            }
          >
            Remove from favorite drinks
          </Button>
        </>
      )}
    </>
  );
};
