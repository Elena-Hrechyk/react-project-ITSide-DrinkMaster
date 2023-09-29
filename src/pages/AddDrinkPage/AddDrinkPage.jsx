import { Formik, Form } from 'formik';
import { AddPageSection } from './AddDrinkPage.styled';
import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';
import DrinkDescription from '../../components/DrinkDescription/DrinkDescription';

import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchDrinksPopular, newDrink } from '../../redux/drinks/drinksOperations';
import DrinkIngredients from '../../components/DrinkIngredients/DrinkIngredients';
import { selectDrinks } from '../../redux/drinks/drinksSelectors';
// import { AddImageButton } from '../../components/DrinkDescription/DrinkDescription.styled';
// import plus from "../../img/svg/plus.svg";
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import { selectUserData } from '../../redux/auth/authSelectors';
const AddDrinkPage = () => {
  
  

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchDrinksPopular());
    }, []);
  
  const drink = useSelector(selectDrinks);
  
  const user = useSelector(selectUserData);
  console.log(user.id)


  const fileRef = useRef(null);
  const { _id } = useSelector(selectUserData);

  // const [popular, setPopular] = useState([])
    // const popular = (fetchDrinksPopular()); // Call the function to fetch popular drinks
  // console.log(popular)


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
          values.owner= _id
         
          // console.log('fileRef', fileRef.current.files);
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }
          console.log("formData", formData)
          dispatch(newDrink(values));
          console.log('state drink:', drink);
          
          // console.log('formData:', formData);
          // return formData
          // resetForm()
        }}
      >
        {/* encType="multipart/form-data" - дает возможность отправлять в форме текст и файлы */}
        <Form style={{ margin: 'auto' }} encType="multipart/form-data">
          {/* <FileUpload name="drinkThumb" fileRef={fileRef} /> */}

          <DrinkDescription fileRef={fileRef} />
          <DrinkIngredients />
          <RecipePreparation />
          <SignUpButton type="submit" width={"107px"} value={"Add"}>Add</SignUpButton>
          {/* FolofUs */}
          <PopularDrinks/>
        </Form>
      </Formik>
    </AddPageSection>
  );
};

export default AddDrinkPage;

// const FileUpload = ({ fileRef, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
// <AddImageButton style={{ backgroundColor: "white" }}>
//   <input
//         ref={fileRef}
//         multiple={true}
//         type="file"
//         {...field}
//       />
//       {meta.touched && meta.error ? (
//         <div style={{ color: 'red' }}>{meta.error}</div>
//       ) : null}
// <img src={plus} alt="SVG Image" width={16}  style={{ filter: 'invert(1)', fill: 'black' }} />

// </AddImageButton>
//   );
// };
