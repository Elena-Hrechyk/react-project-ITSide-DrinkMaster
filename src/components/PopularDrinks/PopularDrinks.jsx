// import { useSelector } from 'react-redux';
// import { selectPopular } from '../../redux/drinks/drinksSelectors';
import {
  DescriptionContainer,
  DrinksContainer,
  PopularDrinkCont,
//   Text,
} from './PopularDrinks.styled';

const PopularDrinks = () => {
//   const popularData = useSelector(selectPopular);
    // const popular = popularData[0].data;
    const ddd = [
    {favorites: Array(0), popular: 0, _id: '639b6de9ff77d221f190c556', drink: 'Pysch Vitamin Light', drinkThumb: 'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Apello.jpg'},
    
    {favorites: Array(0), popular: 0, _id: '639b6de9ff77d221f190c559', drink: 'Pineapple Gingerale Smoothie', drinkThumb: 'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Apello.jpg'}
    ]
    
//   console.log("popular",popular)
  return (
    <DrinksContainer>
          <h4>PopularDrinks</h4>
          <ul>
      {ddd.map((item) => {
        return (
          <PopularDrinkCont key={item._id}>
            <img src={item.drinkThumb} alt="SVG Image" width={90} height={90} />

            <DescriptionContainer>
              <h4>{item.drink}</h4>
              {/* <Text style={{}}>{item.shortDescription}</Text> */}
            </DescriptionContainer>
          </PopularDrinkCont>
        );
      })}
          </ul>
    </DrinksContainer>
  );
};

export default PopularDrinks;
