import { Formik, Form } from 'formik';
import {
  AddPageSection,
  Title,
  Wrap,
  ToastStyled,
  SendFormButton,
} from './AddDrinkPage.styled';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';

import { useDispatch, useSelector } from 'react-redux';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';

import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import { selectUserData } from '../../redux/auth/authSelectors';
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
    .of(
      yup.object().shape({
        ingredient: yup.string().required('Select one of ingridient name'),
        measure: yup.string().required('Required'),
      }),
    )
    .required(),
  alcoholic: yup.string().required('Select an alcohol type of drink'),
});

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(newDrink(formData))
      .then(() => {
        toast.success('New coctail was created!', {
          duration: 4000,
          position: 'top-center',
          icon: '👏',
          ...ToastStyled,
        });
        navigate('/my');
      })
      .catch((err) => {
        console.log(err);
      });
    action.resetForm();
  };

  return (
    <>
      <AddPageSection>
        <Container>
          <Title style={{ display: 'flex', flex: 'start' }}>Add drink</Title>
          <Wrap>
            <Formik
              initialValues={{
                drinkThumb: '',
                drink: '',
                shortDescription: '',
                category: '',
                glass: '',
                alcoholic: '',
                description: '',
                ingredients: [{ ingredient: '', measure: '' }],
                owner: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmitForm}
            >
              {({ setFieldValue, errors, touched, values }) => (
                <Form
                  style={{ margin: 'auto' }}
                  encType="multipart/form-data"
                  autoComplete="off" //убираем автозаполнение в инпутах
                >
                  <DrinkDescription
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                  />

                  <DrinkIngredients
                    errors={errors}
                    touched={touched}
                    values={values}
                  />
                  <RecipePreparation errors={errors} touched={touched} />
                  <SendFormButton type="submit">Add</SendFormButton>
                </Form>
              )}
            </Formik>
            <PopularDrinks />
          </Wrap>
        </Container>
      </AddPageSection>
    </>
  );
};

export default AddDrinkPage;
