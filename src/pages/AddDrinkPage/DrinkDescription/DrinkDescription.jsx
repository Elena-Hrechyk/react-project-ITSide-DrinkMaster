import { Field } from 'formik';
import DropDownMenu from '../../../components/DropDownMenu/DropDownMenu';
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
import plus from "../../../img/svg/plus.svg";

const DrinkDescription = (
  { formik, category }
  // { onFieldChange, category }
) => {
    const handleChange = (event) => {
      const { name, value } = event.target;
      formik.setFieldValue(name, value);
      //  onFieldChange(name, value); // Call the single handler with field name and value
    };
  // console.log("category",category)
  return (
    <>
      <h2 style={{display:"flex", flex:"start"}}>Add drink</h2>
      <DescriptionContainer >
        <AddImage>
          <AddImageButton style={{ backgroundColor: "white"}}>
            <img src={plus} alt="SVG Image" width={16} style={{ filter: 'invert(1)', fill: 'black'}} />
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
        //   onChange={formik.handleChange}
        //   value={formik.values.title}
        // onChange={handleChange}
        />
          <UnderlinedElement />
          
          <Field
            as={Input}
          id="aboutRecipe"
          name="aboutRecipe"
          type="text"
          placeholder="Enter about recipe"
        //   onChange={formik.handleChange}
        //   value={formik.values.aboutRecipe}
        // onChange={handleChange}
        />
        <UnderlinedElement />
        <div style={CategoryContainer}>
          <p style={{ color: '#f3f3f380' }}>Category</p>
          {/* <DropDownMenu
            id="category"
            name="category"
            // onChange={formik.handleChange}
            // style={{
            //   color: 'red',
            // }}
                      category={category}
                      category=(categoryValue) => {
                        formik.setFieldValue('category', categoryValue);
                        
                      }
          /> */}
            <Field
  name="category"
              as={DropDownMenu} // Render the DropDownMenu component
              // category={category}
              value={{category}}
              
/>
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
            //   onChange={formik.handleChange}
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
            //   onChange={formik.handleChange}
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
