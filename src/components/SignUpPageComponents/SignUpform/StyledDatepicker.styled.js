import { createGlobalStyle, styled } from 'styled-components';
// import { Field as FormikField } from 'formik';
// export const DataBtn = styled.div`
//   padding: 6px 12px;
//   color: #ffffff;
//   background: #3e85f3;
//   border-radius: 8px;
//   font-family: Manrope;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 18px;
//   text-align: center;
//   text-transform: uppercase;
//   @media screen and (min-width: 768px) {
//     margin-top: 33px;
//     margin-bottom: 33px;
//     padding: 8px 12px;
//     font-size: 16px;
//   }
// `;
export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker__tab-loop{
  z-index:5;
}
.react-datepicker__wrapper {
     position: relative;
  }
 .react-datepicker__input-container{
  
   }
   .react-datepicker__input-container button{
    
         color: rgb(119 115 115);
 /* font-family: Manrope; */
 font-size: 14px;
 font-style: normal;
 font-weight: 400;
 line-height: 156%;
 &:hover {
     color: rgba(243, 243, 243, 1);
   }
 &:focus {
     color: rgba(243, 243, 243, 1);
   }
   @media screen and (min-width: 768px) {
    
     font-size: 17px;
   }
 }
   .react-datepicker {
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(15%, 3%);
     display: flex;
     flex-direction: column;
     align-items: center;   
     padding: 14px;
     border-radius: 8px;
     background: #161F37;    
   }

   .react-datepicker__month-container {
     float: inherit;
     box-sizing: border-box;
   }

   .react-datepicker__header {
     position: relative;
     background: #161F37; 
   }

   .react-datepicker__day-names {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 14px 8px;
     border-bottom: 1px solid rgba(255, 255, 255, 0.4);    
   }

   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
     border-bottom: 0px;
     padding: 0;
   }

   .react-datepicker__day .react-datepicker__day--018.react-datepicker__day--selected .react-datepicker__day--today{
     outline: none;
     border: none;
 }
   .react-datepicker__current-month {
     text-align: center;
     color: #F3F3F3;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     letter-spacing: -0.32px; 
     background: #161F37; 
     outline: transparent;
     /* visibility:hidden;
     display: none; */
   }

   .react-datepicker__day-name {
     margin: 0;
     padding: 8px 8px;
   
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     letter-spacing: -0.28px;  
   }

   .react-datepicker__navigation {
     margin-top: 19px;
     align-items: center;
     background: none;
     display: flex;
     justify-content: center;
     text-align: center;
     cursor: pointer;
     position: absolute;
     top: 2px;
     padding: 0;
     border: none;
     z-index: 1;
     height: 32px;
     width: 32px;
     text-indent: -999em;
     overflow: hidden;
   }
   .react-datepicker__navigation-icon {
     position: relative;
     top: -1px;
     font-size: 20px;
     width: 0;
 }
  .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon:before {
     border-color: #ccc;
     border-style: solid;
     border-width: 3px 3px 0 0;
     content: "";
     display: block;
     height: 9px;
     position: absolute;
     top: 6px;
     width: 9px;
 }
.react-datepicker__navigation-icon--previous {
     right: -2px;}

 .react-datepicker__navigation-icon--previous::before {    
        transform: rotate(225deg);
     right: -7px;
 }

 .react-datepicker__year-dropdown{
   display: flex;
     /* flex-wrap: wrap; */
     gap: 5px;
     justify-content: center;
     flex-direction: column;
     align-items: center;}

   .react-datepicker__navigation--previous {
     position:absolute;
     left: 14px;
     width: 18px;
     height:18px;    
   }

   .react-datepicker__navigation--next { 
     position:absolute;    
     right: 14px;
     width: 18px;
     height: 18px;
   }

   .react-datepicker__navigation-icon--next:before {
     transform: rotate(45deg);
     left: -7px;
 }

   .react-datepicker__navigation-icon::before:hover:focus {
     border-color: white;
   }


   .react-datepicker__week {
     display: flex;
     align-items: center;
     justify-content: space-between;
     color: red;
   }

   .react-datepicker__day {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 8px;
     flex-shrink: 0;
     margin: 0;
     width: 32px;
     height: 32px;
     border-radius: 50%;
     color: white;
         font-family: Manrope;
     font-size: 14px;
     font-style: normal;
     font-weight: 400;
     line-height: 18px;
     text-align: center;
   }

   .react-datepicker__month {
     display: flex;
     gap: 7px;
     flex-direction: column;
     justify-content: space-between;
     padding-top: 16px;
     margin: 0;
   }

   .react-datepicker__day--selected {
     background-color:white;
     color:#3e85f3;
     font-size: 14px;
   }
   .react-datepicker__day--selected:hover {
     border-radius: 50%;
     background-color:white;
   }

   .react-datepicker__day:hover {
     border-radius: 50%;
     background-color:white;
     color:#3e85f3;
   }

   .react-datepicker__day--keyboard-selected {
     border-radius: 50%;
     background-color:white;
     color:#3e85f3;
   }

   .react-datepicker__day--weekend {
     opacity: 50%;
   }

   .react-datepicker__day--outside-month {
     background-color: transparent;
     pointer-events: none;
     opacity: 0;
   }

   .react-datepicker__view-calendar-icon input {
     padding: 6px 10px 5px 13px;
     color: rgba(243, 243, 243, 0.50);
     /* font-family: Manrope; */
     font-size: 14px;
     font-style: normal;
     font-weight: 400;
     line-height: 18px; /* 128.571% */ 
   }

   .react-datepicker__triangle {
     visibility: hidden;
   }

   /* .react-datepicker__navigation-icon--next{
     visibility:hidden;
   } */


 /* .react-datepicker__navigation-icon--previous{
 visibility:hidden;

   }
 .react-datepicker__navigation-icon--next:before {
     transform: rotate(45deg);
     left: -150px;
     background-color:yellow
 /* } */
   .react-datepicker__aria-live{
 visibility:hidden;
     display:none;
   } 
 `;

export const TitleWrapper = styled.div`
  /* width: 335px; */
  width: 100%;
  height: 54px;
  /* max-width: 335px; */
  /* border: 1px solid rgba(243, 243, 243, 0.2); */

  padding-left: 18px;
  padding-right: 18px;
  color: #ffffff;
  background: transparent;
  border-radius: 200px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;

  border-radius: 200px;
  outline: 1px solid rgba(243, 243, 243, 0.2);
  /* outline: transparent; */
  border: none;

  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;

    /* border-radius: 200px; */
    /* outline: 5px solid green; */
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }

  &:focus {
    outline: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
    /* outline: 5px solid green; */
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }
`;

export const DatePickerWrapper = styled.div`
  /* width: 335px; */
  width: 100%;
  height: 54px;
  /* max-width: 335px; */
  border: 1px solid rgba(243, 243, 243, 0.2);
  outline: transparent;

  padding-left: 18px;
  padding-right: 18px;
  color: #ffffff;
  background: transparent;
  border-radius: 200px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;

  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  /* opacity: 0.8; */
  display: flex;
  justify-content: space-between;
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
  }

  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    opacity: 0.8;
    border-radius: 200px;
  }
`;
export const HeadCont = styled.div``;
export const Select = styled.select``;
export const HeadBtn = styled.button``;

