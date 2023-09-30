// import Coctaile from "../../img/drink-master/cocktail/berry-deadly.jpg"
import {RiDeleteBinLine} from "react-icons/ri";
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

const DrinksItem = ({item}) => {
  const { drinkThumb, drink, alcoholic, description } = item;
  // const thumb = "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167155/cocktails-v1/drinks/Ipamena.jpg"
  return (
    <Wrap>
      <ImageWrap><Image src={drinkThumb} alt="image" /></ImageWrap>
      <СocktailName>{ drink }</СocktailName>
      <СocktailType>{alcoholic}</СocktailType>
      <СocktailRecipe>{description}</СocktailRecipe>
      <Wraper>
        <ButtonSeeMore>See more</ButtonSeeMore>
        <ButtonDelete>
          <RiDeleteBinLine />
        </ButtonDelete>
      </Wraper>
    </Wrap>
  );
};

export default DrinksItem;
