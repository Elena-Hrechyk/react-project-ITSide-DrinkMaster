// import {
//   forwardRef, useState,
//   // useState
// } from 'react';

// import { AiOutlineCalendar } from 'react-icons/ai';
// import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
// import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


// const StyledDatepicker = (setFieldValue) => {
//   // const { name, value } = field;
//   // const { setFieldValue } = form;
//   const [selectedDate, setSelectedDate] = useState(Date.now());
//   const CustomInput = forwardRef(({  onClick }, ref) => {

//     return (
//       <TitleWrapper onClick={onClick} ref={ref}>
//         {format(selectedDate, 'dd/MM/yyyy')} <AiOutlineCalendar />

//       </TitleWrapper>
//     );
//   });
//   CustomInput.displayName = 'CustomInput';
//   return (
//     <>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => {
//           setSelectedDate(date);
//          setFieldValue;
//         }}
//         customInput={<CustomInput />}
//         dateFormat={'dd/MM/yyyy'}
//         calendarStartDay={1}
//         formatWeekDay={(day) => day.substr(0, 2)}
//       />
//       <CalendarGlobalStyles />
//     </>
//   );
// };

// export default StyledDatepicker;
import DatePicker from 'react-datepicker';
import { DatePickerWrapper, TitleWrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { getYear, getMonth } from 'date-fns';
import { HeadCont, Select, HeadBtn } from './StyledDatepicker.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { forwardRef, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { format } from 'date-fns';

// import { CustomInput } from './customInput.jsx';
// import { date } from 'yup';
// import sprite from '../../assets/icons/svg-sprite.svg';

export const Calendar = ({
  input,
  selectedDate,
  setSelectedDate,
  createdAt,
  setFieldValue,
 
}) => {
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };

  const years = range(1920, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
    const [selectedDate1, setSelectedDate1] = useState(Date.now());
  const CustomInput1 = forwardRef(({  onClick }, ref) => {

    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate1, 'dd/MM/yyyy')}
        <AiOutlineCalendar />

      </TitleWrapper>
    );
  });
  CustomInput1.displayName = 'CustomInput1';

  return (
    // <DatePickerWrapper>
      <DatePicker
        // selectedDate={(date) => selectedDate(date)}
        // setSelectedDate={(date) => {
        //   setSelectedDate(date);
        //   setFieldValue('date', date);
        // }}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <HeadCont>
            <HeadBtn
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              color={prevMonthButtonDisabled ? '#efede866' : '#efede8'}
            >
              <FiEye />
              {/* <svg width="16" height="16">
                <use href={sprite + '#icon-chevronup'}></use>
              </svg> */}
            </HeadBtn>

            <Select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <HeadBtn
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              color={nextMonthButtonDisabled ? '#efede866' : '#efede8'}
            >
              {/* <svg width="16" height="16">
                <use href={sprite + '#icon-chevronup'}></use>
              </svg> */}
              <FiEyeOff />
            </HeadBtn>
          </HeadCont>
        )}
        customInput={<CustomInput1/>}
        selected={selectedDate1}
        // calendarStartDay={1}
        // minDate={createdAt ? createdAt : undefined}
        dateFormat={'dd/MM/yyyy'}
        maxDate={new Date()}
        // formatWeekDay={(day) => day.substr(0, 2)}
        onChange={(date) => {
          setSelectedDate1(date);
          setFieldValue('date', date);
        }}
    />
      // { ' ' }
    // </DatePickerWrapper>
  );
};