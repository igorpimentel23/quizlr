import { styled } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.xxs};
  font-family: ${({ theme }) => theme.fonts.family.medium};
  margin-top: ${({ theme }) => theme.margin.xxxs};
`;
