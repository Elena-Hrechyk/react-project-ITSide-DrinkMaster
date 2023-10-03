import { Formik, Form } from 'formik';
import { AddPageSection } from './AddDrinkPage.styled';
// import { useNavigate } from "react-router-dom";

import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';

import { useDispatch, useSelector } from 'react-redux';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';

import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import { selectUserData } from '../../redux/auth/authSelectors';

import { SendFormButton } from '../../components/DrinkDescription/DrinkDescription.styled';
import * as yup from 'yup';
import { Container } from '../../components/GlobalStyled/container.styled';
import { newDrink } from '../../redux/drinks/drinksOperations';

const validationSchema = yup.object().shape({
  drink: yup.string().trim().required('Enter a drink title'),
  shortDescription: yup.string().trim().required('Enter a drink recipe'),
  category: yup.string().required('Select drink category'),
  glass: yup.string().required('Select drink glass'),
  description: yup.string().trim().required('Tell you drink description'),
  ingredients: yup
    .array()
    .length(1, 'At least one ingredient must be added')
    .required(),
  alcoholic: yup.string().required('Select an alcohol type of drink'),
});

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { _id } = useSelector(selectUserData);
  const onSubmitForm = (values, action) => {
    values.owner = _id;
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

    dispatch(newDrink(formData));

    action.resetForm();
    // if (response.success) {
    //   navigate("/drinks/own", { replace: true });
    // }
  };

  return (
    <>
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
            {({ setFieldValue, errors, touched }) => (
              <Form style={{ margin: 'auto' }} encType="multipart/form-data">
                <DrinkDescription
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />

                <DrinkIngredients errors={errors} touched={touched} />
                <RecipePreparation errors={errors} touched={touched} />
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
