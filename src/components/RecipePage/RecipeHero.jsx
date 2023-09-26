import css from "./RecipeHero.module.css"
import RecipeButton from "./RecipeButton";
import RecipeTitle from "./RecipeTitle";
import img from "../../img/my-drinks/high-angle-tasty-caipirinha-with-raspberry@2x.jpg"
const RecipeHero = ({data}) => {


    return (
    <section className={css.RecipeContainer}>
    <div className={css.HeroRecipeContainer}>
    <RecipeTitle/>
    <p className={css.glass}>Highball glass / Non alcoholic</p>
    <p className={css.RecipeDescription}>Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup. It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass.</p>
    <RecipeButton/>
    </div>
    <img className={css.RecipeImg} src={img}/>
    </section>
    )
};

export default RecipeHero;