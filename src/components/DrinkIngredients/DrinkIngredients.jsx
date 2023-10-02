import { useEffect, useState } from 'react';
import {
  CountBlock,
  CountButton,
  DrinkIngredientsContainer,
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
const DrinkIngredients = () => {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
    // dispatch(fetchGlasses())
  }, [dispatch])

  const ingredients = useSelector(selectIngredients);
  // console.log(ingredients)
  const ingredientsSelector = ingredients.map((item) => {
    return { label: item, value: item };
  });
  
  const renderIngredientsContainers = (arrayHelpers ) => {
    const containers = [];
    // const removeIngredient = (arrayHelpers, index) => {
    //   arrayHelpers.remove(index);
    // };
    for (let i = 0; i < counter; i++) {
      containers.push(
        <IngridientsContainer key={i}>
          <Ingridient>
            <Field name={`ingredients.${i}.title`}>
              {({ form }) => (
                <DropDownMenu
                  optionValue={ingredientsSelector}
                  onChange={(selectedOption) => {
                    form.setFieldValue(
                      `ingredients.${i}.ingredient`,
                      selectedOption,
                    );
                    form.setFieldValue(
                      `ingredients.${i}.ingredientId`,
                      nanoid(),
                    );
                  }}
                />
              )}
            </Field>
          </Ingridient>
          <Portion width="150px">
            <Field
              name={`ingredients.${i}.measure`}
              as={Input}
              placeholder="Measure"
              marginBottom="0"
            />
          </Portion>
          <XButton
            type="button"
            onClick={() => arrayHelpers.remove(i)}
            // onClick={() => {
              
            //   remove(i);
            //   containers.splice(i, 1);
            //   console.log(containers);
            // }}
          >
            <XImg src={Xicon} alt={`Xicon-${i}`} />
          </XButton>
        </IngridientsContainer>,
      );
    }
    return containers;
  };

  return (
    <DrinkIngredientsContainer>
      <TitleContainer>
        <h1 style={{ marginBottom: '0px', marginTop: '0px' }}>Ingredients</h1>
        <CountBlock>
          <CountButton
            onClick={() => {
              if (counter === 0) {
                return;
              }
              setCounter(counter - 1);
            }}
          >
            -
          </CountButton>
          <p>{counter}</p>
          <CountButton onClick={() => setCounter(counter + 1)}>+</CountButton>
        </CountBlock>
      </TitleContainer>
      <FieldArray name="ingredients"
        render = {(arrayHelpers ) => (
          <div>{renderIngredientsContainers(arrayHelpers )}</div>
        )}
      />
    </DrinkIngredientsContainer>
  );
};
// { insert, remove, push, arrayHelpers }
export default DrinkIngredients;
