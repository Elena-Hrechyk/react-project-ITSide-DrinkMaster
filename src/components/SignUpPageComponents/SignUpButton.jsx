import styled from 'styled-components';

export const SignUpButtonSt = styled.button`
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  width: ${(props) => props.width || '132px'};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 112.5%;
  /* display: inline-flex; */
  padding: 18px 24px;
`;


export const SignUpButton = ({ width, textColor, value="Sign Up" }) => {
  return (
    <SignUpButtonSt  width={width} textColor={textColor}>
      {value}
    </SignUpButtonSt>
  );
};