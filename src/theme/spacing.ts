import { moderateScale } from 'react-native-size-matters';

const raw = {
  xxxs: moderateScale(4),
  xxs: moderateScale(6),
  xs: moderateScale(8),
  sm: moderateScale(10),
  md: moderateScale(12),
  lg: moderateScale(14),
  xl: moderateScale(16),
  xxl: moderateScale(18),
  xxxl: moderateScale(20),
};

export const spacing = {
  margin: {
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
  padding: {
    xl: `${raw.xl}px`,
    sm: `${raw.sm}px`,
    md: `${raw.md}px`,
    lg: `${raw.lg}px`,
    raw: {
      xl: raw.xl,
      sm: raw.sm,
      md: raw.md,
      lg: raw.lg,
    },
  },
};
