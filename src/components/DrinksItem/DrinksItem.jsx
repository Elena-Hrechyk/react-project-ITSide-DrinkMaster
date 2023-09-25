import Coctaile from "../../img/drink-master/cocktail/berry-deadly.jpg"
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

const DrinksItem = () => {
  return (
    <Wrap>
      <ImageWrap><Image src={Coctaile} alt="" /></ImageWrap>
      <СocktailName>Pornstar Martini</СocktailName>
      <СocktailType>Alcoholic</СocktailType>
      <СocktailRecipe>
        The porn star martini is a passion-fruit-flavoured cocktail made with
        vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It
        is traditionally accompanied by a chilled shot glass of prosecco.{' '}
      </СocktailRecipe>
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
