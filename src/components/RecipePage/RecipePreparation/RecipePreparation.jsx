import css from './RecipePreparation.module.css';
// import testIMG from '../../../img/my-drinks/recipe-preparation@2x.jpg'
import React from 'react';
import PropTypes from 'prop-types';

const RecipePreparation = ({data}) => {

    const { description, drinkThumb, drink, instructions} = data;

    const instructionSentence = instructions.split(/(?<=[.!?])\s+/).filter(Boolean);

    return (
    <section>
    <h3 className={css.title}>Recipe Preparation</h3>
    <div className={css.RecipeContainer}>
    <img className={css.PreparationImg} src={drinkThumb} alt={drink} title={drink}/>
    <div>
    <p className={css.prepDescription}>{description}</p>
    <ul>
    {instructionSentence.map((sentence, index) => (
    <li key={index}>
    <ol>{sentence.trim()}</ol>
    </li>
    ))}
    </ul>
    </div>
    </div>
    </section>
    )
};


RecipePreparation.propTypes = {
    data: PropTypes.shape({
    instructions: PropTypes.string,
    drink: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string,
    }),
  };

export default RecipePreparation;