import styled from 'styled-components';
import { Link} from 'react-router-dom';


export const SignUpSection = styled.section`
 
  text-align: center;
  padding: 191px 20px 191px 20px; 
`;



export const H2 = styled.h2`
  margin-bottom: 28px;
  text-align: left;

  color: #f3f3f3;
  font-feature-settings: 'liga' off;
  /* font-family: Manrope; */
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.286%;
  letter-spacing: -0.56px;
`;
export const FormWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  max-width: 335px;
  

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const RouteLink = styled(Link)`
  color: #f3f3f3;
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;