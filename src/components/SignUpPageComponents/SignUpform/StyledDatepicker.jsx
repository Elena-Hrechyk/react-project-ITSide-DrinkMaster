import {
  forwardRef,
  // useState
} from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const StyledDatepicker = ({ field, form }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    const nowDate =  format(Date.now(), 'dd/MM/yyyy')
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {/* {format(new Date(value), 'dd/MM/yyyy')} <AiOutlineCalendar /> */}
        {value ?? nowDate }
        <AiOutlineCalendar />
      </TitleWrapper>
    );
  });
  CustomInput.displayName = 'CustomInput';
  return (
    <>
      <DatePicker
        {...field}
        selected={value ? new Date(value) : null}
        onChange={(date) => {
          setFieldValue(name, date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
