import styled from '@emotion/styled';


export const AppWrapper = styled.div`
  width: 100%;

  /* height: 100vh; */

  background-repeat: no-repeat;
  background-position: center bottom;
  background-color: ${p => p.theme.colors.backgroundColorDark};
  color: ${p => p.theme.colors.primaryTextColor};
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

