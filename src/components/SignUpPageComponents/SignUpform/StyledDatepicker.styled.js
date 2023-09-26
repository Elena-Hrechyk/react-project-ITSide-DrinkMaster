import { createGlobalStyle, styled } from 'styled-components';
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-family: Manrope;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
   

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
   
   
    padding: 14px;
  border-radius: 8px;
background: #161F37;
/* z-index: 3000; */
    
    
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
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
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
    /* margin-top: 24px; */
    position:absolute;
    top: 19px;
    
    
  }
  .react-datepicker__navigation--previous {
    left: 14px;
    width: 18px;
    height: 18px;
   
  }
  .react-datepicker__navigation--next {
    right: 14px;
    width: 18px;
    height: 18px;
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
    font-family: Inter;
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
  .react-datepicker__navigation-icon--next{
    /* visibility:hidden; */

  }
react-datepicker__navigation react-datepicker__navigation--next
.react-datepicker__navigation-icon--previous{
/* visibility:hidden; */

  }

  .react-datepicker__aria-live{
/* visibility:hidden; */
    /* display:none; */
  }
`;

export const TitleWrapper = styled.button`
  width: 372px;
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
  opacity: 0.8;
  display: flex;
  justify-content: space-between;

  .react-datepicker__navigation .react-datepicker__navigation--next {
    font-weight: 700;
    width: 30px;
    height: 30px;
color: white;  }
`;
