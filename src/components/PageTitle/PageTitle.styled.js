import styled from '@emotion/styled';

export const Title = styled.h1` 
  font-family: ${p => p.theme.font};
  font-size: ${p => p.theme.fontSizes[4]}px;
  
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.mobile};
  color: ${p => p.theme.colors.primaryTextColor};
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  `;
