import { useState } from 'react';
import Select from 'react-select';
// import styled from 'styled-components';

const DropDownMenu = ({onChange, optionValue }) => {


  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      borderColor: 'transparent',
      boxShadow: 'none',
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: '#161F37',
      borderRadius: 20,
      color: isFocused ? '#F3F3F3' : '#F3F3F366',
      display: 'flex',
      alignItems: 'flex-start',
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
    width: '166px',
  };
  return (
    <div style={selectContainer}>
      <Select
        options={optionValue}
        placeholder=""
        styles={{ ...customStyles }}
        
        onChange={(selectedOption) => onChange(selectedOption.value)}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default DropDownMenu;
