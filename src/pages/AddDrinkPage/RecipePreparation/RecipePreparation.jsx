import { useState } from 'react';
import { TextArea, PreparationContainer } from './RecipePreparation.styled';
// import { Input, PreparationContainer } from './RecipePreparation';

const RecipePreparation = () => {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue)
  return (
    <PreparationContainer>
      <h1>Recipe Preparation</h1>
      <TextArea type="text" placeholder='Enter the recipe'
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}/>
    </PreparationContainer>
  );
};

export default RecipePreparation;
