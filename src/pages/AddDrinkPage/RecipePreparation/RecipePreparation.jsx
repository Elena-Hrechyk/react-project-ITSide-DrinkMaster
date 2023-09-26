// import { Field } from 'formik';
// import { useState } from 'react';

import { Field } from 'formik';
// import { TextArea, PreparationContainer } from './RecipePreparation.styled';
// // import { Input, PreparationContainer } from './RecipePreparation';

// const RecipePreparation = () => {
//   const [inputValue, setInputValue] = useState('');
//   console.log(inputValue)
//   const handleInputChange = (e) => {
//     // setInputValue(e.target.value);
//     formik.setFieldValue('preparation', e.target.value); // Update Formik values
//   };
//   return (
   
//     <PreparationContainer>
//         <h1>Recipe Preparation</h1>
//          <Field
//     type="textarea"
//     name="preparation"
//     component="textarea"
//     placeholder="Enter the recipe"
//     className="text-area"
//     />
//       {/* <TextArea type="text" placeholder='Enter the recipe'
//                 // value={inputValue}
//         onChange={
//           handleInputChange
//           // (e) => { setInputValue(e.target.value) }
//         } /> */}
//       </PreparationContainer>
   
//   );
// };

// export default RecipePreparation;

import React from 'react';
import { useField } from 'formik';
import { TextArea, PreparationContainer } from './RecipePreparation.styled';

const RecipePreparation = () => {
  const [field] = useField('preparation'); // Specify the field name
  

  return (
    <PreparationContainer>
      <h1>Recipe Preparation</h1>
      <TextArea
        {...field}
            name="preparation"
        placeholder="Enter the recipe"
        className="text-area"
      />
    </PreparationContainer>
  );
};

export default RecipePreparation;

