import css from "./RecipeHero.module.css"
import RecipeButton from "./RecipeButton";
import RecipeTitle from "./RecipeTitle";
// import img from "../../img/my-drinks/high-angle-tasty-caipirinha-with-raspberry@2x.jpg"
const RecipeHero = ({data}) => {

    const { glass, drinkThumb, shortDescription, alcoholic, drink, _id} = data;

    return (
    <section className={css.RecipeContainer}>
    <div className={css.HeroRecipeContainer}>
    <RecipeTitle title={drink}/>
    <p className={css.glass}>{glass}/{alcoholic}</p>
    <p className={css.RecipeDescription}>{shortDescription}</p>
    <RecipeButton id={_id}/>
    </div>
    <img className={css.RecipeImg} src={drinkThumb} alt={drink} title={drink}/>
    </section>
    )
};

export default RecipeHero;