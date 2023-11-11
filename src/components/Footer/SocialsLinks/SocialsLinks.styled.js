import styled from 'styled-components';

export const FollowUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const LinkContainer = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #f3f3f333;
  border-radius: 10px;
  color: #f3f3f3cc;
  transition: all var(--transition-dur-and-func);

  &:hover {
    color: #f3f3f3;
    border: 1px solid #f3f3f3;
  }
`;
