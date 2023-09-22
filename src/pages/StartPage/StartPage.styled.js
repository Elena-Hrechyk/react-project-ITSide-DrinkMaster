import styled from 'styled-components';
import WelcomeBG from '../../img/start-page/BGStartPageMob.png';
import WelcomeBG2x from '../../img/start-page/BGStartPageMob@2x.png';
export const StartSection = styled.section`
  background-image: url(${WelcomeBG});
  background-size: cover; /* Adjust as needed */
  background-repeat: no-repeat;
@media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${WelcomeBG2x});
    }
`

export const H1 = styled.h1`
  color: #fafafa;
  font-feature-settings: 'liga' off;
  font-family: Manrope;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px; /* 110% */
  letter-spacing: -0.8px;
`;
export const P = styled.p`
  color: #fafafa;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
`;
export const SignUPButton = styled.button`
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  display: inline-flex;
  padding: 18px 44px;
  align-items: flex-start;
  gap: 10px;
`;
export const SignInButton = styled.button`
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background:
    transparent;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  display: inline-flex;
  padding: 18px 44px;
  align-items: flex-start;
  gap: 10px;
`;