import { Formik, Form } from 'formik';
import { AddPageSection } from './AddDrinkPage.styled';

import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import {
  // fetchDrinksPopular,
  // newDrink,
} from '../../redux/drinks/drinksOperations';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';
// import { selectIsLoading } from '../../redux/drinks/drinksSelectors';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import { selectUserData } from '../../redux/auth/authSelectors';
// import { Loader } from '../../components/Loader/Loader';
import { SendFormButton } from '../../components/DrinkDescription/DrinkDescription.styled';
// import {StartSection} from"../../pages/StartPage/StartPage.styled"
import * as yup from 'yup';

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
  // const dispatch = useDispatch();
  // const user = useSelector(selectUserData);

  // const isLoading = useSelector(selectIsLoading);
  const { _id } = useSelector(selectUserData);
  const onSubmitForm = (values) => {
    values.owner = _id;
    // values.drinkThumb = drinkThumbFile;
    console.log('values:', values);
    const formData = new FormData();

    for (let value in values) {
      formData.append(value, values[value]);
    }
    // formData.append('drinkThumb', values.drinkThumb)
    // formData.append('drink', values.drink)
    // formData.append('description', values.description)
    // formData.append('category', values.category)
    // formData.append('alcoholic', values.alcoholic)
    // formData.append('glass', values.glass)
    // formData.append('_id', values.owner)
    // formData.append('shortDescription', values.shortDescription)

    // console.log("formData",formData.get("drink"))
    // console.log('formData', typeof(formData.get('drinkThumb')));
    //   for (var pair of formData.entries()) {
    //     console.log(typeof(pair[0])+ ', ' + typeof(pair[1]));
    // }
    // dispatch(newDrink(formData));
  };
  // const drink = useSelector(selectDrinks);
  // console.log(user.id);
  // const fileRef = useRef(null);

  // let drinkThumbFile;
  // const file = (file) => {
  //   console.log(file);
  //   drinkThumbFile = file;
  //   console.log("drinkThumbFile", drinkThumbFile);
  // };

  return (
    <>
      {/* {isLoading ? (
            <Loader />
        ) : ( */}
      {/* <StartSection> */}
      <AddPageSection>
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
                // fileValue={file}
                fieldValueFormik={setFieldValue}
              />
              <DrinkIngredients />
              <RecipePreparation />
              <SendFormButton type="submit">Add</SendFormButton>
            </Form>
          )}
        </Formik>
        {/* FolofUs */}
        <PopularDrinks />
      </AddPageSection>
      {/* </StartSection> */}
    </>
  );
};

export default AddDrinkPage;
