import {  useState } from 'react';
// import DropDownMenu from '../../../components/DropDownMenu/DropDownMenu';
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
import Xicon from "../../img/svg/Xicon.svg"
import { Field, FieldArray } from 'formik';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const DrinkIngredients = () => {

  const [counter, setCounter] = useState(0);

    
  
  const optionValueIngrients = [
    { label: 'Cocktail glass', value: 'Cocktail glass' },
    { label: 'Shake', value: 'Shake' },
    { label: 'Cocktail ', value: 'Cocktail ' },
    { label: 'glass', value: 'glass' },
    { label: 'Other/Unknown', value: 'Other/Unknown' },
    { label: 'Ordinary Drink', value: 'Ordinary Drink' },
    { label: 'Cocoa', value: 'Cocoa' },
    { label: 'Shot', value: 'Shot' },
    { label: 'Coffee/Tea', value: 'Coffee/Tea' },
    { label: 'Homemade Liqueur', value: 'Homemade Liqueur' },
    { label: 'Punch/Party Drink', value: 'Punch/Party Drink' },
    { label: 'Beer', value: 'Beer' },
    { label: 'Soft Drink', value: 'Soft Drink' },
  ];
  const renderIngredientsContainers = ({ remove }) => {
    
    const containers = [];
    // const removeIngredient = (arrayHelpers, index) => {
    //   arrayHelpers.remove(index);
    // };
    for (let i = 0; i < counter; i++) {
      containers.push(
        <IngridientsContainer key={i}>
          <Ingridient>

          <Field name={`ingredients.${i}.ingredient`}>{({ form}) => (
                <DropDownMenu
                optionValue={optionValueIngrients}
                  onChange={(selectedOption) => form.setFieldValue(`ingredients.${i}.ingredient`, selectedOption)}
                />
              )}</Field>

          </Ingridient>
          <Portion width="150px">
            <Field name={`ingredients.${i}.portion`}as={Input} placeholder="Portion" marginBottom="0" />
          </Portion>
          <XButton type="button" onClick={() => {
            remove(i)

            containers.splice(i, 1)
            console.log(containers)
            
          }}>
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
          <CountButton onClick={() => {
            if (counter === 0) {
              return
            }
            setCounter(counter - 1)
          }}>-</CountButton>
          <p>{counter}</p>
          <CountButton onClick={()=>setCounter(counter + 1)}>+</CountButton>
        </CountBlock>
      </TitleContainer>
      <FieldArray name="ingredients">
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
