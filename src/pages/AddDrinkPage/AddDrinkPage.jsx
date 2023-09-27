import { Formik, Form, useField } from 'formik';
import { AddPageSection } from './AddDrinkPage.styled';
import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';
import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { newDrink } from '../../redux/drinks/drinksOperations';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  return (
    <AddPageSection>
      <Formik
        initialValues={{
          photo: '',
          title: '',
          aboutRecipe: '',
          category: '',
          glass: '',
          alcoholic: '',
          preparation: '',
          ingredients: [],
        }}
        onSubmit={(values) => {
          console.log('Form values:', values);
          console.log('all selected files', fileRef.current.files);
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }
          dispatch(newDrink(values));

          console.log('formData:', formData);
          // return formData
          // resetForm()
        }}
      >
        <Form style={{ margin: 'auto' }} encType="multipart/form-data">
          <FileUpload name="photo" fileRef={fileRef} />
          <DrinkDescription />
          <DrinkIngredients />
          <RecipePreparation />
          <SignUpButton type="submit">Add</SignUpButton>
        </Form>
      </Formik>
    </AddPageSection>
  );
};

export default AddDrinkPage;

const FileUpload = ({ fileRef, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {/* <label htmlFor="files">Choose files</label>{" "} */}
      <input
        style={{ backgroundColor: 'blue' }}
        ref={fileRef}
        multiple={true}
        type="file"
        {...field}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }}>{meta.error}</div>
      ) : null}
    </div>
  );
};
