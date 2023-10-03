// import Coctaile from "../../img/drink-master/cocktail/berry-deadly.jpg"
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from "react-icons/ri";

import {
  Image,
  СocktailName,
  СocktailType,
  СocktailRecipe,
  Wraper,
  ButtonSeeMore,
  ButtonDelete,
  Wrap,
  ImageWrap,
} from './DrinksItem.styled';

const DrinksItem = ({item, deleteCard}) => {
  const { _id, drinkThumb, drink, alcoholic, description } = item;
  const dispatch = useDispatch();
  // const thumb = "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167155/cocktails-v1/drinks/Ipamena.jpg"
  return (
    <Wrap>
      <ImageWrap><Image src={drinkThumb} alt="image" /></ImageWrap>
      <СocktailName>{ drink }</СocktailName>
      <СocktailType>{alcoholic}</СocktailType>
      <СocktailRecipe>{description}</СocktailRecipe>
      <Wraper>
        <ButtonSeeMore to={`/drinks/${_id}`}>See more</ButtonSeeMore>
        <ButtonDelete onClick={() => dispatch(deleteCard(_id))}>
          <RiDeleteBinLine />
        </ButtonDelete>
      </Wraper>
    </Wrap>
  );
};

export default DrinksItem;
