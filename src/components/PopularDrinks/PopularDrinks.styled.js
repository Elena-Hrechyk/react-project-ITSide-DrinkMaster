import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const DrinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 90px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  color: white;
`;

export const PopularDrinkCont = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 28px;
`;
export const DescriptionContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: left;
  height: 89px;
  font-size: 16px;
`;
export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;

/* @media (min-width: 768px){
  width: 480px;
  } */
