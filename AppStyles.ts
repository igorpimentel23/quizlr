import { styled } from 'styled-components/native';

export const AppContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
