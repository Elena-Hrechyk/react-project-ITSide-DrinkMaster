import styled from 'styled-components';

export const FollowUsContainer = styled.div`
  width: 164px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
`;

export const LinkFollowUs = styled.a`
  width: 44px;
  height: 44px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.linkSeeMore};
  border-radius: 10px;
  color: ${({ theme }) => theme.linkSeeMore};
  transition: all var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colorText};
    color: ${({ theme }) => theme.colorText};
  }
`;
