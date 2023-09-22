
// import { useField } from 'formik';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DatePickerField = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <DatePicker
//         {...field}
//         {...props}
//         selected={(field.value && new Date(field.value)) || null}
//         onChange={(date) => {
//           field.onChange({ target: { name: field.name, value: date } });
//         }}
//         onBlur={field.onBlur}
//         dateFormat="dd/MM/yyyy" // Adjust the date format as needed
//       />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// export default DatePickerField;
