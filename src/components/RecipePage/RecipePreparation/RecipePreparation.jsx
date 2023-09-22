import css from './RecipePreparation.module.css';
import testIMG from '../../../img/my-drinks/recipe-preparation@2x.jpg'

const RecipePreparation = () => {
    return (
    <section>
    <h3 className={css.title}>Recipe Preparation</h3>
    <div className={css.RecipeContainer}>
    <img className={css.PreparationImg} src={testIMG}/>
    <div>
    <p className={css.prepDescription}>Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup.
     Coloque todos los ingredientes en el vaso de la licuadora, tape y mezcle a velocidad media hasta que estén bien mezclados. Vierta en un vaso alto, 2 medianos o 3 pequeños y beba.Alle Zutaten in den Mixer geben - abdecken und bei mittlerer Geschwindigkeit schaumig schlagen, bis sie gut vermischt sind. In ein großes, 2 mittlere oder 3 kleine Gläser füllen und geniessen.</p>
     <p className={css.prepDescription}>Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup.
     It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass.
     It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass. </p>
     <p className={css.prepDescription}>Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup.
     It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass.
     It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass. </p>
    </div>
    </div>
    </section>
    )
};

export default RecipePreparation;