// import React from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
// import { useState } from 'react';
import DrinkIngredients from './Components/DrinkIngredientsFields/DrinkIngredients';
import DropDownMenu from './Components/DropDownList/DropDownMenu';
// import { Formik, Field, Form } from 'formik';

// onSubmit={(values) => {
//   // Handle form submission here
//   console.log('Selected option:', values.selectedOption);
// }}

const AddDrinkPage = () => {
  

  const formik = useFormik({
    initialValues: {
      title: '',
      aboutRecipe: '',
      category: '',
      alcoholic: '',
    },

    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });

  const handleCategoryChange = (categoryValue) => {
    formik.setFieldValue('category', categoryValue);
  };
  return (
    <section style={{ backgroundColor: '#0A0A11', padding: '100px' }}>
      <h2>Add drink</h2>
      {/*  */}
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: 'flex',  }}>
          <AddImage></AddImage>
          <DrinkDescriptionFields column>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Enter item title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <UnderlinedElement />
            <Input
              id="aboutRecipe"
              name="aboutRecipe"
              type="text"
              placeholder="Enter about recipe"
              onChange={formik.handleChange}
              value={formik.values.aboutRecipe}
            />
            <UnderlinedElement />
            <div style={Container2}>
              <p style={{ color: '#f3f3f380' }}>Category</p>
              <DropDownMenu
                id="category"
                name="category"
                onChange={formik.handleChange}
                style={{
                  color: 'red',
                }}
                category={handleCategoryChange}
              />
            </div>
            <UnderlinedElement />
            <RadioContainer>
              <RadioComponent>
                <RadioInput
                  type="radio"
                  id="radio-1"
                  name="alcoholic"
                  value={true}
                  onChange={formik.handleChange}
                />
                <RadioLabel htmlFor="radio-1" className="radio-label">
                  Alcoholic
                </RadioLabel>
              </RadioComponent>

              <RadioComponent>
                <RadioInput
                  type="radio"
                  id="radio-2"
                  name="alcoholic"
                  value={false}
                  onChange={formik.handleChange}
                />
                <RadioLabel htmlFor="radio-2" className="radio-label">
                  Non-alcoholic
                </RadioLabel>
              </RadioComponent>
            </RadioContainer>
          </DrinkDescriptionFields>
        </div>
<DrinkIngredients/>
        

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

const Input = styled.input`
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '18px')};
  background-color: transparent;
  border: transparent;
`;
const UnderlinedElement = styled.div`
  border-bottom: 0.5px solid #f3f3f380; /* Устанавливаем нижнее подчеркивание */
  /* Другие стили для элемента */
  padding-left: 10px;
  margin-bottom:40px;
`;

const DrinkDescriptionFields = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  paddingLeft:"40px",
}));
const Container2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '393px',
  maxHeight: '278px',
};
const AddImage = styled.div`
  width: 400px;
  height: 400px;
  background-color: #161f3780;
  border-radius: 8px;
`;
const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
RadioContainer;
const RadioComponent = styled.div`
  /* margin: 0.5rem; */
  display: flex;
  align-items: center;
`;
const RadioLabel = styled.label`
  position: relative;
  color: #f3f3f380;
`;
const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  + .radio-label {
    &:before {
      content: '';
      border-radius: 100%;
      border: 2px solid #f3f3f380;
      display: inline-block;
      width: 20px;
      height: 20px;
      position: relative;
      top: -0.2em;
      margin-right: 8px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
  }
  &:checked {
    + .radio-label {
      &:after {
        background-color: #6b3232;
        border: 2px solid #ed1515;
        box-shadow: inset 0 0 0 4px #d61313;
      }
    }
  }
  &:focus {
    + .radio-label {
      color: #d9d9d9;
      &:before {
        outline: none;
        box-shadow: inset 0 0 0 4px #000000;
        border-radius: 100%;
        border: 2px solid #ffffff;
        background: #ffffff;
      }
    }
  }
  &:focus {
    + .radio-label {
      &:after {
        outline: none;
        border-color: #800080;
      }
    }
  }
  /* &:disabled {
    + .radio-label {
      &:before {
        box-shadow: inset 0 0 0 4px #f4f4f4;
        border-color: #fc0909;
        background: #39e61a;
      }
    }
  } */
`;
// @media screen and
export default AddDrinkPage;
