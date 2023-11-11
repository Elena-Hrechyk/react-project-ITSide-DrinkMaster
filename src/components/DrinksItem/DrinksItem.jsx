import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';

import {
  Image,
  CocktailType,
  CocktailName,
  CocktailRecipe,
  Wraper,
  ButtonSeeMore,
  ButtonDelete,
} from './DrinksItem.styled';

const DrinksItem = ({ item, deleteDrink }) => {
  const { _id, drinkThumb, drink, alcoholic, description } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Image src={drinkThumb} alt={drink} />
      <CocktailName>{drink}</CocktailName>
      <CocktailType>{alcoholic}</CocktailType>
      <CocktailRecipe>{description}</CocktailRecipe>
      <Wraper>
        <ButtonSeeMore
          onClick={() => navigate(`/drinks/${_id}`, { replace: true })}
        >
          See more
        </ButtonSeeMore>
        <ButtonDelete onClick={() => dispatch(deleteDrink(_id))}>
          <RiDeleteBinLine />
        </ButtonDelete>
      </Wraper>
    </>
  );
};

export default DrinksItem;
