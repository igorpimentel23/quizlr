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
  family: {
    light: 'SF Pro Rounded Light', // 300
    regular: 'SF Pro Rounded Regular', // 400
    medium: 'SF Pro Rounded Medium', // 500
    semibold: 'SF Pro Rounded Semibold', // 600
    bold: 'SF Pro Rounded Bold', // 700
    heavy: 'SF Pro Rounded Heavy', // 800
  },
};
