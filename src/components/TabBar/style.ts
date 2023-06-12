import { styled } from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LeftContainer = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  justify-content: center;
  margin-left: ${({ theme }) => theme.margin.xl};
`;

export const RightContainer = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  justify-content: center;
  margin-right: ${({ theme }) => theme.margin.xl};
`;
