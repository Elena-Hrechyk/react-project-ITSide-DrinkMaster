
// import * as React from 'react';
import { useState } from 'react';
// import styled from '@emotion/styled';
import Select from 'react-select';
// import styled from 'styled-components';


const DropDownMenu = ({category}) => {
  const optionValue = [
    { label: 'Cocktail glass', value: 'Cocktail glass' },
    { label: ' glass', value: ' glass' },
    { label: 'Cocktail ', value: 'Cocktail ' },
    { label: 'Cocktail glass', value: 'Cocktail glass' },
    { label: ' glass', value: ' glass' },
    { label: 'Cocktail ', value: 'Cocktail ' },
  ];
  // const [value, setValue] = useState('');
  // const colorStyles = {
  //   dropdownIndicator: (styles) => {
  //     console.log(styles);
  //   },
  // };
  const [isOpen, setIsOpen] = useState(false);
  

  // const handleChange = (customStyles) => {
  //   console.log("selectedOption",customStyles)

  //   category(customStyles); // Call the category function with the selected value
  // };
  // const handleChange = ({value}) => {
  //   category(value)
  // };
  const customStyles = {
    // width:"300px",
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      borderColor: 'transparent',
      boxShadow: 'none',
      // '&:hover': {
      //   // Define styles for when the control is hovered (optional)
      //   borderColor: 'transparent',
      // },
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: '#161F37',
      borderRadius:20,
      color: isFocused ? '#F3F3F3' : '#F3F3F366',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#161F37',
      borderRadius: 20,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#F3F3F3',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      cursor: 'pointer',
        '&:hover': {
        // Define styles for when the control is hovered (optional)
        color: '#F3F3F3',
      },
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
  };

  const selectContainer = {
    // width: '126px',
    // flex:1
  }
  return (

<div style={selectContainer}>
      <Select
        options={optionValue}
        // name="category"
        placeholder=""
        onChange={category}
        styles={customStyles}
        // colorStyles
        // customStyles
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
      />
</div>

  );
};

export default DropDownMenu;
