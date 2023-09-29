
import { DescriptionContainer, DrinksContainer, PopularDrinkCont, Text,  } from './PopularDrinks.styled';

const PopularDrinks = () => {

  return (
    <DrinksContainer>
      <h4>PopularDrinks</h4>
          
          <PopularDrinkCont>
              <img src={"https://neonsignsusainc.com/wp-content/uploads/2022/05/COCKTAILS_MARTINI_GLASS_LOGO_BEER_BAR_REAL_NEON_SIGN_XMAS_GIFT_FAST_SHIP_fec6f388-b2da-4e13-bb2c-4a12787f490c-510x510.jpg"} alt="SVG Image" width={90} height={90} />
              
              <DescriptionContainer>
                  <h4>Gin Lemon</h4>
                  <Text style={{}}>A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.</Text>
              </DescriptionContainer>

          </PopularDrinkCont>
         
          
    </DrinksContainer>
  );
};

export default PopularDrinks;
