import { ITheme, extendTheme } from 'native-base';
import { fonts } from './fonts';
import { spacing } from './spacing';

const colors = {
  green: {
    50: '#00FF00',
    400: '#28B18F',
    500: '#1F8A70',
    600: '#16624F',
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
  white: '#fff',
};

const lightBaseTheme: ITheme = extendTheme({
  colors,
});

const light = {
  colors: {
    primary: '#DCE8EB',
    secondary: '#D5EAF2',
    gradient: {
      start: '#D5EAF2',
      end: '#EFF7FA',
    },
    background: '#fff',
    secondaryBackground: '#161616',
    tertiaryBackground: 'rgba(0, 0, 0, 0.2)',
    text: '#000',
    secondaryText: 'rgba(0, 0, 0, 0.4)',
    ...colors,
  },
  fonts,
  ...spacing,
};

export { light, lightBaseTheme };
