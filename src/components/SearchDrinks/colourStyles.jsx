export const colourStyles = {

  control: (styles, { isFocused }) => ({
    ...styles,
    background: '#161f37',
    width: '335px',
    height: '54px',
    borderRadius: '20px',
    borderStyle: 'none',
    color: '#f3f3f3',
    borderColor: isFocused ? 'orange' : 'grey',
    "@media only screen and (min-width: 768px)": {
      width: '199px',
      height: '56px',
  },
    "@media only screen and (min-width: 1440px)": {
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
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0em',
    textAlign: 'center',
  }),
  input: (styles) => ({
    ...styles,
    color: '#f3f3f3',
    fontFamily: 'Manrope',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0em',
    textAlign: 'center',
  }),
  menuList: (styles) => ({
    ...styles,
    background: '#161f37',
    borderRadius: '20px',
    padding: '14px 23px',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? '#161f37' : isSelected ? '#4f5f88' : undefined,
    zIndex: 1,
    color: '#f3f3f3',
    fontFamily: 'Manrope',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0em',
    borderRadius: '20px',
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
    borderRadius: '20px',
  }),
};