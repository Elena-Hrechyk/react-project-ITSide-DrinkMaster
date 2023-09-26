import { Formik, Form } from 'formik';

import { AddPageSection } from './AddDrinkPage.styled';
import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';
// import DrinkDescription from './DrinkDescription/DrinkDescription';
import DrinkIngredients from './DrinkIngredients/DrinkIngredients';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const AddDrinkPage = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     title: '',
  //     aboutRecipe: '',
  //     category: '',
  //     alcoholic: '',
  //     preparation: ''
  //   },

  //   onSubmit: (values) => {
  //     console.log('Form values:', values);
  //   },
  // });

  // const handleFieldChange = (fieldName, value) => {
  //   formik.setFieldValue(fieldName, value); // Use the correct field name here
  // };

  // const handleCategoryChange = (value) => {
  //   formik.setFieldValue('category', value);
  // };

  return (
    <AddPageSection>
      <Formik
        initialValues={{
          title: '',
          aboutRecipe: '',
          category: '',
          alcoholic: '',
          preparation: '',
          ingredients: [],
        }}
        onSubmit={(values) => {
          console.log('Form values:', values);
        }}
      >
      <Form style={{ margin: 'auto' }} >
        {/* <DrinkDescription
          // category={handleCategoryChange}
          // onFieldChange={handleFieldChange}
          // formik={formik}
        /> */}
        <DrinkIngredients/>
        <RecipePreparation />
        <SignUpButton type="submit">Add</SignUpButton>
        </Form>
        </Formik>
    </AddPageSection>
  );
};

export default AddDrinkPage;




// import { useFormik } from 'formik';

// import { AddPageSection } from './AddDrinkPage.styled';

// import { SignUpButton } from '../../components/SignUpPageComponents/SignUpButton';
// import DrinkDescription from './DrinkDescription/DrinkDescription';
// import DrinkIngredients from './DrinkIngredients/DrinkIngredients';
// import RecipePreparation from './RecipePreparation/RecipePreparation';

// const AddDrinkPage = () => {
//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       aboutRecipe: '',
//       category: '',
//       alcoholic: '',
//     },

//     onSubmit: (values) => {
//       console.log('Form values:', values);
//     },
//   });

//   const handleFieldChange = (fieldName, value) => {
//     formik.setFieldValue(fieldName, value); // Use the correct field name here
//   };

//   const handleCategoryChange = (value) => {
//     formik.setFieldValue('category', value);
//   };

//   return (
//     <AddPageSection>
//       <form style={{ margin: 'auto' }} onSubmit={formik.handleSubmit}>
//         <DrinkDescription
//           category={handleCategoryChange}
//           onFieldChange={handleFieldChange}
//         />
//         <DrinkIngredients />
//         <RecipePreparation />
//         {/* <button type="submit">Add</button> */}
//         <SignUpButton type="submit">Add</SignUpButton>
//       </form>
//     </AddPageSection>
//   );
// };

// export default AddDrinkPage;
