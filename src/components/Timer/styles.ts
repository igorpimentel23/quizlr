import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text`
  margin-left: ${({ theme }) => theme.margin.xxxs};
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;
