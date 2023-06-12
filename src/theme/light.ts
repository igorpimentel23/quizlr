import { ITheme, extendTheme } from 'native-base';
import { DefaultTheme } from 'styled-components/dist/types';
import { fonts } from './fonts';
import { spacing } from './spacing';

const colors = {
  green: {
    400: '#28B18F',
    500: '#00FF00',
  },
  yellow: {
    400: '#FFD449',
    500: '#BB8F00',
  },
  blue: {
    400: '#34CBC2',
    500: '#00425A',
  },
  orange: {
    400: '#FBB668',
    500: '#F17D23',
  },
  error: '#DC5F5F',
};

const lightBaseTheme: ITheme = extendTheme({
  colors,
});

const light: DefaultTheme = {
  colors: {
    primary: '#DCE8EB',
    secondary: '#D5EAF2',
    gradient: {
      start: '#D5EAF2',
      end: '#EFF7FA',
    },
    background: '#fff',
    text: '#000',
    secondaryText: 'rgba(0, 0, 0, 0.4)',
    ...colors,
  },
  fonts,
  ...spacing,
};

export { light, lightBaseTheme };
