import { useEffect } from 'react';
import {
  CountBlock,
  CountButton,
  DrinkIngredientsContainer,
  IngredientPortionContainer,
  Ingridient,
  IngridientsContainer,
  Input,
  Portion,
  TitleContainer,
  XButton,
  XImg,
} from './DrinkIngredients.styled';
import Xicon from '../../img/svg/Xicon.svg';
import { ErrorMessage, Field, FieldArray } from 'formik';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filtersOperation';
import { selectIngredients } from '../../redux/filters/selectors';
import { useSelector } from 'react-redux';
import { DoneMessage } from '../SignInPageComponents/SignInForm.styled';

const DrinkIngredients = ({ values }) => {
  // const [counter, setCounter] = useState(0);
  // const initialValue = [{ title: '', measure: '' }];
  // const [, { touched, error }] = useField('ingredients');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredient = useSelector(selectIngredients);
  const ingredientsSelector = ingredient.map((item) => {
    return { label: item, value: item };
  });
console.log(values)
  return (

    <FieldArray
      name="ingredients"
      render={({
        remove,
        push,
      }) => (
        <DrinkIngredientsContainer>
          <TitleContainer>
            <h1
            style={{ marginBottom: '0px', marginTop: '0px' }}
            >
              Ingredients
            </h1>
            <CountBlock>
              <CountButton
                type="button"
                onClick={() => {
                  let lastIndex = values.ingredients.length
                  remove(lastIndex-1);
                }}
              >
                -
              </CountButton>
              <p>{values.ingredients.length}</p>
              <CountButton
                type="button"
                
                onClick={() => {
                  push();
                }}
              >
                +
              </CountButton>
            </CountBlock>
          </TitleContainer>

          <div>
            {values.ingredients.length > 0 &&
              values.ingredients.map((item, index) => {
                return (
                  <IngridientsContainer key={index}>
                    <IngredientPortionContainer>
                      
                      <Ingridient>
                          <Field name={`ingredients.${index}.title`}>
                            {({ form }) => (
                              <DropDownMenu
                                flexDirection="row"
                                optionValue={ingredientsSelector}
                                onChange={(selectedOption) => {
                                  form.setFieldValue(
                                    `ingredients.${index}.ingredient`,
                                    selectedOption,
                                  );
                                  form.setFieldValue(
                                    `ingredients.${index}.ingredientId`,
                                    nanoid(),
                                  );
                                }}
                              />
                            )}
                        </Field>
                        <ErrorMessage name={`ingredients.${index}.ingredient`}>
                        {(msg) => <DoneMessage >{msg}</DoneMessage>}
                      </ErrorMessage>
                        </Ingridient>
                      <Portion width="150px">
                        <Field
                          name={`ingredients.${index}.measure`}
                          as={Input}
                          placeholder="Measure"
                        />
                       
                      </Portion>
                      <ErrorMessage name={`ingredients.${index}.measure`}>
                        {(msg) => <DoneMessage>{msg}</DoneMessage>}
                      </ErrorMessage>
                    </IngredientPortionContainer>
                    <XButton
                      type="button"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <XImg src={Xicon} alt={`Xicon-${index}`} />
                    </XButton>
                   
                  </IngridientsContainer>
                );
              })}
          </div>
          {/* {touched && typeof errors === 'string' ? (
            <DoneMessage>{errors}</DoneMessage>
          ) : null} */}
          {/* {typeof errors === 'string' ? <DoneMessage>{errors}</DoneMessage> : null} */}
          
        </DrinkIngredientsContainer>
      )}
    />
  //   {touched.values.ingredient && errors.values.ingredient ? (
  //     <DoneMessage>{errors.values.ingredient}</DoneMessage>
  // ) : null
  // }
  )
};

export default DrinkIngredients;

// return (
//   <FieldArray
//     name="ingredients"
//     render={({
//       form: {
//         values: { initialValue },
//       },
//       push,
//       remove,
//     }) => (
//       <DrinkIngredientsContainer>
//         <TitleContainer>
//           <h1 style={{ marginBottom: '0px', marginTop: '0px' }}>
//             Ingredients
//           </h1>
//           <CountBlock>
//             <CountButton
//               type="button"
//               onClick={() => {
//                 remove();
//                 // setCounter(counter - 1);
//               }}
//             >
//               -
//             </CountButton>
//             <p>{ingredients.length}</p>
//             <CountButton
//               type="button"
//               onClick={() => {
//                 push({...initialValue, });
//                 // setCounter(counter + 1);
//               }}
//             >
//               +
//             </CountButton>
//           </CountBlock>
//         </TitleContainer>

//         <div>
//           {ingredients.length > 0 &&
//             ingredients.map((index) => {
//               return (
//                 <>
//                   <IngridientsContainer key={index}>
//                     <IngredientPortionContainer>
//                       <Ingridient>
//                         <Field name={`ingredients.${index}.title`}>
//                           {({ form }) => (
//                             <DropDownMenu
//                               flexDirection="row"
//                               optionValue={ingredientsSelector}
//                               onChange={(selectedOption) => {
//                                 form.setFieldValue(
//                                   `ingredients.${index}.ingredient`,
//                                   selectedOption,
//                                 );
//                                 form.setFieldValue(
//                                   `ingredients.${index}.ingredientId`,
//                                   nanoid(),
//                                 );
//                               }}
//                             />
//                           )}
//                         </Field>
//                       </Ingridient>
//                       <Portion width="150px">
//                         <Field
//                           name={`ingredients.${index}.measure`}
//                           id={`ingredients.${index}.measure`}
//                           as={Input}
//                           placeholder="Measure"
//                           marginBottom="0"
//                         />
//                       </Portion>
//                     </IngredientPortionContainer>
//                     <XButton
//                       type="button"
//                       onClick={() => {
//                         setCounter(counter - 1);
//                         remove(index);
//                       }}
//                     >
//                       <XImg src={Xicon} alt={`Xicon-${index}`} />
//                     </XButton>
//                   </IngridientsContainer>
//                 </>
//               );
//             })}
//         </div>
//         {/* {typeof error === 'string' ? <ErrorText>{error}</ErrorText> : null} */}
//       </DrinkIngredientsContainer>
//     )}
//   >  {touched.ingredients && errors.ingredients ? (
//     <DoneMessage>{errors.ingredients}</DoneMessage>
//   ) : null}</FieldArray>

// );
