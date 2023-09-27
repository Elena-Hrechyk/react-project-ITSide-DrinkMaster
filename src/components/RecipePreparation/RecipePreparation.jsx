import { Field } from 'formik';
import { TextArea, PreparationContainer } from './RecipePreparation.styled';

const RecipePreparation = () => {

  return (
    <PreparationContainer>
      <h1>Recipe Preparation</h1>
      <Field
        as={TextArea}
        name="description"
        placeholder="Enter the recipe"
        className="text-area"
      />
    </PreparationContainer>
  );
};

export default RecipePreparation;
