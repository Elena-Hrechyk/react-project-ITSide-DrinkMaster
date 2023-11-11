import {
  DrinksPageImg,
  DrinksPageList,
  DrinksPageH,
  SeemoreLink,
  DrinksPageText,
  DrinksPageItem,
} from './DrinksList.styled';

export const DrinksListPage = ({ drinks }) => {
  return (
    <>
      <DrinksPageList>
        {drinks && drinks.length > 0 ? (
          drinks.map(({ _id, drink, drinkThumb }) => (
            <DrinksPageItem key={_id}>
              <DrinksPageImg src={drinkThumb} />
              <DrinksPageText>
                <DrinksPageH>{drink}</DrinksPageH>
                <SeemoreLink to={`/drinks/${_id}`}>See more</SeemoreLink>
              </DrinksPageText>
            </DrinksPageItem>
          ))
        ) : drinks.length === 0 ? (
          <h3>Sorry. There are no coctails ...</h3>
        ) : null}
      </DrinksPageList>
    </>
  );
};
