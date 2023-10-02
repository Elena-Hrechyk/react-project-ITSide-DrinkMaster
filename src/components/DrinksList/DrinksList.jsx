import {
  DrinksPageImg,
  DrinksPageList,
  DrinksPageH,
  DrinksPageLink,
  DrinksPageText,
  DrinksPageItem,
} from './DrinksList.styled';

export const DrinksListPage = ({ drinks }) => {
  return (
    <>
      <DrinksPageList>
        {drinks.length > 0 ? (
          drinks.map(({ _id, drink, drinkThumb }) => (
            <DrinksPageItem key={_id}>
              <DrinksPageImg src={drinkThumb} />
              <DrinksPageText>
                <DrinksPageH>{drink}</DrinksPageH>
                <DrinksPageLink to={`/drinks/${_id}`}>See more</DrinksPageLink>
              </DrinksPageText>
            </DrinksPageItem>
          ))
        ) : drinks.length === 0 ? (
          <p>Sorry. There are no coctails ...</p>
        ) : null}
      </DrinksPageList>
    </>
  );
};
