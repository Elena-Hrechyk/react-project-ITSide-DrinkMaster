import css from './RecipePreparation.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectDrinks } from '../../../redux/drinks/drinksSelectors';

const RecipePreparation = () => {
  const preparation = useSelector(selectDrinks);
    const { description, drinkThumb, drink, instructions} = preparation.data;

    const instructionSentence = instructions.split(/(?<=[.!?])\s+/).filter(Boolean);

    return (
    <section>
    <h3 className={css.title}>Recipe Preparation</h3>
    <div className={css.RecipeContainer}>
    <img className={css.PreparationImg} src={drinkThumb} alt={drink} title={drink}/>
    <div>
    <p className={css.prepDescription}>{description}</p>
    <ul>
    {instructionSentence.map((instructions, index) => (
    <li key={index}>
    <ol>{instructions.trim()}</ol>
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