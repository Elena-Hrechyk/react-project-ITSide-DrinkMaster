import { Field } from 'formik';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {
  AddImage,
  CategoryContainer,
  DescriptionContainer,
  Input,
  InputsContainer,
  RadioComponent,
  RadioContainer,
  RadioInput,
  RadioLabel,
  UnderlinedElement,
  AddImageButton
} from './DrinkDescription.styled';
import plus from "../../img/svg/plus.svg";

// import { useRef } from 'react';

const DrinkDescription = () => {
  
  const optionValueCategory = [
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
  const glass = [
    "Highball glass",
    "Cocktail glass",
    "Old-fashioned glass",
    "Whiskey Glass",
    "Collins glass",
    "Pousse cafe glass",
    "Champagne flute",
    "Whiskey sour glass",
    "Cordial glass",
    "Brandy snifter",
    "White wine glass",
    "Nick and Nora Glass",
    "Hurricane glass",
    "Coffee mug",
    "Shot glass",
    "Jar",
    "Irish coffee cup",
    "Punch bowl",
    "Pitcher",
    "Pint glass",
    "Copper Mug",
    "Wine Glass",
    "Beer mug",
    "Margarita/Coupette glass",
    "Beer pilsner",
    "Beer Glass",
    "Parfait glass",
    "Mason jar",
    "Margarita glass",
    "Martini Glass",
    "Balloon Glass",
    "Coupe Glass"
  ]
  const optionValueGlass = glass.map((glass) => {
    return { label: glass, value: glass };
  });
  return (
    <>
      <h2 style={{display:"flex", flex:"start"}}>Add drink</h2>
      <DescriptionContainer >
        <AddImage>
          <AddImageButton style={{ backgroundColor: "white"}}>
            <img src={plus} alt="SVG Image" width={16} style={{ filter: 'invert(1)', fill: 'black' }} />
            
          </AddImageButton>
          <p>Add image</p>
      </AddImage>
      <InputsContainer >
          <Field
            as={Input}
          id="title"
          name="title"
          type="text"
          placeholder="Enter item title"
        />
          <UnderlinedElement />
          
          <Field
            as={Input}
          id="aboutRecipe"
          name="aboutRecipe"
          type="text"
          placeholder="Enter about recipe"
        />
        <UnderlinedElement />
        <div style={CategoryContainer}>
          <p style={{ color: '#f3f3f380' }}>Category</p>
              <Field name="category">{({ form}) => (
                <DropDownMenu
                optionValue={optionValueCategory}
                  onChange={(selectedOption) => form.setFieldValue('category', selectedOption)}
                />
              )}</Field>

          </div>
          <UnderlinedElement />
          <div style={CategoryContainer}>
            <p style={{ color: '#f3f3f380' }}>Glass</p>
            <Field name="glass">{({ form}) => (
                <DropDownMenu
                optionValue={optionValueGlass}
                  onChange={(selectedOption) => form.setFieldValue('glass', selectedOption)}
                />
              )}</Field>
            {/* <Field
              name="glass"
              render={({ form }) => (
                <DropDownMenu
                optionValue={optionValueGlass}
                  onChange={(selectedOption) => form.setFieldValue('glass', selectedOption)}
                />
              )}
            /> */}
        </div>
        <UnderlinedElement />
        <RadioContainer>
          <RadioComponent>
          <Field
              as={RadioInput}
              type="radio"
              id="radio-1"
              name="alcoholic"
              value={true}
            />
            <RadioLabel htmlFor="radio-1" className="radio-label">
              Alcoholic
            </RadioLabel>
          </RadioComponent>

          <RadioComponent>
              <Field
              as={RadioInput}
              type="radio"
              id="radio-2"
              name="alcoholic"
              value={false}
            />
            <RadioLabel htmlFor="radio-2" className="radio-label">
              Non-alcoholic
            </RadioLabel>
          </RadioComponent>
        </RadioContainer>
      </InputsContainer>
      </DescriptionContainer>
      </>
  );
};
export default DrinkDescription;

