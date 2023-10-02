import { Field } from 'formik';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {
  AddImage,
  CategoryContainer,
  DescriptionContainer,
  HiddenInput,
  Input,
  InputsContainer,
  RadioComponent,
  RadioContainer,
  RadioInput,
  RadioLabel,
  UnderlinedElement,
  AddImageButton,

} from './DrinkDescription.styled';
import plus from '../../img/svg/plus.svg';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories, selectGlasses } from '../../redux/filters/selectors';
import { getCategories, getGlasses } from '../../redux/filters/filtersOperation';



const DrinkDescription = ({fileValue, fieldValueFormik}) => {
  const [drinkThumb, setDrinkThumb] = useState(null);
  console.log(drinkThumb)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getGlasses())
  }, [dispatch])
  

  const categories = useSelector(selectCategories);
  
  const glasses = useSelector(selectGlasses);
  const categoriesSelect = categories.map((item) => {
    return { label: item, value: item };
  });
  const glassesSelector = glasses.map((item) => {
    return { label: item, value: item };
  });

  const handleFileChange = (e) => {
    const fileData = e.target.files[0];
    // console.log(fileData)
    setDrinkThumb(fileData);
    // fileValue(fileData);
    fieldValueFormik('drinkThumb', fileData )
  };


  return (
    <>
      <h2 style={{ display: 'flex', flex: 'start' }}>Add drink</h2>
      <DescriptionContainer>
        <AddImage>
          <AddImageButton
            style={{ backgroundColor: 'white' }}
          >
            <Field
              name="drinkThumb"
              type="file"
              as={HiddenInput}
              onChange={handleFileChange}
              accept="image/*"
            />
            <img
              src={plus}
              alt="SVG Image"
              style={{ filter: 'invert(1)', fill: 'black', marginTop: '-18px' }}
            />
          </AddImageButton>
          <p>Add image</p>
        </AddImage>
        <InputsContainer>
          <Field
            as={Input}
            id="drink"
            name="drink"
            type="text"
            placeholder="Enter item drink"
          />
          <UnderlinedElement />
          <Field
            as={Input}
            id="shortDescription"
            name="shortDescription"
            type="text"
            placeholder="Enter about recipe"
          />
          <UnderlinedElement />
          <div style={CategoryContainer}>
            <p style={{ color: '#f3f3f380' }}>Category</p>
            <Field name="category">
              {({ form }) => (
                <DropDownMenu
                  optionValue={categoriesSelect}
                  onChange={(selectedOption) =>
                    form.setFieldValue('category', selectedOption)
                  }
                />
              )}
            </Field>
          </div>
          <UnderlinedElement />
          <div style={CategoryContainer}>
            <p style={{ color: '#f3f3f380' }}>Glass</p>
            <Field name="glass">
              {({ form }) => (
                <DropDownMenu
                  optionValue={glassesSelector}
                  onChange={(selectedOption) =>
                    form.setFieldValue('glass', selectedOption)
                  }
                />
              )}
            </Field>
          </div>
          <UnderlinedElement />
          <RadioContainer>
            <RadioComponent>
              <Field
                as={RadioInput}
                type="radio"
                id="radio-1"
                name="alcoholic"
                value={'Alcoholic'}
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
                value={'Non alcoholic'}
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
