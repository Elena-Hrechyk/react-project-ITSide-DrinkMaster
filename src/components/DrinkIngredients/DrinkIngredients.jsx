import { useEffect, useState } from 'react';
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
import { Field, FieldArray } from 'formik';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filtersOperation';
import { selectIngredients } from '../../redux/filters/selectors';
import { useSelector } from 'react-redux';
import { DoneMessage } from '../SignInPageComponents/SignInForm.styled';
// import { DoneMessage } from '../SignInPageComponents/SignInForm.styled';

const DrinkIngredients = ({errors, touched}) => {
  const [counter, setCounter] = useState(0);
  const initialValue = { title: '', measure: '' };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);
  const ingredientsSelector = ingredients.map((item) => {
    return { label: item, value: item };
  });

  return (
    <FieldArray
      name="ingredients"
      render={({
        form: {
          values: { ingredients },
        },
        push,
        remove,
      }) => (
        <DrinkIngredientsContainer>
          <TitleContainer>
            <h1 style={{ marginBottom: '0px', marginTop: '0px' }}>
              Ingredients
            </h1>
            <CountBlock>
              <CountButton
                type="button"
                onClick={() => {
                  remove();
                  setCounter(counter - 1);
                }}
              >
                -
              </CountButton>
              <p>{counter}</p>
              <CountButton
                type="button"
                onClick={() => {
                  push(initialValue);
                  setCounter(counter + 1);
                }}
              >
                +
              </CountButton>
            </CountBlock>
          </TitleContainer>

          <div>
            {ingredients.length > 0 &&
              ingredients.map((index) => {
                return (
                  <>
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
                        </Ingridient>
                        <Portion width="150px">
                          <Field
                            name={`ingredients.${index}.measure`}
                            as={Input}
                            placeholder="Measure"
                            marginBottom="0"
                          />
                        </Portion>
                      </IngredientPortionContainer>
                      <XButton
                        type="button"
                        onClick={() => {
                          setCounter(counter - 1);
                          remove(index);
                        }}
                      >
                        <XImg src={Xicon} alt={`Xicon-${index}`} />
                      </XButton>
                    </IngridientsContainer>
                  </>
                );
              })}
          </div>
          {/* {typeof error === 'string' ? <ErrorText>{error}</ErrorText> : null} */}
        </DrinkIngredientsContainer>
      )}
    >  {touched.ingredients && errors.ingredients ? (
      <DoneMessage>{errors.ingredients}</DoneMessage>
    ) : null}</FieldArray>
  
  );
};

export default DrinkIngredients;
