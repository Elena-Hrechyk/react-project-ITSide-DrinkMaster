export const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: '#161f37',
    width: '335px',
    height: '54px',
    borderRadius: '200px',
    borderStyle: 'none',
    color: '#F3F3F3',
    borderColor: isFocused ? 'orange' : 'grey',
    '@media only screen and (min-width: 768px)': {
      width: '199px',
      height: '56px',
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    background: 'none',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#f3f3f3',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.29',
    marginLeft: '16px',
    '@media only screen and (min-width: 768px)': {
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  input: (styles) => ({
    ...styles,
    color: '#F3F3F3',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.29',
    '@media only screen and (min-width: 768px)': {
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  menuList: (styles) => ({
    ...styles,
    backgroundColor: '#161f37',
    borderRadius: '20px',
    padding: '14px 23px',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? '#161f37' : isSelected ? '#4f5f88' : undefined,
    zIndex: 1,
    color: isFocused ? '#F3F3F3' : '#F3F3F366',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.29',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    '@media only screen and (min-width: 768px)': {
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#F3F3F3',
    marginLeft: '16px',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.29',
    '@media only screen and (min-width: 768px)': {
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
    borderRadius: '20px',
  }),
};

console.log(colourStyles);
