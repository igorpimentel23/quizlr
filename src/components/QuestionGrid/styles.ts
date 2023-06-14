import { LinearGradient } from 'expo-linear-gradient';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CardContentContainer = styled.View`
  padding: ${({ theme }) => theme.padding.xl};
  justify-content: center;
  height: 88%;
  width: 88%;
  overflow: hidden;
`;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.gradient.start, theme.colors.gradient.end],
}))`
  flex: 1;
`;

export const RightFloatingContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  padding-right: ${({ theme }) => theme.padding.sm};
  padding-bottom: ${({ theme }) => theme.padding.xl};
  width: 12%;
`;

export const LeftFloatingContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: ${({ theme }) => theme.padding.xl};
  width: 88%;
  height: 12%;
  overflow: hidden;
  margin-bottom: ${({ theme }) =>
    Platform.OS === 'ios' ? 0 : theme.margin.xl};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-family: ${({ theme }) => theme.fonts.family.semibold};
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.margin.xxs};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.xxs};
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;

export const DescriptionBold = styled(Description)`
  font-family: ${({ theme }) => theme.fonts.family.bold};
`;

export const PlaylistContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  align-items: center;
  padding: ${({ theme }) => `${theme.padding.sm} ${theme.padding.xl}`};
`;

export const PlaylistTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.semibold};
  margin-left: ${({ theme }) => theme.margin.xxxs};
  margin-right: auto;
`;

export const QuestionText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.xxxl};
`;

export const AnswerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.green[400]};
  font-family: ${({ theme }) => theme.fonts.family.heavy};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
`;

export const AnswerText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  /* margin-bottom: auto; */
`;

export const RatingText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
`;

export const RatingButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
`;

export const QuestionContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const AnswerButton = styled.TouchableOpacity<{ bgColor: ColorType }>`
  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ theme }) => `${theme.padding.sm} ${theme.padding.xl}`};
  border-radius: ${moderateScale(8)}px;
  flex-direction: row;

  align-items: center;
  box-sizing: border-box;
`;

export const AnswerButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  margin-right: auto;
  max-width: 93%;
`;
