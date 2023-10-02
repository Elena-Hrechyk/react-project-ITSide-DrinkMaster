import { Formik, Form } from 'formik';
import { AddPageSection } from './AddDrinkPage.styled';

import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newDrink } from '../../redux/drinks/drinksOperations';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';
// import { selectIsLoading } from '../../redux/drinks/drinksSelectors';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import { selectUserData } from '../../redux/auth/authSelectors';
// import { Loader } from '../../components/Loader/Loader';
import { SendFormButton } from '../../components/DrinkDescription/DrinkDescription.styled';
// import {StartSection} from"../../pages/StartPage/StartPage.styled"
import * as yup from 'yup';
import { Container } from '../../components/GlobalStyled/container.styled';

const validationSchema = yup.object().shape({
  // drink: yup.string().trim().required('Enter a drink title'),
  // shortDescription: yup.string().trim().required('Enter a drink recipe'),
  // category: yup.string().required('Select drink category'),
  // glass: yup.string().required('Select drink glass'),
  // description: yup.string().trim().required('Tell you drink description'),
  // ingredients: yup.array().length(1, 'At least one ingredient must be added'),
  // .required(),
});

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  // const user = useSelector(selectUserData);

  // const isLoading = useSelector(selectIsLoading);

  let drinkThumbFile;
  const file = (file) => {
    drinkThumbFile = file;
  };

  const { _id } = useSelector(selectUserData);
  const onSubmitForm = (values) => {
    values.owner = _id;
    values.drinkThumb = drinkThumbFile;
    const formData = new FormData();

    for (let value in values) {
      if (value === 'ingredients') {
        formData.append(value, JSON.stringify(values[value]));
      } else {
        formData.append(value, values[value]);
      }
    }

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
      // Вывод имени и значения каждого поля в консоль
    }
    // console.log('formData', formData);

    dispatch(newDrink(formData));
  };

  return (
    <>
      {/* {isLoading ? (
            <Loader />
        ) : ( */}

      <AddPageSection>
        <Container>
          <Formik
            initialValues={{
              drinkThumb: null,
              drink: '',
              shortDescription: '',
              category: '',
              glass: '',
              alcoholic: '',
              description: '',
              ingredients: [],
              owner: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitForm}
          >
            {({ setFieldValue }) => (
              <Form style={{ margin: 'auto' }} encType="multipart/form-data">
                <DrinkDescription
                  fileValue={file}
                  // setValue={setFieldValue}
                />
                <DrinkIngredients />
                <RecipePreparation />
                <SendFormButton type="submit">Add</SendFormButton>
              </Form>
            )}
          </Formik>
          <PopularDrinks />
        </Container>
      </AddPageSection>
    </>
  );
};

export default AddDrinkPage;
