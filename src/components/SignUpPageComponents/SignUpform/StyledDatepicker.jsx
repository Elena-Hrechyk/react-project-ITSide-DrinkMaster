import DatePicker from 'react-datepicker';
import { TitleWrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

import { getYear, getMonth } from 'date-fns';
import { HeadCont, Select, HeadBtn } from './StyledDatepicker.styled';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { forwardRef, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { format } from 'date-fns';

export const Calendar = ({ createdAt, setFieldValue }) => {
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
  const CustomInput1 = forwardRef(({ onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate1, 'dd/MM/yyyy')}
        <AiOutlineCalendar />
      </TitleWrapper>
    );
  });
  CustomInput1.displayName = 'CustomInput1';

  return (
    <DatePicker
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
            type="button"
          >
            <FiChevronLeft color="rgba(243, 243, 243, 1)" />
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
            type="button"
          >
            <FiChevronRight
              color={nextMonthButtonDisabled ? 'transparent' : '#F3F3F3'}
            />
          </HeadBtn>
        </HeadCont>
      )}
      customInput={<CustomInput1 />}
      selected={selectedDate1}
      calendarStartDay={1}
      maxDate={new Date()}
      minDate={createdAt ? createdAt : undefined}
      dateFormat={'dd/MM/yyyy'}
      formatWeekDay={(day) => day.substr(0, 2)}
      onChange={(date) => {
        setSelectedDate1(date);
        setFieldValue('date', date);
      }}
    />
  );
};
