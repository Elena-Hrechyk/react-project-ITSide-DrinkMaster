import { useState } from 'react';
import DropDownMenu from '../../../components/DropDownMenu/DropDownMenu';
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
import Xicon from "../../../img/svg/Xicon.svg"
import { Field, FieldArray } from 'formik';

const DrinkIngredients = ({ formik }) => {
  const [counter, setCounter] = useState(0);
  const renderIngredientsContainers = () => {
    const containers = [];
    const removeIngredient = (arrayHelpers, index) => {
      arrayHelpers.remove(index);
    };
    for (let i = 0; i < counter; i++) {
      containers.push(
        <IngridientsContainer key={i}>
          <Ingridient>
            <Field
              as={DropDownMenu}
              id={`category-${i}`}
              name={`category-${i}`}
              // onChange={formik.handleChange}
              onChange={(selectedOption) => {
                // Update Formik values with the selected option
                formik.setFieldValue(`category-${i}`, selectedOption.value);
              }}
              style={{
                color: 'red',
              }}
            // category={handleCategoryChange}
            />
          </Ingridient>
          <Portion width="150px">
            <Field as={Input} placeholder="Portion" marginBottom="0" />
          </Portion>
          <XButton onClick={() => removeIngredient(i)}>
            <XImg src={Xicon} alt={`Xicon-${i}`} />
          </XButton>
        </IngridientsContainer>
      );
   
    }
    return containers;
  }

  return (
    <DrinkIngredientsContainer>
      <TitleContainer>
        <h1 style={{ marginBottom: '0px', marginTop: '0px' }}>Ingredients</h1>
        <CountBlock>
          <CountButton onClick={() => setCounter(counter - 1)}>-</CountButton>
          <p>{counter}</p>
          <CountButton onClick={() => setCounter(counter + 1)}>+</CountButton>
        </CountBlock>
      </TitleContainer>
      <FieldArray name="ingridients">
            {({ insert, remove, push }) => (
          <div>             
            {renderIngredientsContainers({ insert, remove, push })}

              </div>
              )}
            </FieldArray>
      

    </DrinkIngredientsContainer>
  );
};

export default DrinkIngredients;
      {/* <IngridientsContainer>
        
        <Ingridient >
          <DropDownMenu
            id="category"
            name="category"
            // onChange={formik.handleChange}
            style={{
              color: 'red',
              
            }}
            // category={handleCategoryChange}
          />
        </Ingridient>
        <Portion width="150px">
          <Input placeholder="Portion" marginBottom="0" />
        </Portion>
        <XButton>
          <XImg src={Xicon} alt="Xicon"  /> 
          </XButton>
      </IngridientsContainer> */}