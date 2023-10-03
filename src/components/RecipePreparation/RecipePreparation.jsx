import { Field } from 'formik';
import { DoneMessage } from '../SignInPageComponents/SignInForm.styled';
import { TextArea, PreparationContainer } from './RecipePreparation.styled';

const RecipePreparation = ({errors, touched}) => {
  
  return (<>
    <PreparationContainer>
      <h1>Recipe Preparation</h1>
      <Field
        as={TextArea}
        name="description"
        placeholder="Enter the recipe"
        className="text-area"
      />
      {touched.description && errors.description ? (
      <DoneMessage>{errors.description}</DoneMessage>
   ) : null}  
    </PreparationContainer>
   
    </>
  );
};

export default RecipePreparation;
