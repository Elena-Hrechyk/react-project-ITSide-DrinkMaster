import { Formik, Form, useField } from 'formik';
import { AddPageSection } from './AddDrinkPage.styled';
import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';
import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { newDrink } from '../../redux/drinks/drinksOperations';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';
import { selectDrinks } from '../../redux/drinks/drinksSelectors';
import { AddImageButton } from '../../components/DrinkDescription/DrinkDescription.styled';
import plus from "../../img/svg/plus.svg";
const AddDrinkPage = () => {
  const drink = useSelector(selectDrinks);
  console.log('useSelector drink:', drink);
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  return (
    <AddPageSection>
      <Formik
        initialValues={{
          drinkThumb: '',
          drink: '',
          shortDescription: '',
          category: '',
          glass: '',
          alcoholic: '',
          description: '',
          ingredients: []    
        }}
        onSubmit={(values) => {
          console.log('Form values:', values);
          // console.log('fileRef', fileRef.current.files);
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }
          dispatch(newDrink(values));
          
          
          // console.log('formData:', formData);
          // return formData
          // resetForm()
        }}
      >
        <Form style={{ margin: 'auto' }} encType="multipart/form-data">
          <FileUpload name="drinkThumb" fileRef={fileRef} />
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
<AddImageButton style={{ backgroundColor: "white" }}>
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
<img src={plus} alt="SVG Image" width={16}  style={{ filter: 'invert(1)', fill: 'black' }} />

</AddImageButton>
  );
};
