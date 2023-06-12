import { moderateScale } from 'react-native-size-matters';

const raw = {
  xxxs: moderateScale(10),
  xxs: moderateScale(12),
  xs: moderateScale(13),
  sm: moderateScale(14),
  md: moderateScale(15),
  lg: moderateScale(16),
  xl: moderateScale(17),
  xxl: moderateScale(18),
  xxxl: moderateScale(22),
};

export const fonts = {
  sizes: {
    xxxs: `${raw.xxxs}px`,
    xxs: `${raw.xxs}px`,
    xs: `${raw.xs}px`,
    sm: `${raw.sm}px`,
    md: `${raw.md}px`,
    lg: `${raw.lg}px`,
    xl: `${raw.xl}px`,
    xxl: `${raw.xxl}px`,
    xxxl: `${raw.xxxl}px`,
    raw,
  },
};
