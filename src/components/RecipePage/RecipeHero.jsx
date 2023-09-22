import css from "./RecipeHero.module.css"
import RecipeButton from "./RecipeButton";
import RecipeTitle from "./RecipeTitle";
import img from "../../img/drink-master/cocktail/berry-deadly.jpg"
const RecipeHero = ({data}) => {


    return (
    <section className={css.RecipeContainer}>
    <div className={css.HeroRecipeContainer}>
    <RecipeTitle/>
    <p className={css.glass}>type of drink</p>
    <p className={css.RecipeDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi, in illo obcaecati possimus accusantium hic perferendis, provident, fugit explicabo quaerat? Culpa odio magnam maxime facere unde facilis praesentium. Distinctio.
    Consectetur esse molestias odio accusamus pariatur voluptatibus dicta quidem. Deserunt, enim quis consequuntur minus velit sit reiciendis suscipit quo ad voluptate ipsam culpa neque aspernatur autem porro doloremque quam cum?</p>
    <RecipeButton/>
    </div>
    <img className={css.RecipeImg} src={img}/>
    </section>
    )
};

export default RecipeHero;