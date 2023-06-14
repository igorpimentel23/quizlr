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
  error: '#D84E4E',
  white: '#fff',
};

const darkBaseTheme: ITheme = extendTheme({
  colors,
});

const dark = {
  colors: {
    primary: '#003A4F',
    secondary: '#002634',
    gradient: {
      start: '#002634',
      end: '#00425A',
    },
    background: '#000',
    secondaryBackground: '#161616',
    tertiaryBackground: 'rgba(255, 255, 255, 0.2)',
    text: '#fff',
    secondaryText: 'rgba(255, 255, 255, 0.4)',
    ...colors,
  },
  fonts,
  ...spacing,
};

export { dark, darkBaseTheme };
