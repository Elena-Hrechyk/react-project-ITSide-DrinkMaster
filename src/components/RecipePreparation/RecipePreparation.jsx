import { Field } from 'formik';
import { DoneMessage } from '../SignInPageComponents/SignInForm.styled';
import {
  Title,
  TextArea,
  PreparationContainer,
} from './RecipePreparation.styled';

const RecipePreparation = ({ errors, touched }) => {
  return (
    <>
      <PreparationContainer>
        <Title>Recipe Preparation</Title>
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
